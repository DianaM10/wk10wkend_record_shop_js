var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

describe("RecordStore", function() {

  var store1;
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function() {
    store1 = new RecordStore("Spin City", "Edinburgh");
    record1 = new Record( "Mr Scruff", "Spandex Man", 5);
    record2 = new Record( "Toots and the Maytals", "Monkey Man", 10);
    record3 = new Record( "Toots and the Maytals", "Monkey Man", 10);
  });

  it("should have name", function() {
    assert.equal("Spin City", store1.name);
  });

  it("should have city", function() {
    assert.equal("Edinburgh", store1.city);
  });

  it("should start with empty inventory", function() {
    assert.equal(0, store1.inventory.length);
  });

  it("should start with zero cash in bank", function() {
    assert.equal(0, store1.cashInBank);
  });


});














