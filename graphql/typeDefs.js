import { gql } from 'apollo-server-express';

const typeDefs = gql `

type User {
    id: ID!
    nombre: String
     apellido: String
    email: String
   createdAt: String 
}

`;

module.exports = { typeDefs }