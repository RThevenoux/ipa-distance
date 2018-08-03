var FeatureSetComparatorFactory = require("./feature-set-comparator-factory");
var FeatureSetSequenceDistance = require("./feature-set-sequence-distance");
var MapperFactory = require("./mapper-factory");
var IpaDistance = require('./ipa-distance');
var IpaTargetDistance = require('./ipa-target-distance');

module.exports = class IpaDistanceFactory {
  constructor() {
    this.singleton = null;
  }

  /**
   * @param {String} targetIpa 
   */
  createTarget(targetIpa) {
    let mapper = new MapperFactory().create();
    let comparator = new FeatureSetComparatorFactory().create();
    let computer = new FeatureSetSequenceDistance(comparator);

    return new IpaTargetDistance(mapper, computer, targetIpa);
  }

  create() {
    if (!this.singleton) {
      let mapper = new MapperFactory().create();
      let comparator = new FeatureSetComparatorFactory().create();
      let computer = new FeatureSetSequenceDistance(comparator);

      this.singleton = new IpaDistance(mapper, computer);
    }
    return this.singleton;
  }
}