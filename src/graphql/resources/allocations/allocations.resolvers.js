export const allocationsResolvers = {

    Query: {

        allAllocations: async (root, data, { mongo: { Allocations } }) => {
            const filter = data.date ? { date: data.date } : null;
            return await Allocations.find(filter).toArray();
        },

    },

    Mutation: {

        createAllocations: async (root, data, { mongo: { Allocations } }) => {
            const newAllocation = {
                key: Date.now().toString(),
                avatar: data.avatar,
                title: data.title,
                description: data.description,
                date: data.date
            };
            const response = await Allocations.insert(newAllocation);
            newAllocation._id = response.insertedIds[0];
            return newAllocation;
        },

        deleteAllocations: async (root, data, { mongo: { Allocations } }) => {
            const deleteAllocation = {
                key: data.key
            };
            const response = await Allocations.deleteOne({ key: deleteAllocation.key });
            return response || false;
        }

    },

    AllAllocations: {

        amount: async (root, data, { mongo: { Allocations } }) => {
            const response = await Allocations.find({ date: root.date }).toArray();
            return response.length;
        },

        type: async (root, data, { mongo: { Allocations } }) => {
            const response = await Allocations.find({ date: root.date }).toArray();
            if (response.length <= 5) {
                return 'success';
            } else if (response.length <= 8) {
                return 'warning';
            }
            return 'error';
        },

        allocationsOfDay: async (root, data, { mongo: { Allocations } }) => {
            return await Allocations.find({ date: root.date }).toArray();
        },

    }

};
