import Competition from "../models/competition";
import competitionGen from "../models/competitionGen"
import Mutation from "./Mutation";

const Query = {
    //me: (parent, args, context, info) => meLogin,
    competition: (parent, args, context, info) => Competition.findById(args.id).populate({ path: 'gens', populate: { path: 'compet_id' } }),
    competitions: (parent, args, context, info) => Competition.find().populate({ path: 'gens', populate: { path: 'compet_id' } }),
    competition_gen: (parent, args, context, info) => competitionGen.findById(args.id).populate({ path: 'compet_id', populate: { path: 'gens' } }),
    competition_gens: (parent, args, context, info) => competitionGen.find().populate({ path: 'compet_id', populate: { path: 'gens' } }),
};

const resolvers = {
    Query,
    Mutation,
};
export default resolvers;