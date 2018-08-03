module.exports = class IpaTargetDistance {

  /**
   * @param {FeatureMapper} mapper 
   * @param {DistanceComputer} computer
   * @param {IpaParser} parser
   * @param {IpaPhoneme[]} targetPhonemes 
   */
  constructor(mapper, computer, parser, targetIpa) {
    this.mapper = mapper;
    this.computer = computer;
    this.parser = parser;

    this.targetFeatureSets = this._ipaToFeaturesSet(targetIpa);
  }

  /**
   * @param {IpaPhoneme[]}
   * @returns {Number} 
   */
  computeDistance(challengerIpa) {
    let challengerFeatureSets = this._ipaToFeaturesSet(challengerIpa);
    return this.computer.distance(challengerFeatureSets, this.targetFeatureSets);
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