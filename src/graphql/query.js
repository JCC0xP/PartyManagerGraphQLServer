import { allocationsQueries } from './resources/allocations/allocations.schema';

const Query = `
    type Query {
        ${allocationsQueries}
    }
`;

export {
    Query,
}
