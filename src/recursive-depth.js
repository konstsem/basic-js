module.exports = class DepthCalculator {
    calculateDepth(coll, accum = 1) {
      return coll.length === 0 ? accum :
        coll.map(item => !Array.isArray(item) ? accum : this.calculateDepth(item, accum + 1))
        .reduce((acc, it) => Math.max(acc, it), 0);
    }
};
