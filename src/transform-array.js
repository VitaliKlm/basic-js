const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let discardNext = false;
  const transformedArr = arr.map((element, index, array) => {

    if (element === '--discard-next') {
      element = 'Deleted!';
      if (index !== array.length - 1) {
        discardNext = true;
      }
      return element;
    }

    else if (element === '--discard-prev') {
      if (index === 0) {
        element = 'Deleted!';
      }
      return element;
    }

    else if (element === '--double-next') { 
      element = 'Deleted!';
      if (index !== array.length - 1) {
        element = array[index + 1];
      }
      return element;
    }
  
    else if (element === '--double-prev') {
      element = 'Deleted!';
      // ! 2-nd condition checks if the previous element has been removed
      if (array[index - 2] == '--discard-next') {
        return element;
      }
      if (index !== 0) {
        element = array[index - 1]; 
      }
      // ! leave '--double-prev' control sequence to apply it after map method
      return element;
    }

    else if (discardNext === true) {
      discardNext = false;
      element = 'Deleted!';
      return element;
    }

    else return element;
  })

  // ! make array from all indexes of '--discard-prev' elements
  const discardPrevIndexes = [];
  transformedArr.forEach((elem, index) => {
    if (elem === '--discard-prev') {
      discardPrevIndexes.push(index);
    }
  });

  // ! make all '--discard-prev' elements and previous elements = 'Deleted!'
  discardPrevIndexes.forEach((elemIndex) => {
    transformedArr[elemIndex] = 'Deleted!';
    transformedArr[elemIndex - 1] = 'Deleted!';
  });
  // ! delete all 'Deleted!' elements from final array
  return transformedArr.filter(elem => elem !== 'Deleted!');
};
