const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) !== 'object' ) {
    return 'Unable to determine the time of year!';
  }
  const month = Number(date.getUTCMonth());
  const season = Math.floor((month + 1) / 3);
  if (season === 1) {
    return 'spring';
  } else if (season === 2) {
    return 'summer';
  } else if (season === 3) {
    return 'fall';
  } else return 'winter';
};
