const getYieldForPlant = (corn) => {
    return corn.yield;
};

const getYieldForCrop = (input) => {
    return input.crop.yield * input.numCrops;
};

const getTotalYield = (crops) => {
    let total = 0;
    crops.crops.forEach((item) => {
        total = total + item.crop.yield * item.numCrops;
    });
    return total;
};

const getCostsForCrop = (cropCosts) => {
    let totalCosts = 0;
    cropCosts.forEach((crop) => {
        return (totalCosts = totalCosts + crop.crop.amount * crop.sowingPrice);
    });
    return totalCosts;
};

const getRevenueForCrop = (salePrice) => {
    let total = 0;
    salePrice.forEach((item) => (total = total + item.crop.yield * item.price));
    return total;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
};
