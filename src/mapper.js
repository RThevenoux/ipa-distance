var FeatureSet = require("./feature-set");

module.exports = class Mapper {
  constructor(mapping, parser) {
    this.mapping = mapping;
    this.parser = parser;
  }

  /**
   * 
   * @param {String} ipa
   * @returns {FeatureSet[]}
   */
  ipaToFeatureSets(ipa){
    let phonemes = this.parser.parsePhonemes(ipa);
    return phonemes.map(p => this.phonemeToFeatureSet(p));
  }

  /**
   * 
   * @param {IpaPhoneme} phoneme
   * @returns {FeatureSet}
   */
  phonemeToFeatureSet(phoneme) {
    let baseFeatures = this.mapping[phoneme.base];
    if (!baseFeatures) {
      return null;
    }

    let features = new FeatureSet(baseFeatures);

    phoneme.coarticulation.forEach(coarticaltion => {
      switch (coarticaltion) {
        case "Nasalized":
          features.add('nasal', '+');
          break;
        case "Labialized":
          features.add('labial', "+");
          features.add('round', "+");
          break;
      }
    });

    if (phoneme.quantity.isLong()) {
      features.add('long', '+');
    }

    return features;
  }
}