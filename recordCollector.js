var RecordCollector = function(name) {
  this.name = name;
  this.collection = [];
  this.funds = 0;
};

RecordCollector.prototype = {
  addRecord: function(record) {
    this.collection.push(record);
  },
  buyRecord: function(record) {
    
  }
}

module.exports = RecordCollector;