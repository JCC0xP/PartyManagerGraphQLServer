const allocationsTypes = `

    # Allocations definition type
    type Allocation {
        _id: ID!
        key: String!
        avatar: String!
        title: String!
        description: String!
        date: String!
    }
    
    type AllAllocations {
        date: String!
        amount: Int!,
        type: String!
        allocationsOfDay: [Allocation!]!
    }

    input AllocationFilter {
        OR: [AllocationFilter!]
        key_contains: String
        name_contains: String
    }

`;

const allocationsQueries = `
    allAllocations(date: String): [AllAllocations!]!
`;

const allocationsMutations = `
    createAllocations(avatar: String!, title: String!, description: String!, date: String!): Allocation
    deleteAllocations(key: String!): Boolean
`;

export {
    allocationsTypes,
    allocationsQueries,
    allocationsMutations,
};
