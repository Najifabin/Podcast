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
            title,desc,tags,format,category,podcastImg,userId
        });

        const savedPodcast = await newPodcast.save();
        console.log('Saved Podcast:', savedPodcast);

        // Process and save episodes
        const episodes = [];
        const episodeFiles = req.files.filter(file => file.fieldname.startsWith('episodes['));
         const episodeCount = Math.max(
            ...episodeFiles.map(file =>
                parseInt(file.fieldname.match(/episodes\[(\d+)\]\[podcastFile\]/)?.[1] || 0, 10)
            )
        );

        for (let i = 0; i < episodeCount; i++) {
            const episodeTitle = req.body[`episodes[${i}][title]`];
            const episodeDesc = req.body[`episodes[${i}][desc]`];
            const podcastFile = req.files.find(file => file.fieldname === `episodes[${i}][podcastFile]`)?.path || null;
            console.log(episodeTitle , episodeDesc , podcastFile);
            
            if (episodeTitle && episodeDesc && podcastFile) {
                const newEpisode = new episodes({
                    podcast: savedPodcast._id,
                    title: episodeTitle,
                    desc: episodeDesc,
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