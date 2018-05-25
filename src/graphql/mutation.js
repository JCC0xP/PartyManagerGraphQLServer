import { allocationsMutations } from './resources/allocations/allocations.schema';

const Mutation = `
    type Mutation {
        ${allocationsMutations}
    }
`;

export {
    Mutation,
}
