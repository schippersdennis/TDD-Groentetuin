const getYieldForPlant = (corn) => {
    return corn.yield;
};

const getYieldForCrop = (input) => {
    return input.crop.yield * input.numCrops;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
};
