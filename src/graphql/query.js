import { allocationsQueries } from './resources/allocations/allocations.schema';
import { decorationsQueries } from './resources/decorations/decorations.schema';

const Query = `
    type Query {
        ${allocationsQueries}
        ${decorationsQueries}
    }
`;

export {
    Query,
}
