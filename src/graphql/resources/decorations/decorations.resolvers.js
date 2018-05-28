export const decorationResolvers = {

    Query: {

        allDecorations: async (root, data, { mongo: { Decorations } }) => {
            const filter = data.name ? { name: data.name } : null;
            return await Decorations.find(filter).toArray();
        },

    },

    Mutation: {

        createDecorations: async (root, data, { mongo: { Decorations } }) => {
            const newDecoration = {
                key: Date.now().toString(),
                name: data.name,
                avatar: data.avatar,
                amount: data.amount,
            };
            const response = await Decorations.insert(newDecoration);
            newDecoration._id = response.insertedIds[0];
            return newDecoration;
        },

        deleteAllocations: async (root, data, { mongo: { Decorations } }) => {
            const deleteDecoration = {
                key: data.key
            };
            const response = await Decorations.deleteOne({ key: deleteDecoration.key });
            return response || false;
        }

    },

};
