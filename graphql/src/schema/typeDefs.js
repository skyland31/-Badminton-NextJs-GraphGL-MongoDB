import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    competition(id: ID!): Competition
    competitions: [Competition]!
    competition_gen(id: ID!):Competition_Gen!
    competition_gens:[Competition_Gen]!
  }

  type Competition {
    id: ID!
    name: String!
    detail: String!
    place: String!
    price: Int!
    compet_start: String!
    compet_end: String!
    start: String!
    end: String!
    pay_end: String
    gens: [Competition_Gen]
  }
  type Competition_Gen {
    id: ID!
    type: String!
    gen: String!
    compet_id: Competition!
  }
  type Mutation {
    createCompetition(name: String!, detail: String!, place: String!,price: String!,compet_start: String!,compet_end: String!,start: String!,end: String!,pay_end: String!): Competition
    createCompetition_gen(id: ID!,type:String!,gen:String):Competition_Gen!
    
  }
`;
export default typeDefs;