import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import { Query } from './query';
import { Mutation } from './mutation';

import { allocationsTypes } from './resources/allocations/allocations.schema';

import { allocationsResolvers } from './resources/allocations/allocations.resolvers';

const resolvers = merge(
    allocationsResolvers,
);

const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        allocationsTypes,
    ],
    resolvers
});
