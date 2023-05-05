import modelOptions from './model.options.js'
import mongoose, { Schema } from 'mongoose'

export default mongoose.model(
    'Cast',
    mongoose.Schema(
        [
            {
                character: {
                    type: String,
                    require: true,
                    unique: true,
                },
                profile_path: String,
                birthYear: Number,
                summary: String,
            },
        ],
        modelOptions,
    ),
)
