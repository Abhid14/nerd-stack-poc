import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type ActedInProperties @relationshipProperties {
  roles: [String]!
}

type Movie @node {
  peopleActedIn: [Person!]!
    @relationship(
      type: "ACTED_IN"
      direction: IN
      properties: "ActedInProperties"
    )
  peopleDirected: [Person!]! @relationship(type: "DIRECTED", direction: IN)
  peopleProduced: [Person!]! @relationship(type: "PRODUCED", direction: IN)
  peopleReviewed: [Person!]!
    @relationship(
      type: "REVIEWED"
      direction: IN
      properties: "ReviewedProperties"
    )
  peopleWrote: [Person!]! @relationship(type: "WROTE", direction: IN)
  released: BigInt!
  tagline: String
  title: String!
}

type Person @node {
  actedInMovies: [Movie!]!
    @relationship(
      type: "ACTED_IN"
      direction: OUT
      properties: "ActedInProperties"
    )
  born: BigInt
  directedMovies: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
  followsPeople: [Person!]! @relationship(type: "FOLLOWS", direction: OUT)
  name: String!
  peopleFollows: [Person!]! @relationship(type: "FOLLOWS", direction: IN)
  producedMovies: [Movie!]! @relationship(type: "PRODUCED", direction: OUT)
  reviewedMovies: [Movie!]!
    @relationship(
      type: "REVIEWED"
      direction: OUT
      properties: "ReviewedProperties"
    )
  wroteMovies: [Movie!]! @relationship(type: "WROTE", direction: OUT)
}

type ReviewedProperties @relationshipProperties {
  rating: BigInt!
  summary: String!
}

`;