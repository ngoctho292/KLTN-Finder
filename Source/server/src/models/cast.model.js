import modelOptions from "./model.options.js"
import mongoose from "mongoose";

export default mongoose.model(
    "Cast",
    mongoose.Schema({
        character: {
            type: String,
            require: true
        },
        profile_path: String,
        birthYear: Number,
        summary: String
    }, modelOptions)
)