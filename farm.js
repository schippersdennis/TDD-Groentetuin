// 1. Get Yield for plant with and without environment factors
const getYieldForPlant = (crop, environmentFactors) => {
	let result = 0;
	if (!environmentFactors) {
		return crop.yield;
	}
	Object.keys(environmentFactors).forEach((key) => {
		let cropFactorKey = environmentFactors[key];
		let cropFactor = crop.factors[key];

		result += (crop.yield / 100) * cropFactor[cropFactorKey];
	});
	return crop.yield + result;
};

// 2. Get Yield for CROP with and without environment factors
const getYieldForCrop = (input, environmentFactors) => {
	let result = 0;
	let total = input.crop.yield * input.numCrops;

	if (!environmentFactors) {
		return total;
	}
	Object.keys(environmentFactors).forEach((key) => {
		let cropFactorKey = environmentFactors[key];
		let cropFactor = input.crop.factors[key];

		result += (input.crop.yield / 100) * cropFactor[cropFactorKey];
	});
	return result * input.numCrops + total;
};

// 3. get total Yield
const getTotalYield = ({ crops }) => {
	return crops
		.map((item) => item.crop.yield * item.numCrops)
		.reduce((a, b) => a + b);
};

//4 . get the Costs For a Crop
const getCostsForCrop = (input) => {
	if (!Array.isArray(input)) {
		let { numCrops, costs } = input;
		return numCrops * costs;
	}
	return input.map((item) => {
		let totalCosts = {
			name: item.crop.name,
			'total costs': item.numCrops * item.costs,
		};
		return totalCosts;
	});
};

// 5. Get the revenue for a Crop
const getRevenueForCrop = (input) => {
	if (!Array.isArray(input)) {
		const { yield: amount } = input.crop;
		const { numCrops, price } = input;
		return amount * numCrops * price;
	}
	return input.map((item) => {
		const { yield: amount } = item.crop;
		const { numCrops, price } = item;
		let totalCosts = {
			name: item.crop.name,
			revenue: numCrops * amount * price,
		};
		return totalCosts;
	});
};

// 6. Get the profit for a single Crop including environmental factors
const getProfitForCrop = (input) => {
	const { yield: amount } = input.crop;
	const { numCrops, costs, price } = input;
	const totalCosts = numCrops * costs;
	let factor = 0;

	Object.keys(input.factors).forEach((key) => {
		factorKey = input.crop.factors[key];
		factorValue = factorKey[input.factors[key]];
		factor += factorValue;
	});

	let totalYield =
		((numCrops * amount) / 100) * factor + numCrops * amount;
	return totalYield * price - totalCosts;
};

// 7. Get the revenue for multiple crops including diffrent environmental factors for each crop
const getTotalProfit = (input) => {
	let output = [];
	input.forEach((item) => {
		const { yield: amount, name } = item.crop;
		const { numCrops, costs, price } = item;
		const totalCosts = numCrops * costs;
		const totalyield = amount * numCrops;
		let factorTotal = 0;

		Object.keys(item.factors).forEach((key) => {
			const factorKey = item.crop.factors[key];
			const factorValue = factorKey[item.factors[key]];
			factorTotal += factorValue;
		});
		const totalWithFactors =
			(totalyield / 100) * factorTotal + totalyield;

		output.push({
			name: name,
			profit: totalWithFactors * price - totalCosts,
		});
	});
	return output;
};

module.exports = {
	getYieldForPlant,
	getYieldForCrop,
	getTotalYield,
	getCostsForCrop,
	getRevenueForCrop,
	getProfitForCrop,
	getTotalProfit,
};
