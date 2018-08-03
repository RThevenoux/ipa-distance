module.exports = class FeatureSet {

  constructor(features) {
    this.values = {};
    // copy each name/value pair
    if (features) {
      for (let f in features) {
        this.values[f] = features[f];
      }
    }
  }

  add(name, value) {
    this.values[name] = value;
  }

  get(name) {
    return this.values[name];
  }
}