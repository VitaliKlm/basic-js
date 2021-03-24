const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  
  const array = members.map(member => {
    if (typeof(member) === 'string') {
      return member.trim().split('')[0].toUpperCase();
    }
    else return '';
  });
  return array.sort().join('');
};
