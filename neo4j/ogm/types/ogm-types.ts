import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A BigInt value up to 64 bits in size, which can be a number or a string if used inline, or a string only if used as a variable. Always returned as a string. */
  BigInt: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  movies: Array<Movie>;
  moviesConnection: MoviesConnection;
  moviesAggregate: MovieAggregateSelection;
  people: Array<Person>;
  peopleConnection: PeopleConnection;
  peopleAggregate: PersonAggregateSelection;
};

export type QueryMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
};

export type QueryMoviesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MovieWhere>;
  sort?: InputMaybe<Array<InputMaybe<MovieSort>>>;
};

export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type QueryPeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
};

export type QueryPeopleConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PersonWhere>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
};

export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createMovies: CreateMoviesMutationResponse;
  deleteMovies: DeleteInfo;
  updateMovies: UpdateMoviesMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  deletePeople: DeleteInfo;
  updatePeople: UpdatePeopleMutationResponse;
};

export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>;
};

export type MutationDeleteMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type MutationUpdateMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  update?: InputMaybe<MovieUpdateInput>;
  connect?: InputMaybe<MovieConnectInput>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
  create?: InputMaybe<MovieRelationInput>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};

export type MutationDeletePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MutationUpdatePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  update?: InputMaybe<PersonUpdateInput>;
  connect?: InputMaybe<PersonConnectInput>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
  create?: InputMaybe<PersonRelationInput>;
  delete?: InputMaybe<PersonDeleteInput>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

/**
 * The edge properties for the following fields:
 * * Movie.peopleActedIn
 * * Person.actedInMovies
 */
export type ActedInProperties = {
  __typename?: "ActedInProperties";
  roles: Array<Maybe<Scalars["String"]["output"]>>;
};

