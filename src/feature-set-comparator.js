module.exports = class FeatureSetComparator {
  constructor(descriptors) {
    this.descriptors = descriptors;
  }

  /**
   * 
   * @param {FeatureSet} a 
   * @param {FeatureSet} b
   * @returns {Number} 
   */
  distance(a, b) {
    if (!a || !b) {
      return 1;
    }

    let scoreSum = 0;
    let weightSum = 0;

    this.descriptors.forEach(featureDesc => {
      let name = featureDesc.name;
      let featureDistance = this._oneFeatureDistance(a.get(name), b.get(name), featureDesc);

      scoreSum += featureDistance * featureDesc.weight;
      weightSum += featureDesc.weight;
    });

    return scoreSum / weightSum;
  }

  _oneFeatureDistance(a, b, featureDesc) {
    switch (featureDesc.type) {
      case "number": return this._numberDistance(a, b, featureDesc);
      case "value": return this._valueDistance(a, b, featureDesc);
      default: return 0;
    }
  }

  _numberDistance(a, b, featureDesc) {
    return Math.abs(a - b) / (featureDesc.max - featureDesc.min);
  }

  _valueDistance(a, b, featureDesc) {
    return (a === b ? 0 : 1);
  }
}