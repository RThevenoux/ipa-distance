var fs = require('fs');
var FeatureSetComparator = require("./feature-set-comparator");

module.exports = class FeatureSetComparatorFactory {
  constructor() {
    this.singleton = null;
  };

  create() {
    if (!this.singleton) {
      let descriptors = JSON.parse(fs.readFileSync(__dirname + "/data/feature-weight.json"));
      this.singleton = new FeatureSetComparator(descriptors);
    }
    return this.singleton;
  }
}