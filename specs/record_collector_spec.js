var RecordCollector = require('../recordCollector');
var Record = require("../record");
var RecordStore = require('../record_store');
var assert = require('assert');

describe("RecordCollector", function() {

  var collector1;
  var store1;
  var record1;
  var record2;
  var record3;
  var record4;
  var record5;
  var record6;


  beforeEach(function() {
    collector1 = new RecordCollector("Super Hans");
    store1 = new RecordStore("Spin City", "Edinburgh");
    record1 = new Record( "Mr Scruff", "Spandex Man", 5);
    record2 = new Record( "Toots and the Maytals", "Monkey Man", 10);
    record3 = new Record( "Beck", "E-Pro", 10);
    record4 = new Record( "Fun Lovin Criminals", "Scooby Snacks" , 8 );
    record5 = new Record( "Gomez", "Whipping Picadilly" , 12);
    record6 = new Record( "Nirvana", "Jesus Dont Want Me For a Sunbeam", 15);
  });

  it("Should have a name", function() {
    assert.equal("Super Hans", collector1.name);
  });

  it("should start with an empty record collection", function() {
    assert.equal(0, collector1.collection.length);
  });

  it("Should start with zero funds", function() {
    assert.equal(0, collector1.funds);
  });

  it("Should able add records to collection", function() {
    collector1.addRecord(record4);
    collector1.addRecord(record5);
    collector1.addRecord(record6);
    assert.equal(3, collector1.collection.length);
  });


});