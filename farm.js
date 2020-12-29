const getYieldForPlant = (corn) => {
	return corn.yield;
};

const getYieldForCrop = (input) => {
	return input.crop.yield * input.numCrops;
};

const getTotalYield = ({ crops }) => {
	return crops
		.map((item) => item.crop.yield * item.numCrops)
		.reduce((a, b) => a + b);
};

const getCostsForCrop = (costs) => {
	return costs
		.map((item) => item.crop.numCrops * item.costs)
		.reduce((a, b) => a + b);
};

const getRevenueForCrop = (input) => {
	let totalRevenue = [];
	input.map((item) =>
		totalRevenue.push({
			name: item.crop.name,
			revenue:
				item.crop.numCrops *
				item.crop.yield *
				item.crop.price,
		})
	);
	return totalRevenue;
};
//singlecrop
const getProfitGorCrop = (input) => {
	let totalProfit = [];
	input.map((item) => {
		let income =
			item.crop.numCrops * item.crop.yield * item.crop.price;
		let costs = item.crop.numCrops * item.crop.costs;
		totalProfit.push({
			name: item.crop.name,
			profit: income - costs,
		});
	});
	return totalProfit;
};
//multiple crops (same as above)
const getTotalProfit = (input) => {
	let totalProfit = [];
	input.map((item) => {
		let income =
			item.crop.numCrops * item.crop.yield * item.crop.price;
		let costs = item.crop.numCrops * item.crop.costs;
		totalProfit.push({
			name: item.crop.name,
			profit: income - costs,
		});
	});
	return totalProfit;
};

module.exports = {
	getYieldForPlant,
	getYieldForCrop,
	getTotalYield,
	getCostsForCrop,
	getRevenueForCrop,
	getProfitGorCrop,
	getTotalProfit,
};
