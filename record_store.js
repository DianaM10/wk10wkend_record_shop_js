var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.cashInBank = 0;
};

RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },
  listInventory: function() {
    var inventory = this.inventory.map(function(record) {
      return record.title +" by " + record.artist + " Price: " + record.price + "\n";
    });
    return inventory.toString();
  },
  findRecordByArtistOrTitle: function(toSell) {
    return this.inventory.filter(function(record){
      if((record.artist === toSell) || (record.title === toSell)) {
        return record;
      }
    })
  },

  };
 

module.exports = RecordStore;