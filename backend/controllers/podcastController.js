const podcasts = require('../models/podcastModel')
const episodes = require('../models/episodeModel')

// create podcast

exports.createPodcastController = async (req,res)=>{
    console.log("inside createPodcastController");
    const userId = req.userId
    console.log(userId);
    console.log(req.body);
    
    
    res.status(200).json("Add project request recieved")
}