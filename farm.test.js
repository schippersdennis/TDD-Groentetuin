const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
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

describe('getRevenueForCrop', () => {
    test('Get the Revenue of a single crop', () => {
        const corn = {
            name: 'corn',
            yield: 9000,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const salePrice = [{ crop: corn, price: 4 }];

        expect(getRevenueForCrop(salePrice)).toBe(36000);
    });

    test('Get the Revenue for multiple cops', () => {
        const corn = {
            name: 'corn',
            yield: 9000,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const kale = {
            name: 'kale',
            yield: 3000,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const carrots = {
            name: 'carrots',
            yield: 1200,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const salePrice = [
            { crop: corn, price: 4 },
            { crop: kale, price: 6 },
            { crop: carrots, price: 5 },
        ];

        expect(getRevenueForCrop(salePrice)).toBe(60000);
    });
});
