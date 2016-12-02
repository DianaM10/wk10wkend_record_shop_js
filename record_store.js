var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.cashInBank = 0;
};

module.exports = RecordStore;