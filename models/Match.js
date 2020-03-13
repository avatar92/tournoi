const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema=new Schema({
    equipeA:{
        type:Schema.Types.ObjectId,
        ref:"Equipe"
    },
    equipeB:{
        type:Schema.Types.ObjectId,
        ref:"Equipe"
    },
    title:{
        type:String,
        required:true
    }
})


module.exports = Match = mongoose.model("Match", matchSchema, "match");