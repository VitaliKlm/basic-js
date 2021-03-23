const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.flat().reduce((counter, currentElement) => {
    return (currentElement == '^^') ? ++counter : counter;
  }, 0);
};
