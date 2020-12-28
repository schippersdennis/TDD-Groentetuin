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

module.exports = {
	getYieldForPlant,
	getYieldForCrop,
	getTotalYield,
};
