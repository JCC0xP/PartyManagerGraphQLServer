export const allocationsResolvers = {

    Query: {

        allAllocations: async (root, data, { mongo: { Allocations } }) => {
            const filter = data.date ? { date: data.date } : null;
            return await Allocations.find(filter).toArray();
        },

    },

    Mutation: {

        createAllocations: async (root, data, { mongo: { Allocations, Decorations } }) => {
            const allocationOfDecorationDate = await Allocations.find({ date: data.date, decoration: data.decoration }).toArray();
            const decoration = await Decorations.find({ key: data.decoration }).toArray();
            const newAllocation = {
                key: Date.now().toString(),
                decoration: data.decoration,
                name: data.name,
                date: data.date,
                phone: data.phone,
                type: data.type,
                email: data.email,
                street: data.street,
            };
            if (allocationOfDecorationDate.length < decoration[0].amount) {
                newAllocation.avatar = decoration[0].avatar;
                const response = await Allocations.insert(newAllocation);
                newAllocation._id = response.insertedIds[0];
                return newAllocation;
            }
            return new Error('Limite da decoracao atingido !');
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

    },

    Allocation: {

        decoration: async (root, data, { mongo: { Decorations } }) => {
            const response = await Decorations.find({ key: root.decoration }).toArray();
            if (response.length > 0) {
                return response[0].name;
            }
            return 'Decoracao Generica';
        },

    }

};
