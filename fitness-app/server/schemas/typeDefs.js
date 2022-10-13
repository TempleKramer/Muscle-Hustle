const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
      }

  type Auth {
    token: ID!
    user: User
  }
  type Workout{
    _id:ID
    name: String
    numberofreps: Number
    date: String
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    workouts:[Workout]
    workout(user:String!):Workout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(name: String!, numberofreps: Number!, date: String!, user: String!)
  }
`;

module.exports = typeDefs;
