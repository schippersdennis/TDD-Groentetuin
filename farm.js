const getYieldForPlant = (corn) => {
    return corn.yield;
};

const corn = {
    name: 'corn',
    yield: 3,
};
const input = {
    crop: corn,
    numCrops: 10,
};

const getYieldForCrop = (input) => {
    return input.crop.yield * input.numCrops;
};

getYieldForCrop(input);

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
};
