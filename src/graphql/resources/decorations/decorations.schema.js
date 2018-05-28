const decorationsTypes = `

    # Decorations definition type
    type Decoration {
        _id: ID!
        key: String!
        name: String!
        avatar: String!
        amount: Int!
    }

    input DecorationFilter {
        OR: [DecorationFilter!]
        key_contains: String
        name_contains: String
    }

`;

const decorationsQueries = `
    allDecorations(name: String): [Decoration!]!
`;

const decorationsMutations = `
    createDecorations(
        name: String!,
        avatar: String!,
        amount: Int!,
    ): Decoration
    deleteDecorations(key: String!): Boolean
`;

export {
    decorationsTypes,
    decorationsQueries,
    decorationsMutations,
};
