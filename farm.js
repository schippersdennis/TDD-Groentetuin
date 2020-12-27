const getYieldForPlant = (corn) => {
    return corn.yield;
};

const getYieldForCrop = (input) => {
    return input.crop.yield * input.numCrops;
};

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
const getTotalYield = (crops) => {
    let total = 0;
    crops.crops.forEach((item) => {
        total = total + item.crop.yield * item.numCrops;
    });
    return total;
};

const getCostsForCrop = (cropCosts) => {
    return cropCosts.crop.amount * cropCosts.sowingPrice;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
};
