import mongoose from "mongoose";

const Schema = mongoose.Schema;
const donation = new Schema({
    type: {
        type : String,
        required : true
    },
    amount: {
        type : String
    },
    description: {
        type : String
    }
})

export default mongoose.model("Donation", donation)