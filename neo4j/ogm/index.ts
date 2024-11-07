
import { OGM } from '@neo4j/graphql-ogm';
import { driver } from '../neo4j';
import { ModelMap } from './types/ogm-types';
import { typeDefs } from '../schema';

export const ogm = new OGM<ModelMap>({
  typeDefs,
  driver,
});

await ogm.init();

export const Movie = ogm.model('Movie');