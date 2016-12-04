var RecordCollector = function(name) {
  this.name = name;
  this.collection = [];
  this.funds = 0;
};

RecordCollector.prototype = {
  addRecord: function(record) {
    this.collection.push(record);
  },

  buyRecord: function(recordStore, record) {
    //.find record in record store inventory and then add to this.collection. Remove payment from funds
    var toBuy = recordStore.findRecordByArtistOrTitle(record);
    this.funds -= toBuy[0].price;
    this.addRecord(toBuy);
  },

  findRecordByArtistOrTitle: function(toSell) {
    return this.collection.filter(function(record) {
      if((record.artist === toSell) || (record.title === toSell)) {
        return record;
      }
    })
  },

  sellRecord: function(toSell) {
    //find record in collection and take price and add 30% to sell.  splice  to remove item from collection
    var recordToSell = this.findRecordByArtistOrTitle(toSell);
    console.log(recordToSell);
    var markUp = recordToSell[0].price*1.3;
    this.funds += markUp;
    var index = this.collection.indexOf(recordToSell[0]);
      if (index > -1) {
        this.collection.splice(index, 1);
      }
  }

  

};

module.exports = RecordCollector;