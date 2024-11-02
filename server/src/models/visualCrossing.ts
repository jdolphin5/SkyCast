import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Schema: typeof mongoose.Schema = mongoose.Schema;

const visualCrossingSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: { type: String, required: true },
        datetime: { type: String, required: true },
        tempmax: { type: Number, required: true },
        tempmin: { type: Number, required: true },
        temp: { type: Number, required: true },
        feelslikemax: { type: Number, required: true },
        feelslikemin: { type: Number, required: true },
        feelslike: { type: Number, required: true },
        dew: { type: Number, required: true },
        humidity: { type: Number, required: true },
        precip: { type: Number, required: true },
        precipprob: { type: Number, required: true },
        precipcover: { type: Number, required: true },
        preciptype: { type: String, required: true },
        snow: { type: Number, required: true },
        snowdepth: { type: Number, required: false },
        windgust: { type: Number, required: true },
        windspeed: { type: Number, required: true },
        winddir: { type: Number, required: true },
        sealevelpressure: { type: Number, required: true },
        cloudcover: { type: Number, required: true },
        visibility: { type: Number, required: true },
        solarradiation: { type: Number, required: true },
        solarenergy: { type: Number, required: true },
        uvindex: { type: Number, required: true },
        severerisk: { type: Number, required: true },
        sunrise: { type: String, required: true },
        sunset: { type: String, required: true },
        moonphase: { type: Number, required: true },
        conditions: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true },
        stations: { type: String, required: true }
    },
    { collection: process.env.MONGO_DB_COLLECTION_ONE, timestamps: true }
);

export const VisualCrossing = mongoose.model(
    "VisualCrossing",
    visualCrossingSchema
);
