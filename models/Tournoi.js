const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournoiSchema = new Schema({
    matchA:{
        type:Schema.Types.ObjectId,
        ref:"Match"
    },
    matchB:{
        type:Schema.Types.ObjectId,
        ref:"Match"
    },
    title:{
        type:String,
        required:true
    }
})
module.exports = Tournoi = mongoose.model("Tournoi", tournoiSchema, "tournoi");
