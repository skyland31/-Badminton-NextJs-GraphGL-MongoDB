
import Competition from "../models/competition";
import competitionGen from "../models/competitionGen"

const Mutation = {
    createCompetition: async (parent, args, context, info) => {
        const currentCompetitions = await Competition.find();
        const isCompotitions = currentCompetitions.findIndex(c => c.name === args.name) > -1;
        if (isCompotitions) {
            throw new Error("Name has at Database.");
        }
        return Competition.create(args);
    },
    createCompetition_gen: async (parent, args, context, info) => {
        const competitionId = args.id;
        if (!args.type || !args.gen) {
            throw new Error("You must provide data type and gen.")
        }
        const gen = await competitionGen.create({ ...args, compet_id: competitionId })
        const com = await Competition.findById(competitionId);

        if (!com.gens) {
            com.gens = [gen]
        } else {
            com.gens.push(gen)
        }
        await com.save()

        return competitionGen.findById(gen.id).populate({ path: 'compet_id', populate: { path: 'gens' } })
    }
}

// const update {
//     ฟิล1 : !!<ตรวจสอบว่าฟิล1มีใน args?> ? <ถ้ามี คือเป็นตัวแปรนั้นเลย ให้> : model.ฟิลล์นั้น
// }
// update ในดาต้าเบส awiate model.findByIdAndUpdate(<id>,<update>)
export default Mutation;