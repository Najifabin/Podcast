const mongoose = require('mongoose')

const podcastSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    tags:{
        type:[String],
        default:[]
    },
    format:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    podcastImg:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    episodes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"episodes",
        default:[],
    }
},{
    timestamps:true
})

const podcasts = mongoose.model("podcasts",podcastSchema)
module.exports = podcasts