module.exports = class IpaTargetDistance {

  /**
   * @param {FeatureMapper} mapper 
   * @param {DistanceComputer} computer
   * @param {IpaPhoneme[]} targetPhonemes 
   */
  constructor(mapper, computer, targetIpa) {
    this.mapper = mapper;
    this.computer = computer;

    this.targetFeatureSets = this.mapper.ipaToFeatureSets(targetIpa);
  }

  /**
   * @param {IpaPhoneme[]}
   * @returns {Number} 
   */
  computeDistance(challengerIpa) {
    let challengerFeatureSets = this.mapper.ipaToFeatureSets(challengerIpa);
    return this.computer.compute(challengerFeatureSets, this.targetFeatureSets);
  }
}