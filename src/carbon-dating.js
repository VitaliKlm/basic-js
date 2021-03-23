const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; //  N(0)
const HALF_LIFE_PERIOD= 5730; // t(1/2)

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string' && Number(sampleActivity) > 0 && Number(sampleActivity) <= 15) {
    return Math.ceil( Math.log(MODERN_ACTIVITY/Number(sampleActivity)) * HALF_LIFE_PERIOD / 0.693);
  }
  else return false;
};

// dateSample = ln( N(0)/N ) * t(1/2) / 0.693
// sampleActivity - N