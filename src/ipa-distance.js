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
   * @param {IpaPhoneme[]}
   * @returns {Number} 
   */
  computeDistance(ipa1, ipa2) {
    let featureSets1 = this._ipaToFeaturesSet(ipa1);
    let featureSets2 = this._ipaToFeaturesSet(ipa2);
    return this.computer.distance(featureSets1, this.featureSets2);
  }

  /**
   * @param {String} ipa
   * @returns {FeatureSet[]}
   */
  _ipaToFeaturesSet(ipa) {
    let phonemes = this.parser.parse(ipa);
    return phonemes.map(p => this.mapper.phonemeToFeatureSet(p));
  }
}