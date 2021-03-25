const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        return 1 + this.calculateDepth(arr.flat());
      }
    }
    return 1;
  }
};