const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  oldChain: [],

  getLength() {
    this.oldChain = this.chain;
    this.chain = [];
    return this.oldChain.length + 1;
  },
  addLink(value = '') {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length 
    || Math.floor(position) !== position) {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position - 1, 1);
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
