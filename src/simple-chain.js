const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  oldChain: [], // !may be unnessesary
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    this.oldChain = this.chain;
    this.chain = [];
    return this.oldChain.join('~~');
  }
};

module.exports = chainMaker;
