const {
	getYieldForPlant,
	getYieldForCrop,
	getTotalYield,
	getCostsForCrop,
	getRevenueForCrop,
	getProfitForCrop,
	getTotalProfit,
} = require('./farm');

// 1. Get Yield for PLANT with and without environment factors
describe('1 - getYieldForPlant', () => {
	test('Get yield for plant with no environment factors', () => {
		const corn = {
			name: 'corn',
			yield: 30,
		};
		expect(getYieldForPlant(corn)).toBe(30);
	});
	test('Get yield for plant with two environment factors', () => {
		const corn = {
			name: 'corn',
			yield: 30,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: 0,
					medium: -30,
					high: -60,
				},
			},
		};

		const environmentFactors = {
			sun: 'high',
			wind: 'low',
		};
		expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
	});
});
// 2. Get Yield for CROP with and without environment factors
describe('2- getYieldForCrop', () => {
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
	test('Get yield for crop, with two environment factors', () => {
		const corn = {
			name: 'corn',
			yield: 30,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: 0,
					medium: -30,
					high: -60,
				},
			},
		};
		const environmentFactors = {
			sun: 'high',
			wind: 'low',
		};
		const input = {
			crop: corn,
			numCrops: 10,
		};

		expect(getYieldForCrop(input, environmentFactors)).toBe(450);
	});
});
// 3. Get total Yield
describe('3- getTotalYield', () => {
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
// 4. get the Costs For a Crop
describe('4 - getCostsForCrop', () => {
	test('calculate costs for a crops', () => {
		const corn = {
			name: 'corn',
			yield: 3,
		};
		const input = { crop: corn, numCrops: 5, costs: 1 };
		expect(getCostsForCrop(input)).toBe(5);
	});
	test('Calculate the costs for Multiple Crops', () => {
		const corn = {
			name: 'corn',
			yield: 3,
		};
		const pumpkin = {
			name: 'pumpkin',
			yield: 4,
		};
		const input = [
			{ crop: corn, numCrops: 230, costs: 1 },
			{ crop: pumpkin, numCrops: 400, costs: 3 },
		];
		const output = [
			{ name: 'corn', 'total costs': 230 },
			{ name: 'pumpkin', 'total costs': 1200 },
		];
		expect(getCostsForCrop(input)).toEqual(output);
	});
});

//5. get the revenue for a crop
describe('5 - getRevenueForCrop', () => {
	test('calculate revenue for a single crop (without environmental factors):', () => {
		const corn = {
			name: 'corn',
			yield: 4,
		};
		const input = { crop: corn, numCrops: 5, price: 3 };
		expect(getRevenueForCrop(input)).toBe(60);
	});

	test('calculate revenue for multiple crops (without environmental factors):', () => {
		const corn = {
			name: 'corn',
			yield: 1.2,
		};
		const apples = {
			name: 'apples',
			yield: 200,
		};
		const carrots = {
			name: 'carrots',
			yield: 5,
		};
		const input = [
			{ crop: corn, numCrops: 5000, price: 2 },
			{ crop: apples, numCrops: 50, price: 5 },
			{ crop: carrots, numCrops: 1500, price: 2 },
		];
		const output = [
			{ name: 'corn', revenue: 12000 },
			{ name: 'apples', revenue: 50000 },
			{ name: 'carrots', revenue: 15000 },
		];
		expect(getRevenueForCrop(input)).toEqual(output);
	});
});

// 6. Get the profit for a single Crop including environmental factors
describe('6 - GetProfitForCrop', () => {
	test('Get the profit for a single Crop including environmental factors', () => {
		const corn = {
			name: 'corn',
			yield: 4,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: 0,
					medium: -30,
					hard: -60,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const environmentFactors = {
			sun: 'high',
			wind: 'low',
			soil: 'loam',
		};
		const input = {
			crop: corn,
			numCrops: 5,
			costs: 2,
			price: 3,
			factors: environmentFactors,
		};
		expect(getProfitForCrop(input)).toBe(110);
	});
});

// 7. Get the profit for multiple crops including environmental factors
describe('7 - getProfitGorCrop', () => {
	test('calculate the Total Profit for multiple crops, with for each crop diffrent environmental factors):', () => {
		const corn = {
			name: 'corn',
			yield: 1.5,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: 0,
					medium: -30,
					hard: -60,
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
			yield: 500,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: 0,
					medium: -30,
					hard: -60,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const carrots = {
			name: 'carrots',
			yield: 2,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: 0,
					medium: -30,
					hard: -60,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const avocado = {
			name: 'avocado',
			yield: 50,
			factors: {
				sun: {
					low: -50,
					medium: 0,
					high: 50,
				},
				wind: {
					low: 0,
					medium: -30,
					hard: -60,
				},
				soil: {
					sand: -50,
					clay: -20,
					loam: 50,
				},
			},
		};
		const environmentFactors = {
			corn: {
				sun: 'medium',
				wind: 'low',
				soil: 'loam',
			},
			apples: {
				sun: 'high',
				wind: 'hard',
				soil: 'loam',
			},
			carrots: {
				sun: 'medium',
				wind: 'low',
				soil: 'clay',
			},
			avocado: {
				sun: 'medium',
				wind: 'medium',
				soil: 'loam',
			},
		};

		const input = [
			{
				crop: corn,
				numCrops: 5000,
				costs: 1,
				price: 2,
				factors: environmentFactors.corn,
			},
			{
				crop: apples,
				numCrops: 100,
				costs: 2000,
				price: 3,
				factors: environmentFactors.apples,
			},
			{
				crop: carrots,
				numCrops: 2200,
				costs: 2.5,
				price: 4,
				factors: environmentFactors.carrots,
			},
			{
				crop: avocado,
				numCrops: 500,
				costs: 24.5,
				price: 2,
				factors: environmentFactors.avocado,
			},
		];
		const output = [
			{ name: 'corn', profit: 17500 },
			{ name: 'apples', profit: 10000 },
			{ name: 'carrots', profit: 8580 },
			{ name: 'avocado', profit: 47750 },
		];

		expect(getTotalProfit(input)).toEqual(output);
	});
});
