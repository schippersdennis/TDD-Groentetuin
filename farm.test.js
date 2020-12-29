const {
	getYieldForPlant,
	getYieldForCrop,
	getTotalYield,
	getCostsForCrop,
	getRevenueForCrop,
	getProfitGorCrop,
	getTotalProfit,
} = require('./farm');

describe('getYieldForPlant', () => {
	test('Get yield for plant with no environment factors', () => {
		const corn = {
			name: 'corn',
			yield: 30,
		};
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
	test('calculate costs for zero crops', () => {
		const corn = {
			name: 'corn',
			numCrops: 0,
		};
		const costs = [{ crop: corn, costs: 1 }];
		expect(getCostsForCrop(costs)).toBe(0);
	});
	test('Calculate the costs for Multiple Crops', () => {
		const corn = {
			name: 'corn',
			numCrops: 30,
		};
		const pumpkin = {
			name: 'pumpkin',
			numCrops: 40,
		};
		const costs = [
			{ crop: corn, costs: 1 },
			{ crop: pumpkin, costs: 2 },
		];
		expect(getCostsForCrop(costs)).toBe(110);
	});
});

describe('getRevenueForCrop', () => {
	test('calculate revenue for a single crop (without environmental factors):', () => {
		const corn = {
			name: 'corn',
			yield: 0,
			numCrops: 0,
			costs: 2,
			price: 0,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: -60,
					medium: -30,
					normal: 0,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};

		const input = [{ crop: corn }];
		const output = [{ name: 'corn', revenue: 0 }];
		expect(getRevenueForCrop(input)).toEqual(output);
	});

	test('calculate revenue for multiple crops (without environmental factors):', () => {
		const corn = {
			name: 'corn',
			yield: 30,
			numCrops: 30,
			costs: 2,
			price: 3,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: -60,
					medium: -30,
					normal: 0,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const apples = {
			name: 'apples',
			yield: 300,
			numCrops: 100,
			costs: 10,
			price: 5,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: -60,
					medium: -30,
					normal: 0,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const input = [{ crop: corn }, { crop: apples }];

		const output = [
			{ name: 'corn', revenue: 2700 },
			{ name: 'apples', revenue: 150000 },
		];
		expect(getRevenueForCrop(input)).toEqual(output);
	});
});

describe('getProfitGorCrop', () => {
	test('calculate the profit for a single crop (without environmental factors):', () => {
		const corn = {
			name: 'corn',
			yield: 30,
			numCrops: 30,
			costs: 2,
			price: 3,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: -60,
					medium: -30,
					normal: 0,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const input = [{ crop: corn }];
		const output = [{ name: 'corn', profit: 2640 }];
		expect(getProfitGorCrop(input)).toEqual(output);
	});

	test('calculate the profit for multiple crops (without environmental factors):', () => {
		const corn = {
			name: 'corn',
			yield: 30,
			numCrops: 30,
			costs: 2,
			price: 3,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: -60,
					medium: -30,
					normal: 0,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const apples = {
			name: 'apples',
			yield: 300,
			numCrops: 100,
			costs: 10,
			price: 5,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: -60,
					medium: -30,
					normal: 0,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const input = [{ crop: corn }, { crop: apples }];
		const output = [
			{ name: 'corn', profit: 2640 },
			{ name: 'apples', profit: 149000 },
		];
		expect(getTotalProfit(input)).toEqual(output);
	});
});
