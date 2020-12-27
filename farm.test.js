const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
} = require('./farm');

describe('getYieldForPlant', () => {
    const corn = {
        name: 'corn',
        yield: 30,
    };

    test('Get yield for plant with no environment factors', () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe('getYieldForCrop', () => {
    test('Get yield for crop, simple', () => {
        const corn = {
            name: 'corn',
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe('getTotalYield', () => {
    test('Calculate total yield with multiple crops', () => {
        const corn = {
            name: 'corn',
            yield: 3,
        };
        const pumpkin = {
            name: 'pumpkin',
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test('Calculate total yield with 0 amount', () => {
        const corn = {
            name: 'corn',
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe('getCostsForCrop', () => {
    test('Calculate the total of costs of a Single Crop ', () => {
        const corn = {
            corp: 'corn',
            amount: 230,
        };

        const cropCosts = [{ crop: corn, sowingPrice: 1 }];
        expect(getCostsForCrop(cropCosts)).toBe(230);
    });

    test('Calculate the total of costs of Multiple Crops', () => {
        const corn = {
            corp: 'corn',
            amount: 230,
        };
        const carrots = {
            corp: 'carrots',
            amount: 4430,
        };
        const kale = {
            corp: 'kale',
            amount: 1430,
        };

        const cropCosts = [
            { crop: corn, sowingPrice: 1 },
            { crop: carrots, sowingPrice: 1 },
            { crop: kale, sowingPrice: 1 },
        ];
        expect(getCostsForCrop(cropCosts)).toBe(6090);
    });
});
