import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options.js";

export default mongoose.model(
    "Movie",
    mongoose.Schema(
        {
            // filmId: {
            //     type: Schema.Types.ObjectId,
            //     // required: true,
            // },
            type: {
                type: String,
                enum: ["tv", "movie"],
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            overview: {
                type: String,
                required: true,
            },
            poster_path: {
                type: String,
                required: true,
            },
            release_date: [
                {
                    day: { type: Number },
                    month: { type: Number },
                    year: { type: Number },
                },
            ],
            status: {
                type: String,
                required: false,
            },
            vote_average: {
                type: Number,
                required: true,
            },
            genres: [{ name: { type: String } }],
            backdrop_path: [{ path: { type: String } }],
            trailer: {
                type: String,
                required: true,
            },
            video: {
                type: String,
                required: false,
            },
            runtime: {
                type: String,
                required: true,
            },
            cast: [
                {
                    character: { type: String },
                    profile_path: { type: String },
                    birthYear: { type: Number },
                    summary: { type: String },
                },
            ],
        },
        modelOptions,
    ),
);