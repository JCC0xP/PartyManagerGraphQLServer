import { allocationsMutations } from './resources/allocations/allocations.schema';
import { decorationsMutations } from './resources/decorations/decorations.schema';

const Mutation = `
    type Mutation {
        ${allocationsMutations}
        ${decorationsMutations}
    }
`;

export {
    Mutation,
}
