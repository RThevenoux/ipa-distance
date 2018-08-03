var assert = require('assert');
var MapperFactory = require('../src/mapper-factory');
var FeatureSetComparatorFactory = require('../src/feature-set-comparator-factory');
var IpaDistanceFactory = require('../src/ipa-distance-factory');

describe("Factory", () => {
    describe("MapperFactory", () => {
        var factory = new MapperFactory();
        it("should create a mapper", () => {
            let mapper = factory.create();
            assert.equal(mapper ? true : false, true);
        });

        it("should be singleton", () => {
            let mapper1 = factory.create();
            let mapper2 = factory.create();
            assert.equal(mapper1 == mapper2, true);
        });
    });

    describe("FeatureSetComparatorFactory", () => {
        var factory = new FeatureSetComparatorFactory();

        it("should create a comparator", () => {
            let comparator = factory.create();
            assert.equal(comparator ? true : false, true);
        });

        it("should be singleton", () => {
            let mapper1 = factory.create();
            let mapper2 = factory.create();
            assert.equal(mapper1 == mapper2, true);
        });
    });

    describe("IpaDistanceFactory", ()=>{
        var factory = new IpaDistanceFactory();

        it("should create a distance", () => {
            let distance = factory.create();
            assert.equal(distance ? true : false, true);
        });

        it("should be singleton", () => {
            let distance1 = factory.create();
            let distance2 = factory.create();
            assert.equal(distance1 == distance2, true);
        });
    })
});