var fs = require('fs');
var IpaParser = require('ipa-parser');
var Mapper = require("./mapper");

module.exports = class MapperFactory {
  constructor() {
    this.singleton = null;
  };

  create() {
    if (!this.singleton) {
      let mappingData = JSON.parse(fs.readFileSync(__dirname + "/data/feature-mapping.json"));
      let parser = new IpaParser().getParser();
      this.singleton = new Mapper(mappingData, parser);
    }
    return this.singleton;
  }
}