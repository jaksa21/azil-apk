import mongoose from "mongoose";

const Schema = mongoose.Schema;
const animal = new Schema({
    name: {
        type : String,
        required : true
    },
    type: {
        type : String,
        required : true
    },
    age: {
        type : String
    },
    chip: {
        type : Boolean
    },
    description: {
        type : String
    }
})

export default mongoose.model("Animal", animal)