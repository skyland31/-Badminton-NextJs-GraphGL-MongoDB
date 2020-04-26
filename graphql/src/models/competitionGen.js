import mongoose from "mongoose"

const competition_gen = new mongoose.Schema({

    type: {
        type: String,
        required: true
    },
    gen: {
        type: String,
        required: true
    },
    compet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Competition",
        required: true
    },
})

const competitionGen = mongoose.model("competitionGen", competition_gen);
export default competitionGen;
