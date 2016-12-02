var Record = require('../record');
var assert = require("assert");

describe("Record", function() {

var record1;

  beforeEach(function() {
    record1 = new Record( "Mr Scruff", "Spandex Man", 5);
    });

  it("should have artist", function() {
    assert.equal("Mr Scruff", record1.artist);
  });

  it("should have title", function() {
    assert.equal("Spandex Man", record1.title);
  });

  it("should have price", function() {
    assert.equal(5, record1.price);
  });
  

});