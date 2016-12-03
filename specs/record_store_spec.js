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
    record3 = new Record( "Beck", "E-Pro", 10);
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

  it("should be able to add records to inventory", function() {
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    assert.equal(3, store1.inventory.length);
  });

  it("should be able to list the items in the inventory", function() {
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    assert.equal("Spandex Man by Mr Scruff Price: 5" +"\n"+",Monkey Man by Toots and the Maytals Price: 10" +"\n"+ ",E-Pro by Beck Price: 10"+"\n", store1.listInventory());
  });

  it("should be able to find record by title", function() {
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    var found = store1.findRecordByArtistOrTitle("Monkey Man")
    assert.equal("Monkey Man", found[0].title );
  });

  it("should be able to find record by artist", function() {
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    var found = store1.findRecordByArtistOrTitle("Toots and the Maytals")
    assert.equal("Toots and the Maytals", found[0].artist );
  });


});














