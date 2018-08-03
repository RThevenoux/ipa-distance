module.exports = class IpaDistance {

  /**
   * @param {FeatureMapper} mapper 
   * @param {DistanceComputer} computer
   * @param {IpaParser} parser
   */
  constructor(mapper, computer, parser) {
    this.mapper = mapper;
    this.parser = parser;

    this.computer = computer;
  }

  /**
   * @param {String} ipa1
   * @param {String} ipa2
   * @returns {Number} 
   */
  compute(ipa1, ipa2) {
    let featureSets1 = this.mapper.ipaToFeatureSets(ipa1);
    let featureSets2 = this.mapper.ipaToFeatureSets(ipa2);
    return this.computer.compute(featureSets1, featureSets2);
  }
}