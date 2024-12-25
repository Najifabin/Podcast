const podcasts = require('../models/podcastModel')
const episodes = require('../models/episodeModel')

// create podcast

exports.createPodcastController = async (req,res)=>{
    console.log("inside createPodcastController");
    const userId = req.userId
    // console.log(userId);
    // console.log(req.body);
    try{
        const { title, desc, tags, format, category } = req.body;

        // Handle the podcast image
        const podcastImg = req.files.find(file => file.fieldname === 'podcastImg')?.filename || null;

        // Create the podcast document
        const newPodcast = new podcasts({
            title,desc,tags,format,category,podcastImg,
        });

        const savedPodcast = await newPodcast.save();
        console.log('Saved Podcast:', savedPodcast);

        // Process and save episodes
        const episodes = [];
        const episodeFiles = req.files.filter(file => file.fieldname.startsWith('episodes['));

        for (let i = 0; i < episodeFiles.length; i++) {
            const episodeData = req.body.episodes[i]
            const podcastFile = episodeFiles.find(file => file.fieldname === `episodes[${i}][podcastFile]`)?.path || null;

            if (episodeData.title && episodeData.desc && podcastFile) {
                const newEpisode = new episodes({
                    podcast: savedPodcast._id,
                    title: episodeData.title,
                    desc: episodeData.desc,
                    podcastFile,
                });
                const savedEpisode = await newEpisode.save();
                console.log('Saved Episode:', savedEpisode);
                episodes.push(savedEpisode._id);
            }
        }

        // Link episodes to the podcast
        savedPodcast.episodes = episodes;
        await savedPodcast.save();
        console.log('Final Podcast with Episodes:', savedPodcast);
        res.status(200).json(savedPodcast)

    }catch(err){
        res.status(401).json(err)
    }
    
    
}