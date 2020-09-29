const chainMaker = {
  getLength() {
    return this.links.length;
    // throw 'Not implemented';
    // remove line with error and write your code here
  },
  addLink(value) {
    if (!this.links) this.links = [];
    this.links.push(value);
    return this;
    // throw 'Not implemented';
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.links = [];
      throw new Error('position is not number');
    }
    const index = position - 1;
    if (index < 0 || index >= this.links.length) {
      this.links = [];
      throw new Error('position is not exist');
    }
    this.links.splice(index, 1);
    return this;
    // throw 'Not implemented';
    // remove line with error and write your code here
  },
  reverseChain() {
    this.links.reverse();
    return this;
    // throw 'Not implemented';
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.links.map(link => `( ${link} )`).join('~~');
    this.links = [];
    return result;
    // throw 'Not implemented';
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
