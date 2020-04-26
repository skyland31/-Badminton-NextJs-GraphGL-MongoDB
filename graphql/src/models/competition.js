import mongoose from "mongoose";

const competitionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    compet_start: {
        type: Date,
        required: true,
    },
    compet_end: {
        type: Date,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    pay_end: {
        type: Date,
        required: true,
    },
    gens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "competitionGen",
        //required: true
    }]
});

const competition = mongoose.model("Competition", competitionSchema);
export default competition;