export type BigIntAggregateSelection = {
  __typename?: "BigIntAggregateSelection";
  max?: Maybe<Scalars["BigInt"]["output"]>;
  min?: Maybe<Scalars["BigInt"]["output"]>;
  average?: Maybe<Scalars["BigInt"]["output"]>;
  sum?: Maybe<Scalars["BigInt"]["output"]>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateMoviesMutationResponse = {
  __typename?: "CreateMoviesMutationResponse";
  info: CreateInfo;
  movies: Array<Movie>;
};

export type CreatePeopleMutationResponse = {
  __typename?: "CreatePeopleMutationResponse";
  info: CreateInfo;
  people: Array<Person>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type Movie = {
  __typename?: "Movie";
  released: Scalars["BigInt"]["output"];
  tagline?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  peopleActedInAggregate?: Maybe<MoviePersonPeopleActedInAggregationSelection>;
  peopleActedIn: Array<Person>;
  peopleActedInConnection: MoviePeopleActedInConnection;
  peopleDirectedAggregate?: Maybe<MoviePersonPeopleDirectedAggregationSelection>;
  peopleDirected: Array<Person>;
  peopleDirectedConnection: MoviePeopleDirectedConnection;
  peopleProducedAggregate?: Maybe<MoviePersonPeopleProducedAggregationSelection>;
  peopleProduced: Array<Person>;
  peopleProducedConnection: MoviePeopleProducedConnection;
  peopleReviewedAggregate?: Maybe<MoviePersonPeopleReviewedAggregationSelection>;
  peopleReviewed: Array<Person>;
  peopleReviewedConnection: MoviePeopleReviewedConnection;
  peopleWroteAggregate?: Maybe<MoviePersonPeopleWroteAggregationSelection>;
  peopleWrote: Array<Person>;
  peopleWroteConnection: MoviePeopleWroteConnection;
};

export type MoviePeopleActedInAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleActedInArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleActedInConnectionArgs = {
  where?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MoviePeopleActedInConnectionSort>>;
};

export type MoviePeopleDirectedAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleDirectedArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleDirectedConnectionArgs = {
  where?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MoviePeopleDirectedConnectionSort>>;
};

export type MoviePeopleProducedAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleProducedArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleProducedConnectionArgs = {
  where?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MoviePeopleProducedConnectionSort>>;
};

export type MoviePeopleReviewedAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleReviewedArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleReviewedConnectionArgs = {
  where?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MoviePeopleReviewedConnectionSort>>;
};

export type MoviePeopleWroteAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleWroteArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MoviePeopleWroteConnectionArgs = {
  where?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MoviePeopleWroteConnectionSort>>;
};

export type MovieAggregateSelection = {
  __typename?: "MovieAggregateSelection";
  count: Scalars["Int"]["output"];
  released: BigIntAggregateSelection;
  tagline: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type MovieEdge = {
  __typename?: "MovieEdge";
  cursor: Scalars["String"]["output"];
  node: Movie;
};

export type MoviePeopleActedInConnection = {
  __typename?: "MoviePeopleActedInConnection";
  edges: Array<MoviePeopleActedInRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MoviePeopleActedInRelationship = {
  __typename?: "MoviePeopleActedInRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
  properties: ActedInProperties;
};

export type MoviePeopleDirectedConnection = {
  __typename?: "MoviePeopleDirectedConnection";
  edges: Array<MoviePeopleDirectedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MoviePeopleDirectedRelationship = {
  __typename?: "MoviePeopleDirectedRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type MoviePeopleProducedConnection = {
  __typename?: "MoviePeopleProducedConnection";
  edges: Array<MoviePeopleProducedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MoviePeopleProducedRelationship = {
  __typename?: "MoviePeopleProducedRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type MoviePeopleReviewedConnection = {
  __typename?: "MoviePeopleReviewedConnection";
  edges: Array<MoviePeopleReviewedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MoviePeopleReviewedRelationship = {
  __typename?: "MoviePeopleReviewedRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
  properties: ReviewedProperties;
};

export type MoviePeopleWroteConnection = {
  __typename?: "MoviePeopleWroteConnection";
  edges: Array<MoviePeopleWroteRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MoviePeopleWroteRelationship = {
  __typename?: "MoviePeopleWroteRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type MoviePersonPeopleActedInAggregationSelection = {
  __typename?: "MoviePersonPeopleActedInAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MoviePersonPeopleActedInNodeAggregateSelection>;
};

export type MoviePersonPeopleActedInNodeAggregateSelection = {
  __typename?: "MoviePersonPeopleActedInNodeAggregateSelection";
  born: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type MoviePersonPeopleDirectedAggregationSelection = {
  __typename?: "MoviePersonPeopleDirectedAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MoviePersonPeopleDirectedNodeAggregateSelection>;
};

export type MoviePersonPeopleDirectedNodeAggregateSelection = {
  __typename?: "MoviePersonPeopleDirectedNodeAggregateSelection";
  born: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type MoviePersonPeopleProducedAggregationSelection = {
  __typename?: "MoviePersonPeopleProducedAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MoviePersonPeopleProducedNodeAggregateSelection>;
};

export type MoviePersonPeopleProducedNodeAggregateSelection = {
  __typename?: "MoviePersonPeopleProducedNodeAggregateSelection";
  born: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type MoviePersonPeopleReviewedAggregationSelection = {
  __typename?: "MoviePersonPeopleReviewedAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MoviePersonPeopleReviewedNodeAggregateSelection>;
  edge?: Maybe<MoviePersonPeopleReviewedEdgeAggregateSelection>;
};

export type MoviePersonPeopleReviewedEdgeAggregateSelection = {
  __typename?: "MoviePersonPeopleReviewedEdgeAggregateSelection";
  rating: BigIntAggregateSelection;
  summary: StringAggregateSelection;
};

export type MoviePersonPeopleReviewedNodeAggregateSelection = {
  __typename?: "MoviePersonPeopleReviewedNodeAggregateSelection";
  born: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type MoviePersonPeopleWroteAggregationSelection = {
  __typename?: "MoviePersonPeopleWroteAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MoviePersonPeopleWroteNodeAggregateSelection>;
};

export type MoviePersonPeopleWroteNodeAggregateSelection = {
  __typename?: "MoviePersonPeopleWroteNodeAggregateSelection";
  born: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type MoviesConnection = {
  __typename?: "MoviesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MovieEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PeopleConnection = {
  __typename?: "PeopleConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PersonEdge>;
};

export type Person = {
  __typename?: "Person";
  born?: Maybe<Scalars["BigInt"]["output"]>;
  name: Scalars["String"]["output"];
  actedInMoviesAggregate?: Maybe<PersonMovieActedInMoviesAggregationSelection>;
  actedInMovies: Array<Movie>;
  actedInMoviesConnection: PersonActedInMoviesConnection;
  directedMoviesAggregate?: Maybe<PersonMovieDirectedMoviesAggregationSelection>;
  directedMovies: Array<Movie>;
  directedMoviesConnection: PersonDirectedMoviesConnection;
  followsPeopleAggregate?: Maybe<PersonPersonFollowsPeopleAggregationSelection>;
  followsPeople: Array<Person>;
  followsPeopleConnection: PersonFollowsPeopleConnection;
  peopleFollowsAggregate?: Maybe<PersonPersonPeopleFollowsAggregationSelection>;
  peopleFollows: Array<Person>;
  peopleFollowsConnection: PersonPeopleFollowsConnection;
  producedMoviesAggregate?: Maybe<PersonMovieProducedMoviesAggregationSelection>;
  producedMovies: Array<Movie>;
  producedMoviesConnection: PersonProducedMoviesConnection;
  reviewedMoviesAggregate?: Maybe<PersonMovieReviewedMoviesAggregationSelection>;
  reviewedMovies: Array<Movie>;
  reviewedMoviesConnection: PersonReviewedMoviesConnection;
  wroteMoviesAggregate?: Maybe<PersonMovieWroteMoviesAggregationSelection>;
  wroteMovies: Array<Movie>;
  wroteMoviesConnection: PersonWroteMoviesConnection;
};

export type PersonActedInMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonActedInMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonActedInMoviesConnectionArgs = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonActedInMoviesConnectionSort>>;
};

export type PersonDirectedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonDirectedMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonDirectedMoviesConnectionArgs = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonDirectedMoviesConnectionSort>>;
};

export type PersonFollowsPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonFollowsPeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonFollowsPeopleConnectionArgs = {
  where?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonFollowsPeopleConnectionSort>>;
};

export type PersonPeopleFollowsAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonPeopleFollowsArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonPeopleFollowsConnectionArgs = {
  where?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonPeopleFollowsConnectionSort>>;
};

export type PersonProducedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonProducedMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonProducedMoviesConnectionArgs = {
  where?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonProducedMoviesConnectionSort>>;
};

export type PersonReviewedMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonReviewedMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonReviewedMoviesConnectionArgs = {
  where?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonReviewedMoviesConnectionSort>>;
};

export type PersonWroteMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonWroteMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonWroteMoviesConnectionArgs = {
  where?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonWroteMoviesConnectionSort>>;
};

export type PersonActedInMoviesConnection = {
  __typename?: "PersonActedInMoviesConnection";
  edges: Array<PersonActedInMoviesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonActedInMoviesRelationship = {
  __typename?: "PersonActedInMoviesRelationship";
  cursor: Scalars["String"]["output"];
  node: Movie;
  properties: ActedInProperties;
};

export type PersonAggregateSelection = {
  __typename?: "PersonAggregateSelection";
  count: Scalars["Int"]["output"];
  born: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type PersonDirectedMoviesConnection = {
  __typename?: "PersonDirectedMoviesConnection";
  edges: Array<PersonDirectedMoviesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonDirectedMoviesRelationship = {
  __typename?: "PersonDirectedMoviesRelationship";
  cursor: Scalars["String"]["output"];
  node: Movie;
};

export type PersonEdge = {
  __typename?: "PersonEdge";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type PersonFollowsPeopleConnection = {
  __typename?: "PersonFollowsPeopleConnection";
  edges: Array<PersonFollowsPeopleRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonFollowsPeopleRelationship = {
  __typename?: "PersonFollowsPeopleRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type PersonMovieActedInMoviesAggregationSelection = {
  __typename?: "PersonMovieActedInMoviesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonMovieActedInMoviesNodeAggregateSelection>;
};

export type PersonMovieActedInMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieActedInMoviesNodeAggregateSelection";
  released: BigIntAggregateSelection;
  tagline: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type PersonMovieDirectedMoviesAggregationSelection = {
  __typename?: "PersonMovieDirectedMoviesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonMovieDirectedMoviesNodeAggregateSelection>;
};

export type PersonMovieDirectedMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieDirectedMoviesNodeAggregateSelection";
  released: BigIntAggregateSelection;
  tagline: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type PersonMovieProducedMoviesAggregationSelection = {
  __typename?: "PersonMovieProducedMoviesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonMovieProducedMoviesNodeAggregateSelection>;
};

export type PersonMovieProducedMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieProducedMoviesNodeAggregateSelection";
  released: BigIntAggregateSelection;
  tagline: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type PersonMovieReviewedMoviesAggregationSelection = {
  __typename?: "PersonMovieReviewedMoviesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonMovieReviewedMoviesNodeAggregateSelection>;
  edge?: Maybe<PersonMovieReviewedMoviesEdgeAggregateSelection>;
};

export type PersonMovieReviewedMoviesEdgeAggregateSelection = {
  __typename?: "PersonMovieReviewedMoviesEdgeAggregateSelection";
  rating: BigIntAggregateSelection;
  summary: StringAggregateSelection;
};

export type PersonMovieReviewedMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieReviewedMoviesNodeAggregateSelection";
  released: BigIntAggregateSelection;
  tagline: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type PersonMovieWroteMoviesAggregationSelection = {
  __typename?: "PersonMovieWroteMoviesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonMovieWroteMoviesNodeAggregateSelection>;
};

export type PersonMovieWroteMoviesNodeAggregateSelection = {
  __typename?: "PersonMovieWroteMoviesNodeAggregateSelection";
  released: BigIntAggregateSelection;
  tagline: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type PersonPeopleFollowsConnection = {
  __typename?: "PersonPeopleFollowsConnection";
  edges: Array<PersonPeopleFollowsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonPeopleFollowsRelationship = {
  __typename?: "PersonPeopleFollowsRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type PersonPersonFollowsPeopleAggregationSelection = {
  __typename?: "PersonPersonFollowsPeopleAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonPersonFollowsPeopleNodeAggregateSelection>;
};

export type PersonPersonFollowsPeopleNodeAggregateSelection = {
  __typename?: "PersonPersonFollowsPeopleNodeAggregateSelection";
  born: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type PersonPersonPeopleFollowsAggregationSelection = {
  __typename?: "PersonPersonPeopleFollowsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonPersonPeopleFollowsNodeAggregateSelection>;
};

export type PersonPersonPeopleFollowsNodeAggregateSelection = {
  __typename?: "PersonPersonPeopleFollowsNodeAggregateSelection";
  born: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type PersonProducedMoviesConnection = {
  __typename?: "PersonProducedMoviesConnection";
  edges: Array<PersonProducedMoviesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonProducedMoviesRelationship = {
  __typename?: "PersonProducedMoviesRelationship";
  cursor: Scalars["String"]["output"];
  node: Movie;
};

export type PersonReviewedMoviesConnection = {
  __typename?: "PersonReviewedMoviesConnection";
  edges: Array<PersonReviewedMoviesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonReviewedMoviesRelationship = {
  __typename?: "PersonReviewedMoviesRelationship";
  cursor: Scalars["String"]["output"];
  node: Movie;
  properties: ReviewedProperties;
};

export type PersonWroteMoviesConnection = {
  __typename?: "PersonWroteMoviesConnection";
  edges: Array<PersonWroteMoviesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonWroteMoviesRelationship = {
  __typename?: "PersonWroteMoviesRelationship";
  cursor: Scalars["String"]["output"];
  node: Movie;
};

/**
 * The edge properties for the following fields:
 * * Movie.peopleReviewed
 * * Person.reviewedMovies
 */
export type ReviewedProperties = {
  __typename?: "ReviewedProperties";
  rating: Scalars["BigInt"]["output"];
  summary: Scalars["String"]["output"];
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateMoviesMutationResponse = {
  __typename?: "UpdateMoviesMutationResponse";
  info: UpdateInfo;
  movies: Array<Movie>;
};

export type UpdatePeopleMutationResponse = {
  __typename?: "UpdatePeopleMutationResponse";
  info: UpdateInfo;
  people: Array<Person>;
};

export type ActedInPropertiesCreateInput = {
  roles: Array<InputMaybe<Scalars["String"]["input"]>>;
};

export type ActedInPropertiesSort = {
  roles?: InputMaybe<SortDirection>;
};

export type ActedInPropertiesUpdateInput = {
  roles?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  roles_POP?: InputMaybe<Scalars["Int"]["input"]>;
  roles_PUSH?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ActedInPropertiesWhere = {
  roles?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  roles_NOT?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  roles_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  roles_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<ActedInPropertiesWhere>>;
  AND?: InputMaybe<Array<ActedInPropertiesWhere>>;
  NOT?: InputMaybe<ActedInPropertiesWhere>;
};

export type MovieConnectInput = {
  peopleActedIn?: InputMaybe<Array<MoviePeopleActedInConnectFieldInput>>;
  peopleDirected?: InputMaybe<Array<MoviePeopleDirectedConnectFieldInput>>;
  peopleProduced?: InputMaybe<Array<MoviePeopleProducedConnectFieldInput>>;
  peopleReviewed?: InputMaybe<Array<MoviePeopleReviewedConnectFieldInput>>;
  peopleWrote?: InputMaybe<Array<MoviePeopleWroteConnectFieldInput>>;
};

export type MovieConnectWhere = {
  node: MovieWhere;
};

export type MovieCreateInput = {
  released: Scalars["BigInt"]["input"];
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  peopleActedIn?: InputMaybe<MoviePeopleActedInFieldInput>;
  peopleDirected?: InputMaybe<MoviePeopleDirectedFieldInput>;
  peopleProduced?: InputMaybe<MoviePeopleProducedFieldInput>;
  peopleReviewed?: InputMaybe<MoviePeopleReviewedFieldInput>;
  peopleWrote?: InputMaybe<MoviePeopleWroteFieldInput>;
};

export type MovieDeleteInput = {
  peopleActedIn?: InputMaybe<Array<MoviePeopleActedInDeleteFieldInput>>;
  peopleDirected?: InputMaybe<Array<MoviePeopleDirectedDeleteFieldInput>>;
  peopleProduced?: InputMaybe<Array<MoviePeopleProducedDeleteFieldInput>>;
  peopleReviewed?: InputMaybe<Array<MoviePeopleReviewedDeleteFieldInput>>;
  peopleWrote?: InputMaybe<Array<MoviePeopleWroteDeleteFieldInput>>;
};

export type MovieDisconnectInput = {
  peopleActedIn?: InputMaybe<Array<MoviePeopleActedInDisconnectFieldInput>>;
  peopleDirected?: InputMaybe<Array<MoviePeopleDirectedDisconnectFieldInput>>;
  peopleProduced?: InputMaybe<Array<MoviePeopleProducedDisconnectFieldInput>>;
  peopleReviewed?: InputMaybe<Array<MoviePeopleReviewedDisconnectFieldInput>>;
  peopleWrote?: InputMaybe<Array<MoviePeopleWroteDisconnectFieldInput>>;
};

export type MovieOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>;
};

export type MoviePeopleActedInAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MoviePeopleActedInAggregateInput>>;
  OR?: InputMaybe<Array<MoviePeopleActedInAggregateInput>>;
  NOT?: InputMaybe<MoviePeopleActedInAggregateInput>;
  node?: InputMaybe<MoviePeopleActedInNodeAggregationWhereInput>;
};

export type MoviePeopleActedInConnectFieldInput = {
  edge: ActedInPropertiesCreateInput;
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type MoviePeopleActedInConnectionSort = {
  node?: InputMaybe<PersonSort>;
  edge?: InputMaybe<ActedInPropertiesSort>;
};

export type MoviePeopleActedInConnectionWhere = {
  AND?: InputMaybe<Array<MoviePeopleActedInConnectionWhere>>;
  OR?: InputMaybe<Array<MoviePeopleActedInConnectionWhere>>;
  NOT?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<ActedInPropertiesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ActedInPropertiesWhere>;
};

export type MoviePeopleActedInCreateFieldInput = {
  edge: ActedInPropertiesCreateInput;
  node: PersonCreateInput;
};

export type MoviePeopleActedInDeleteFieldInput = {
  where?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MoviePeopleActedInDisconnectFieldInput = {
  where?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MoviePeopleActedInFieldInput = {
  connect?: InputMaybe<Array<MoviePeopleActedInConnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleActedInCreateFieldInput>>;
};

export type MoviePeopleActedInNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MoviePeopleActedInNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MoviePeopleActedInNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MoviePeopleActedInNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MoviePeopleActedInUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<ActedInPropertiesUpdateInput>;
};

export type MoviePeopleActedInUpdateFieldInput = {
  where?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  connect?: InputMaybe<Array<MoviePeopleActedInConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MoviePeopleActedInDisconnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleActedInCreateFieldInput>>;
  update?: InputMaybe<MoviePeopleActedInUpdateConnectionInput>;
  delete?: InputMaybe<Array<MoviePeopleActedInDeleteFieldInput>>;
};

export type MoviePeopleDirectedAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MoviePeopleDirectedAggregateInput>>;
  OR?: InputMaybe<Array<MoviePeopleDirectedAggregateInput>>;
  NOT?: InputMaybe<MoviePeopleDirectedAggregateInput>;
  node?: InputMaybe<MoviePeopleDirectedNodeAggregationWhereInput>;
};

export type MoviePeopleDirectedConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type MoviePeopleDirectedConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type MoviePeopleDirectedConnectionWhere = {
  AND?: InputMaybe<Array<MoviePeopleDirectedConnectionWhere>>;
  OR?: InputMaybe<Array<MoviePeopleDirectedConnectionWhere>>;
  NOT?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type MoviePeopleDirectedCreateFieldInput = {
  node: PersonCreateInput;
};

export type MoviePeopleDirectedDeleteFieldInput = {
  where?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MoviePeopleDirectedDisconnectFieldInput = {
  where?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MoviePeopleDirectedFieldInput = {
  connect?: InputMaybe<Array<MoviePeopleDirectedConnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleDirectedCreateFieldInput>>;
};

export type MoviePeopleDirectedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MoviePeopleDirectedNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MoviePeopleDirectedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MoviePeopleDirectedNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MoviePeopleDirectedUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type MoviePeopleDirectedUpdateFieldInput = {
  where?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  connect?: InputMaybe<Array<MoviePeopleDirectedConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MoviePeopleDirectedDisconnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleDirectedCreateFieldInput>>;
  update?: InputMaybe<MoviePeopleDirectedUpdateConnectionInput>;
  delete?: InputMaybe<Array<MoviePeopleDirectedDeleteFieldInput>>;
};

export type MoviePeopleProducedAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MoviePeopleProducedAggregateInput>>;
  OR?: InputMaybe<Array<MoviePeopleProducedAggregateInput>>;
  NOT?: InputMaybe<MoviePeopleProducedAggregateInput>;
  node?: InputMaybe<MoviePeopleProducedNodeAggregationWhereInput>;
};

export type MoviePeopleProducedConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type MoviePeopleProducedConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type MoviePeopleProducedConnectionWhere = {
  AND?: InputMaybe<Array<MoviePeopleProducedConnectionWhere>>;
  OR?: InputMaybe<Array<MoviePeopleProducedConnectionWhere>>;
  NOT?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type MoviePeopleProducedCreateFieldInput = {
  node: PersonCreateInput;
};

export type MoviePeopleProducedDeleteFieldInput = {
  where?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MoviePeopleProducedDisconnectFieldInput = {
  where?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MoviePeopleProducedFieldInput = {
  connect?: InputMaybe<Array<MoviePeopleProducedConnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleProducedCreateFieldInput>>;
};

export type MoviePeopleProducedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MoviePeopleProducedNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MoviePeopleProducedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MoviePeopleProducedNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MoviePeopleProducedUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type MoviePeopleProducedUpdateFieldInput = {
  where?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  connect?: InputMaybe<Array<MoviePeopleProducedConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MoviePeopleProducedDisconnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleProducedCreateFieldInput>>;
  update?: InputMaybe<MoviePeopleProducedUpdateConnectionInput>;
  delete?: InputMaybe<Array<MoviePeopleProducedDeleteFieldInput>>;
};

export type MoviePeopleReviewedAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MoviePeopleReviewedAggregateInput>>;
  OR?: InputMaybe<Array<MoviePeopleReviewedAggregateInput>>;
  NOT?: InputMaybe<MoviePeopleReviewedAggregateInput>;
  node?: InputMaybe<MoviePeopleReviewedNodeAggregationWhereInput>;
  edge?: InputMaybe<ReviewedPropertiesAggregationWhereInput>;
};

export type MoviePeopleReviewedConnectFieldInput = {
  edge: ReviewedPropertiesCreateInput;
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type MoviePeopleReviewedConnectionSort = {
  node?: InputMaybe<PersonSort>;
  edge?: InputMaybe<ReviewedPropertiesSort>;
};

export type MoviePeopleReviewedConnectionWhere = {
  AND?: InputMaybe<Array<MoviePeopleReviewedConnectionWhere>>;
  OR?: InputMaybe<Array<MoviePeopleReviewedConnectionWhere>>;
  NOT?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<ReviewedPropertiesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ReviewedPropertiesWhere>;
};

export type MoviePeopleReviewedCreateFieldInput = {
  edge: ReviewedPropertiesCreateInput;
  node: PersonCreateInput;
};

export type MoviePeopleReviewedDeleteFieldInput = {
  where?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MoviePeopleReviewedDisconnectFieldInput = {
  where?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MoviePeopleReviewedFieldInput = {
  connect?: InputMaybe<Array<MoviePeopleReviewedConnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleReviewedCreateFieldInput>>;
};

export type MoviePeopleReviewedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MoviePeopleReviewedNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MoviePeopleReviewedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MoviePeopleReviewedNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MoviePeopleReviewedUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<ReviewedPropertiesUpdateInput>;
};

export type MoviePeopleReviewedUpdateFieldInput = {
  where?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  connect?: InputMaybe<Array<MoviePeopleReviewedConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MoviePeopleReviewedDisconnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleReviewedCreateFieldInput>>;
  update?: InputMaybe<MoviePeopleReviewedUpdateConnectionInput>;
  delete?: InputMaybe<Array<MoviePeopleReviewedDeleteFieldInput>>;
};

export type MoviePeopleWroteAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MoviePeopleWroteAggregateInput>>;
  OR?: InputMaybe<Array<MoviePeopleWroteAggregateInput>>;
  NOT?: InputMaybe<MoviePeopleWroteAggregateInput>;
  node?: InputMaybe<MoviePeopleWroteNodeAggregationWhereInput>;
};

export type MoviePeopleWroteConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type MoviePeopleWroteConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type MoviePeopleWroteConnectionWhere = {
  AND?: InputMaybe<Array<MoviePeopleWroteConnectionWhere>>;
  OR?: InputMaybe<Array<MoviePeopleWroteConnectionWhere>>;
  NOT?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type MoviePeopleWroteCreateFieldInput = {
  node: PersonCreateInput;
};

export type MoviePeopleWroteDeleteFieldInput = {
  where?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MoviePeopleWroteDisconnectFieldInput = {
  where?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MoviePeopleWroteFieldInput = {
  connect?: InputMaybe<Array<MoviePeopleWroteConnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleWroteCreateFieldInput>>;
};

export type MoviePeopleWroteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MoviePeopleWroteNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MoviePeopleWroteNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MoviePeopleWroteNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MoviePeopleWroteUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type MoviePeopleWroteUpdateFieldInput = {
  where?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  connect?: InputMaybe<Array<MoviePeopleWroteConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MoviePeopleWroteDisconnectFieldInput>>;
  create?: InputMaybe<Array<MoviePeopleWroteCreateFieldInput>>;
  update?: InputMaybe<MoviePeopleWroteUpdateConnectionInput>;
  delete?: InputMaybe<Array<MoviePeopleWroteDeleteFieldInput>>;
};

export type MovieRelationInput = {
  peopleActedIn?: InputMaybe<Array<MoviePeopleActedInCreateFieldInput>>;
  peopleDirected?: InputMaybe<Array<MoviePeopleDirectedCreateFieldInput>>;
  peopleProduced?: InputMaybe<Array<MoviePeopleProducedCreateFieldInput>>;
  peopleReviewed?: InputMaybe<Array<MoviePeopleReviewedCreateFieldInput>>;
  peopleWrote?: InputMaybe<Array<MoviePeopleWroteCreateFieldInput>>;
};

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  released?: InputMaybe<SortDirection>;
  tagline?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type MovieUpdateInput = {
  released?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  peopleActedIn?: InputMaybe<Array<MoviePeopleActedInUpdateFieldInput>>;
  peopleDirected?: InputMaybe<Array<MoviePeopleDirectedUpdateFieldInput>>;
  peopleProduced?: InputMaybe<Array<MoviePeopleProducedUpdateFieldInput>>;
  peopleReviewed?: InputMaybe<Array<MoviePeopleReviewedUpdateFieldInput>>;
  peopleWrote?: InputMaybe<Array<MoviePeopleWroteUpdateFieldInput>>;
};

export type MovieWhere = {
  released?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  released_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  released_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  released_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  tagline?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tagline_NOT?: InputMaybe<Scalars["String"]["input"]>;
  tagline_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tagline_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tagline_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  tagline_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tagline_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tagline_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tagline_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tagline_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<MovieWhere>>;
  AND?: InputMaybe<Array<MovieWhere>>;
  NOT?: InputMaybe<MovieWhere>;
  /** @deprecated Use `peopleActedIn_SOME` instead. */
  peopleActedIn?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleActedIn_NONE` instead. */
  peopleActedIn_NOT?: InputMaybe<PersonWhere>;
  /** Return Movies where all of the related People match this filter */
  peopleActedIn_ALL?: InputMaybe<PersonWhere>;
  /** Return Movies where none of the related People match this filter */
  peopleActedIn_NONE?: InputMaybe<PersonWhere>;
  /** Return Movies where one of the related People match this filter */
  peopleActedIn_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Movies where some of the related People match this filter */
  peopleActedIn_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleActedInConnection_SOME` instead. */
  peopleActedInConnection?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  /** @deprecated Use `peopleActedInConnection_NONE` instead. */
  peopleActedInConnection_NOT?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  /** Return Movies where all of the related MoviePeopleActedInConnections match this filter */
  peopleActedInConnection_ALL?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  /** Return Movies where none of the related MoviePeopleActedInConnections match this filter */
  peopleActedInConnection_NONE?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  /** Return Movies where one of the related MoviePeopleActedInConnections match this filter */
  peopleActedInConnection_SINGLE?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  /** Return Movies where some of the related MoviePeopleActedInConnections match this filter */
  peopleActedInConnection_SOME?: InputMaybe<MoviePeopleActedInConnectionWhere>;
  peopleActedInAggregate?: InputMaybe<MoviePeopleActedInAggregateInput>;
  /** @deprecated Use `peopleDirected_SOME` instead. */
  peopleDirected?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleDirected_NONE` instead. */
  peopleDirected_NOT?: InputMaybe<PersonWhere>;
  /** Return Movies where all of the related People match this filter */
  peopleDirected_ALL?: InputMaybe<PersonWhere>;
  /** Return Movies where none of the related People match this filter */
  peopleDirected_NONE?: InputMaybe<PersonWhere>;
  /** Return Movies where one of the related People match this filter */
  peopleDirected_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Movies where some of the related People match this filter */
  peopleDirected_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleDirectedConnection_SOME` instead. */
  peopleDirectedConnection?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  /** @deprecated Use `peopleDirectedConnection_NONE` instead. */
  peopleDirectedConnection_NOT?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  /** Return Movies where all of the related MoviePeopleDirectedConnections match this filter */
  peopleDirectedConnection_ALL?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  /** Return Movies where none of the related MoviePeopleDirectedConnections match this filter */
  peopleDirectedConnection_NONE?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  /** Return Movies where one of the related MoviePeopleDirectedConnections match this filter */
  peopleDirectedConnection_SINGLE?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  /** Return Movies where some of the related MoviePeopleDirectedConnections match this filter */
  peopleDirectedConnection_SOME?: InputMaybe<MoviePeopleDirectedConnectionWhere>;
  peopleDirectedAggregate?: InputMaybe<MoviePeopleDirectedAggregateInput>;
  /** @deprecated Use `peopleProduced_SOME` instead. */
  peopleProduced?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleProduced_NONE` instead. */
  peopleProduced_NOT?: InputMaybe<PersonWhere>;
  /** Return Movies where all of the related People match this filter */
  peopleProduced_ALL?: InputMaybe<PersonWhere>;
  /** Return Movies where none of the related People match this filter */
  peopleProduced_NONE?: InputMaybe<PersonWhere>;
  /** Return Movies where one of the related People match this filter */
  peopleProduced_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Movies where some of the related People match this filter */
  peopleProduced_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleProducedConnection_SOME` instead. */
  peopleProducedConnection?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  /** @deprecated Use `peopleProducedConnection_NONE` instead. */
  peopleProducedConnection_NOT?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  /** Return Movies where all of the related MoviePeopleProducedConnections match this filter */
  peopleProducedConnection_ALL?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  /** Return Movies where none of the related MoviePeopleProducedConnections match this filter */
  peopleProducedConnection_NONE?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  /** Return Movies where one of the related MoviePeopleProducedConnections match this filter */
  peopleProducedConnection_SINGLE?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  /** Return Movies where some of the related MoviePeopleProducedConnections match this filter */
  peopleProducedConnection_SOME?: InputMaybe<MoviePeopleProducedConnectionWhere>;
  peopleProducedAggregate?: InputMaybe<MoviePeopleProducedAggregateInput>;
  /** @deprecated Use `peopleReviewed_SOME` instead. */
  peopleReviewed?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleReviewed_NONE` instead. */
  peopleReviewed_NOT?: InputMaybe<PersonWhere>;
  /** Return Movies where all of the related People match this filter */
  peopleReviewed_ALL?: InputMaybe<PersonWhere>;
  /** Return Movies where none of the related People match this filter */
  peopleReviewed_NONE?: InputMaybe<PersonWhere>;
  /** Return Movies where one of the related People match this filter */
  peopleReviewed_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Movies where some of the related People match this filter */
  peopleReviewed_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleReviewedConnection_SOME` instead. */
  peopleReviewedConnection?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  /** @deprecated Use `peopleReviewedConnection_NONE` instead. */
  peopleReviewedConnection_NOT?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  /** Return Movies where all of the related MoviePeopleReviewedConnections match this filter */
  peopleReviewedConnection_ALL?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  /** Return Movies where none of the related MoviePeopleReviewedConnections match this filter */
  peopleReviewedConnection_NONE?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  /** Return Movies where one of the related MoviePeopleReviewedConnections match this filter */
  peopleReviewedConnection_SINGLE?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  /** Return Movies where some of the related MoviePeopleReviewedConnections match this filter */
  peopleReviewedConnection_SOME?: InputMaybe<MoviePeopleReviewedConnectionWhere>;
  peopleReviewedAggregate?: InputMaybe<MoviePeopleReviewedAggregateInput>;
  /** @deprecated Use `peopleWrote_SOME` instead. */
  peopleWrote?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleWrote_NONE` instead. */
  peopleWrote_NOT?: InputMaybe<PersonWhere>;
  /** Return Movies where all of the related People match this filter */
  peopleWrote_ALL?: InputMaybe<PersonWhere>;
  /** Return Movies where none of the related People match this filter */
  peopleWrote_NONE?: InputMaybe<PersonWhere>;
  /** Return Movies where one of the related People match this filter */
  peopleWrote_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Movies where some of the related People match this filter */
  peopleWrote_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleWroteConnection_SOME` instead. */
  peopleWroteConnection?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  /** @deprecated Use `peopleWroteConnection_NONE` instead. */
  peopleWroteConnection_NOT?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  /** Return Movies where all of the related MoviePeopleWroteConnections match this filter */
  peopleWroteConnection_ALL?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  /** Return Movies where none of the related MoviePeopleWroteConnections match this filter */
  peopleWroteConnection_NONE?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  /** Return Movies where one of the related MoviePeopleWroteConnections match this filter */
  peopleWroteConnection_SINGLE?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  /** Return Movies where some of the related MoviePeopleWroteConnections match this filter */
  peopleWroteConnection_SOME?: InputMaybe<MoviePeopleWroteConnectionWhere>;
  peopleWroteAggregate?: InputMaybe<MoviePeopleWroteAggregateInput>;
};

export type PersonActedInMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonActedInMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonActedInMoviesAggregateInput>>;
  NOT?: InputMaybe<PersonActedInMoviesAggregateInput>;
  node?: InputMaybe<PersonActedInMoviesNodeAggregationWhereInput>;
};

export type PersonActedInMoviesConnectFieldInput = {
  edge: ActedInPropertiesCreateInput;
  where?: InputMaybe<MovieConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type PersonActedInMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
  edge?: InputMaybe<ActedInPropertiesSort>;
};

export type PersonActedInMoviesConnectionWhere = {
  AND?: InputMaybe<Array<PersonActedInMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonActedInMoviesConnectionWhere>>;
  NOT?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MovieWhere>;
  edge?: InputMaybe<ActedInPropertiesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ActedInPropertiesWhere>;
};

export type PersonActedInMoviesCreateFieldInput = {
  edge: ActedInPropertiesCreateInput;
  node: MovieCreateInput;
};

export type PersonActedInMoviesDeleteFieldInput = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type PersonActedInMoviesDisconnectFieldInput = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type PersonActedInMoviesFieldInput = {
  connect?: InputMaybe<Array<PersonActedInMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<PersonActedInMoviesCreateFieldInput>>;
};

export type PersonActedInMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonActedInMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonActedInMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonActedInMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonActedInMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
  edge?: InputMaybe<ActedInPropertiesUpdateInput>;
};

export type PersonActedInMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  connect?: InputMaybe<Array<PersonActedInMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonActedInMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonActedInMoviesCreateFieldInput>>;
  update?: InputMaybe<PersonActedInMoviesUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonActedInMoviesDeleteFieldInput>>;
};

export type PersonConnectInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesConnectFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesConnectFieldInput>>;
  followsPeople?: InputMaybe<Array<PersonFollowsPeopleConnectFieldInput>>;
  peopleFollows?: InputMaybe<Array<PersonPeopleFollowsConnectFieldInput>>;
  producedMovies?: InputMaybe<Array<PersonProducedMoviesConnectFieldInput>>;
  reviewedMovies?: InputMaybe<Array<PersonReviewedMoviesConnectFieldInput>>;
  wroteMovies?: InputMaybe<Array<PersonWroteMoviesConnectFieldInput>>;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  born?: InputMaybe<Scalars["BigInt"]["input"]>;
  name: Scalars["String"]["input"];
  actedInMovies?: InputMaybe<PersonActedInMoviesFieldInput>;
  directedMovies?: InputMaybe<PersonDirectedMoviesFieldInput>;
  followsPeople?: InputMaybe<PersonFollowsPeopleFieldInput>;
  peopleFollows?: InputMaybe<PersonPeopleFollowsFieldInput>;
  producedMovies?: InputMaybe<PersonProducedMoviesFieldInput>;
  reviewedMovies?: InputMaybe<PersonReviewedMoviesFieldInput>;
  wroteMovies?: InputMaybe<PersonWroteMoviesFieldInput>;
};

export type PersonDeleteInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesDeleteFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesDeleteFieldInput>>;
  followsPeople?: InputMaybe<Array<PersonFollowsPeopleDeleteFieldInput>>;
  peopleFollows?: InputMaybe<Array<PersonPeopleFollowsDeleteFieldInput>>;
  producedMovies?: InputMaybe<Array<PersonProducedMoviesDeleteFieldInput>>;
  reviewedMovies?: InputMaybe<Array<PersonReviewedMoviesDeleteFieldInput>>;
  wroteMovies?: InputMaybe<Array<PersonWroteMoviesDeleteFieldInput>>;
};

export type PersonDirectedMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonDirectedMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonDirectedMoviesAggregateInput>>;
  NOT?: InputMaybe<PersonDirectedMoviesAggregateInput>;
  node?: InputMaybe<PersonDirectedMoviesNodeAggregationWhereInput>;
};

export type PersonDirectedMoviesConnectFieldInput = {
  where?: InputMaybe<MovieConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type PersonDirectedMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type PersonDirectedMoviesConnectionWhere = {
  AND?: InputMaybe<Array<PersonDirectedMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonDirectedMoviesConnectionWhere>>;
  NOT?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MovieWhere>;
};

export type PersonDirectedMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type PersonDirectedMoviesDeleteFieldInput = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type PersonDirectedMoviesDisconnectFieldInput = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type PersonDirectedMoviesFieldInput = {
  connect?: InputMaybe<Array<PersonDirectedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<PersonDirectedMoviesCreateFieldInput>>;
};

export type PersonDirectedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonDirectedMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonDirectedMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonDirectedMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonDirectedMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type PersonDirectedMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  connect?: InputMaybe<Array<PersonDirectedMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonDirectedMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonDirectedMoviesCreateFieldInput>>;
  update?: InputMaybe<PersonDirectedMoviesUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonDirectedMoviesDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesDisconnectFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesDisconnectFieldInput>>;
  followsPeople?: InputMaybe<Array<PersonFollowsPeopleDisconnectFieldInput>>;
  peopleFollows?: InputMaybe<Array<PersonPeopleFollowsDisconnectFieldInput>>;
  producedMovies?: InputMaybe<Array<PersonProducedMoviesDisconnectFieldInput>>;
  reviewedMovies?: InputMaybe<Array<PersonReviewedMoviesDisconnectFieldInput>>;
  wroteMovies?: InputMaybe<Array<PersonWroteMoviesDisconnectFieldInput>>;
};

export type PersonFollowsPeopleAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonFollowsPeopleAggregateInput>>;
  OR?: InputMaybe<Array<PersonFollowsPeopleAggregateInput>>;
  NOT?: InputMaybe<PersonFollowsPeopleAggregateInput>;
  node?: InputMaybe<PersonFollowsPeopleNodeAggregationWhereInput>;
};

export type PersonFollowsPeopleConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type PersonFollowsPeopleConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type PersonFollowsPeopleConnectionWhere = {
  AND?: InputMaybe<Array<PersonFollowsPeopleConnectionWhere>>;
  OR?: InputMaybe<Array<PersonFollowsPeopleConnectionWhere>>;
  NOT?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type PersonFollowsPeopleCreateFieldInput = {
  node: PersonCreateInput;
};

export type PersonFollowsPeopleDeleteFieldInput = {
  where?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type PersonFollowsPeopleDisconnectFieldInput = {
  where?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type PersonFollowsPeopleFieldInput = {
  connect?: InputMaybe<Array<PersonFollowsPeopleConnectFieldInput>>;
  create?: InputMaybe<Array<PersonFollowsPeopleCreateFieldInput>>;
};

export type PersonFollowsPeopleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonFollowsPeopleNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonFollowsPeopleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonFollowsPeopleNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonFollowsPeopleUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type PersonFollowsPeopleUpdateFieldInput = {
  where?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  connect?: InputMaybe<Array<PersonFollowsPeopleConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonFollowsPeopleDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonFollowsPeopleCreateFieldInput>>;
  update?: InputMaybe<PersonFollowsPeopleUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonFollowsPeopleDeleteFieldInput>>;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

export type PersonPeopleFollowsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonPeopleFollowsAggregateInput>>;
  OR?: InputMaybe<Array<PersonPeopleFollowsAggregateInput>>;
  NOT?: InputMaybe<PersonPeopleFollowsAggregateInput>;
  node?: InputMaybe<PersonPeopleFollowsNodeAggregationWhereInput>;
};

export type PersonPeopleFollowsConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type PersonPeopleFollowsConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type PersonPeopleFollowsConnectionWhere = {
  AND?: InputMaybe<Array<PersonPeopleFollowsConnectionWhere>>;
  OR?: InputMaybe<Array<PersonPeopleFollowsConnectionWhere>>;
  NOT?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type PersonPeopleFollowsCreateFieldInput = {
  node: PersonCreateInput;
};

export type PersonPeopleFollowsDeleteFieldInput = {
  where?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type PersonPeopleFollowsDisconnectFieldInput = {
  where?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type PersonPeopleFollowsFieldInput = {
  connect?: InputMaybe<Array<PersonPeopleFollowsConnectFieldInput>>;
  create?: InputMaybe<Array<PersonPeopleFollowsCreateFieldInput>>;
};

export type PersonPeopleFollowsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonPeopleFollowsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonPeopleFollowsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonPeopleFollowsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  born_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonPeopleFollowsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type PersonPeopleFollowsUpdateFieldInput = {
  where?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  connect?: InputMaybe<Array<PersonPeopleFollowsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonPeopleFollowsDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonPeopleFollowsCreateFieldInput>>;
  update?: InputMaybe<PersonPeopleFollowsUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonPeopleFollowsDeleteFieldInput>>;
};

export type PersonProducedMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonProducedMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonProducedMoviesAggregateInput>>;
  NOT?: InputMaybe<PersonProducedMoviesAggregateInput>;
  node?: InputMaybe<PersonProducedMoviesNodeAggregationWhereInput>;
};

export type PersonProducedMoviesConnectFieldInput = {
  where?: InputMaybe<MovieConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type PersonProducedMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type PersonProducedMoviesConnectionWhere = {
  AND?: InputMaybe<Array<PersonProducedMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonProducedMoviesConnectionWhere>>;
  NOT?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MovieWhere>;
};

export type PersonProducedMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type PersonProducedMoviesDeleteFieldInput = {
  where?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type PersonProducedMoviesDisconnectFieldInput = {
  where?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type PersonProducedMoviesFieldInput = {
  connect?: InputMaybe<Array<PersonProducedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<PersonProducedMoviesCreateFieldInput>>;
};

export type PersonProducedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonProducedMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonProducedMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonProducedMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonProducedMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type PersonProducedMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  connect?: InputMaybe<Array<PersonProducedMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonProducedMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonProducedMoviesCreateFieldInput>>;
  update?: InputMaybe<PersonProducedMoviesUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonProducedMoviesDeleteFieldInput>>;
};

export type PersonRelationInput = {
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesCreateFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesCreateFieldInput>>;
  followsPeople?: InputMaybe<Array<PersonFollowsPeopleCreateFieldInput>>;
  peopleFollows?: InputMaybe<Array<PersonPeopleFollowsCreateFieldInput>>;
  producedMovies?: InputMaybe<Array<PersonProducedMoviesCreateFieldInput>>;
  reviewedMovies?: InputMaybe<Array<PersonReviewedMoviesCreateFieldInput>>;
  wroteMovies?: InputMaybe<Array<PersonWroteMoviesCreateFieldInput>>;
};

export type PersonReviewedMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonReviewedMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonReviewedMoviesAggregateInput>>;
  NOT?: InputMaybe<PersonReviewedMoviesAggregateInput>;
  node?: InputMaybe<PersonReviewedMoviesNodeAggregationWhereInput>;
  edge?: InputMaybe<ReviewedPropertiesAggregationWhereInput>;
};

export type PersonReviewedMoviesConnectFieldInput = {
  edge: ReviewedPropertiesCreateInput;
  where?: InputMaybe<MovieConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type PersonReviewedMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
  edge?: InputMaybe<ReviewedPropertiesSort>;
};

export type PersonReviewedMoviesConnectionWhere = {
  AND?: InputMaybe<Array<PersonReviewedMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonReviewedMoviesConnectionWhere>>;
  NOT?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MovieWhere>;
  edge?: InputMaybe<ReviewedPropertiesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ReviewedPropertiesWhere>;
};

export type PersonReviewedMoviesCreateFieldInput = {
  edge: ReviewedPropertiesCreateInput;
  node: MovieCreateInput;
};

export type PersonReviewedMoviesDeleteFieldInput = {
  where?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type PersonReviewedMoviesDisconnectFieldInput = {
  where?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type PersonReviewedMoviesFieldInput = {
  connect?: InputMaybe<Array<PersonReviewedMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<PersonReviewedMoviesCreateFieldInput>>;
};

export type PersonReviewedMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonReviewedMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonReviewedMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonReviewedMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonReviewedMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
  edge?: InputMaybe<ReviewedPropertiesUpdateInput>;
};

export type PersonReviewedMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  connect?: InputMaybe<Array<PersonReviewedMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonReviewedMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonReviewedMoviesCreateFieldInput>>;
  update?: InputMaybe<PersonReviewedMoviesUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonReviewedMoviesDeleteFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  born?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type PersonUpdateInput = {
  born?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  actedInMovies?: InputMaybe<Array<PersonActedInMoviesUpdateFieldInput>>;
  directedMovies?: InputMaybe<Array<PersonDirectedMoviesUpdateFieldInput>>;
  followsPeople?: InputMaybe<Array<PersonFollowsPeopleUpdateFieldInput>>;
  peopleFollows?: InputMaybe<Array<PersonPeopleFollowsUpdateFieldInput>>;
  producedMovies?: InputMaybe<Array<PersonProducedMoviesUpdateFieldInput>>;
  reviewedMovies?: InputMaybe<Array<PersonReviewedMoviesUpdateFieldInput>>;
  wroteMovies?: InputMaybe<Array<PersonWroteMoviesUpdateFieldInput>>;
};

export type PersonWhere = {
  born?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  born_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_IN?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  born_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]["input"]>>>;
  born_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  born_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<PersonWhere>>;
  AND?: InputMaybe<Array<PersonWhere>>;
  NOT?: InputMaybe<PersonWhere>;
  /** @deprecated Use `actedInMovies_SOME` instead. */
  actedInMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `actedInMovies_NONE` instead. */
  actedInMovies_NOT?: InputMaybe<MovieWhere>;
  /** Return People where all of the related Movies match this filter */
  actedInMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  actedInMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  actedInMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  actedInMovies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `actedInMoviesConnection_SOME` instead. */
  actedInMoviesConnection?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** @deprecated Use `actedInMoviesConnection_NONE` instead. */
  actedInMoviesConnection_NOT?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** Return People where all of the related PersonActedInMoviesConnections match this filter */
  actedInMoviesConnection_ALL?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** Return People where none of the related PersonActedInMoviesConnections match this filter */
  actedInMoviesConnection_NONE?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** Return People where one of the related PersonActedInMoviesConnections match this filter */
  actedInMoviesConnection_SINGLE?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  /** Return People where some of the related PersonActedInMoviesConnections match this filter */
  actedInMoviesConnection_SOME?: InputMaybe<PersonActedInMoviesConnectionWhere>;
  actedInMoviesAggregate?: InputMaybe<PersonActedInMoviesAggregateInput>;
  /** @deprecated Use `directedMovies_SOME` instead. */
  directedMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `directedMovies_NONE` instead. */
  directedMovies_NOT?: InputMaybe<MovieWhere>;
  /** Return People where all of the related Movies match this filter */
  directedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  directedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  directedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  directedMovies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `directedMoviesConnection_SOME` instead. */
  directedMoviesConnection?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** @deprecated Use `directedMoviesConnection_NONE` instead. */
  directedMoviesConnection_NOT?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** Return People where all of the related PersonDirectedMoviesConnections match this filter */
  directedMoviesConnection_ALL?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** Return People where none of the related PersonDirectedMoviesConnections match this filter */
  directedMoviesConnection_NONE?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** Return People where one of the related PersonDirectedMoviesConnections match this filter */
  directedMoviesConnection_SINGLE?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  /** Return People where some of the related PersonDirectedMoviesConnections match this filter */
  directedMoviesConnection_SOME?: InputMaybe<PersonDirectedMoviesConnectionWhere>;
  directedMoviesAggregate?: InputMaybe<PersonDirectedMoviesAggregateInput>;
  /** @deprecated Use `followsPeople_SOME` instead. */
  followsPeople?: InputMaybe<PersonWhere>;
  /** @deprecated Use `followsPeople_NONE` instead. */
  followsPeople_NOT?: InputMaybe<PersonWhere>;
  /** Return People where all of the related People match this filter */
  followsPeople_ALL?: InputMaybe<PersonWhere>;
  /** Return People where none of the related People match this filter */
  followsPeople_NONE?: InputMaybe<PersonWhere>;
  /** Return People where one of the related People match this filter */
  followsPeople_SINGLE?: InputMaybe<PersonWhere>;
  /** Return People where some of the related People match this filter */
  followsPeople_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `followsPeopleConnection_SOME` instead. */
  followsPeopleConnection?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  /** @deprecated Use `followsPeopleConnection_NONE` instead. */
  followsPeopleConnection_NOT?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  /** Return People where all of the related PersonFollowsPeopleConnections match this filter */
  followsPeopleConnection_ALL?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  /** Return People where none of the related PersonFollowsPeopleConnections match this filter */
  followsPeopleConnection_NONE?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  /** Return People where one of the related PersonFollowsPeopleConnections match this filter */
  followsPeopleConnection_SINGLE?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  /** Return People where some of the related PersonFollowsPeopleConnections match this filter */
  followsPeopleConnection_SOME?: InputMaybe<PersonFollowsPeopleConnectionWhere>;
  followsPeopleAggregate?: InputMaybe<PersonFollowsPeopleAggregateInput>;
  /** @deprecated Use `peopleFollows_SOME` instead. */
  peopleFollows?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleFollows_NONE` instead. */
  peopleFollows_NOT?: InputMaybe<PersonWhere>;
  /** Return People where all of the related People match this filter */
  peopleFollows_ALL?: InputMaybe<PersonWhere>;
  /** Return People where none of the related People match this filter */
  peopleFollows_NONE?: InputMaybe<PersonWhere>;
  /** Return People where one of the related People match this filter */
  peopleFollows_SINGLE?: InputMaybe<PersonWhere>;
  /** Return People where some of the related People match this filter */
  peopleFollows_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `peopleFollowsConnection_SOME` instead. */
  peopleFollowsConnection?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  /** @deprecated Use `peopleFollowsConnection_NONE` instead. */
  peopleFollowsConnection_NOT?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  /** Return People where all of the related PersonPeopleFollowsConnections match this filter */
  peopleFollowsConnection_ALL?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  /** Return People where none of the related PersonPeopleFollowsConnections match this filter */
  peopleFollowsConnection_NONE?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  /** Return People where one of the related PersonPeopleFollowsConnections match this filter */
  peopleFollowsConnection_SINGLE?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  /** Return People where some of the related PersonPeopleFollowsConnections match this filter */
  peopleFollowsConnection_SOME?: InputMaybe<PersonPeopleFollowsConnectionWhere>;
  peopleFollowsAggregate?: InputMaybe<PersonPeopleFollowsAggregateInput>;
  /** @deprecated Use `producedMovies_SOME` instead. */
  producedMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `producedMovies_NONE` instead. */
  producedMovies_NOT?: InputMaybe<MovieWhere>;
  /** Return People where all of the related Movies match this filter */
  producedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  producedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  producedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  producedMovies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `producedMoviesConnection_SOME` instead. */
  producedMoviesConnection?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  /** @deprecated Use `producedMoviesConnection_NONE` instead. */
  producedMoviesConnection_NOT?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  /** Return People where all of the related PersonProducedMoviesConnections match this filter */
  producedMoviesConnection_ALL?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  /** Return People where none of the related PersonProducedMoviesConnections match this filter */
  producedMoviesConnection_NONE?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  /** Return People where one of the related PersonProducedMoviesConnections match this filter */
  producedMoviesConnection_SINGLE?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  /** Return People where some of the related PersonProducedMoviesConnections match this filter */
  producedMoviesConnection_SOME?: InputMaybe<PersonProducedMoviesConnectionWhere>;
  producedMoviesAggregate?: InputMaybe<PersonProducedMoviesAggregateInput>;
  /** @deprecated Use `reviewedMovies_SOME` instead. */
  reviewedMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `reviewedMovies_NONE` instead. */
  reviewedMovies_NOT?: InputMaybe<MovieWhere>;
  /** Return People where all of the related Movies match this filter */
  reviewedMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  reviewedMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  reviewedMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  reviewedMovies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `reviewedMoviesConnection_SOME` instead. */
  reviewedMoviesConnection?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  /** @deprecated Use `reviewedMoviesConnection_NONE` instead. */
  reviewedMoviesConnection_NOT?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  /** Return People where all of the related PersonReviewedMoviesConnections match this filter */
  reviewedMoviesConnection_ALL?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  /** Return People where none of the related PersonReviewedMoviesConnections match this filter */
  reviewedMoviesConnection_NONE?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  /** Return People where one of the related PersonReviewedMoviesConnections match this filter */
  reviewedMoviesConnection_SINGLE?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  /** Return People where some of the related PersonReviewedMoviesConnections match this filter */
  reviewedMoviesConnection_SOME?: InputMaybe<PersonReviewedMoviesConnectionWhere>;
  reviewedMoviesAggregate?: InputMaybe<PersonReviewedMoviesAggregateInput>;
  /** @deprecated Use `wroteMovies_SOME` instead. */
  wroteMovies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `wroteMovies_NONE` instead. */
  wroteMovies_NOT?: InputMaybe<MovieWhere>;
  /** Return People where all of the related Movies match this filter */
  wroteMovies_ALL?: InputMaybe<MovieWhere>;
  /** Return People where none of the related Movies match this filter */
  wroteMovies_NONE?: InputMaybe<MovieWhere>;
  /** Return People where one of the related Movies match this filter */
  wroteMovies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return People where some of the related Movies match this filter */
  wroteMovies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `wroteMoviesConnection_SOME` instead. */
  wroteMoviesConnection?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  /** @deprecated Use `wroteMoviesConnection_NONE` instead. */
  wroteMoviesConnection_NOT?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  /** Return People where all of the related PersonWroteMoviesConnections match this filter */
  wroteMoviesConnection_ALL?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  /** Return People where none of the related PersonWroteMoviesConnections match this filter */
  wroteMoviesConnection_NONE?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  /** Return People where one of the related PersonWroteMoviesConnections match this filter */
  wroteMoviesConnection_SINGLE?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  /** Return People where some of the related PersonWroteMoviesConnections match this filter */
  wroteMoviesConnection_SOME?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  wroteMoviesAggregate?: InputMaybe<PersonWroteMoviesAggregateInput>;
};

export type PersonWroteMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonWroteMoviesAggregateInput>>;
  OR?: InputMaybe<Array<PersonWroteMoviesAggregateInput>>;
  NOT?: InputMaybe<PersonWroteMoviesAggregateInput>;
  node?: InputMaybe<PersonWroteMoviesNodeAggregationWhereInput>;
};

export type PersonWroteMoviesConnectFieldInput = {
  where?: InputMaybe<MovieConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MovieConnectInput>>;
};

export type PersonWroteMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type PersonWroteMoviesConnectionWhere = {
  AND?: InputMaybe<Array<PersonWroteMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonWroteMoviesConnectionWhere>>;
  NOT?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MovieWhere>;
};

export type PersonWroteMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type PersonWroteMoviesDeleteFieldInput = {
  where?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type PersonWroteMoviesDisconnectFieldInput = {
  where?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type PersonWroteMoviesFieldInput = {
  connect?: InputMaybe<Array<PersonWroteMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<PersonWroteMoviesCreateFieldInput>>;
};

export type PersonWroteMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonWroteMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonWroteMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonWroteMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  released_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  released_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tagline_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tagline_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tagline_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tagline_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonWroteMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type PersonWroteMoviesUpdateFieldInput = {
  where?: InputMaybe<PersonWroteMoviesConnectionWhere>;
  connect?: InputMaybe<Array<PersonWroteMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonWroteMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonWroteMoviesCreateFieldInput>>;
  update?: InputMaybe<PersonWroteMoviesUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonWroteMoviesDeleteFieldInput>>;
};

export type ReviewedPropertiesAggregationWhereInput = {
  AND?: InputMaybe<Array<ReviewedPropertiesAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReviewedPropertiesAggregationWhereInput>>;
  NOT?: InputMaybe<ReviewedPropertiesAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MIN_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MAX_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_SUM_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_AVERAGE_EQUAL?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MIN_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MAX_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_SUM_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_AVERAGE_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MIN_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MAX_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_SUM_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_AVERAGE_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MIN_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MAX_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_SUM_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_AVERAGE_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MIN_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_MAX_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_SUM_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_AVERAGE_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ReviewedPropertiesCreateInput = {
  rating: Scalars["BigInt"]["input"];
  summary: Scalars["String"]["input"];
};

export type ReviewedPropertiesSort = {
  rating?: InputMaybe<SortDirection>;
  summary?: InputMaybe<SortDirection>;
};

export type ReviewedPropertiesUpdateInput = {
  rating?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_INCREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_DECREMENT?: InputMaybe<Scalars["BigInt"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
};

export type ReviewedPropertiesWhere = {
  rating?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  rating_NOT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  rating_NOT_IN?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rating_LT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_LTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_GT?: InputMaybe<Scalars["BigInt"]["input"]>;
  rating_GTE?: InputMaybe<Scalars["BigInt"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT?: InputMaybe<Scalars["String"]["input"]>;
  summary_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  summary_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  summary_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  summary_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<ReviewedPropertiesWhere>>;
  AND?: InputMaybe<Array<ReviewedPropertiesWhere>>;
  NOT?: InputMaybe<ReviewedPropertiesWhere>;
};

export interface MovieAggregateSelectionInput {
  count?: boolean;
  released?: boolean;
  tagline?: boolean;
  title?: boolean;
}

export declare class MovieModel {
  public find(args?: {
    where?: MovieWhere;

    options?: MovieOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Movie[]>;
  public create(args: {
    input: MovieCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMoviesMutationResponse>;
  public update(args: {
    where?: MovieWhere;
    update?: MovieUpdateInput;
    connect?: MovieConnectInput;
    disconnect?: MovieDisconnectInput;
    create?: MovieCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMoviesMutationResponse>;
  public delete(args: {
    where?: MovieWhere;
    delete?: MovieDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MovieWhere;

    aggregate: MovieAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MovieAggregateSelection>;
}

export interface PersonAggregateSelectionInput {
  count?: boolean;
  born?: boolean;
  name?: boolean;
}

export declare class PersonModel {
  public find(args?: {
    where?: PersonWhere;

    options?: PersonOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Person[]>;
  public create(args: {
    input: PersonCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePeopleMutationResponse>;
  public update(args: {
    where?: PersonWhere;
    update?: PersonUpdateInput;
    connect?: PersonConnectInput;
    disconnect?: PersonDisconnectInput;
    create?: PersonCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePeopleMutationResponse>;
  public delete(args: {
    where?: PersonWhere;
    delete?: PersonDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PersonWhere;

    aggregate: PersonAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PersonAggregateSelection>;
}

export interface ModelMap {
  Movie: MovieModel;
  Person: PersonModel;
}
