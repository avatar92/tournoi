const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipeSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    nombreJoueur:{
        type:Number,
        default:11
    }
})


module.exports = Equipe = mongoose.model("Equipe", equipeSchema, "equipe");