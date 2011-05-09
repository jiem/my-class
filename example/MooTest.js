window.MooPerson = new Class({
  initialize: function(name) {
    this.name = name;
  },
  setAddress: function(country, city, street) {
    this.country = country;
    this.city = city;
    this.street = street;
  },
  sayHello: function() {
    console.log('I am ' + this.name + '. My address is ' +
        this.country + ', ' + this.city + ', ' + this.street + '.');
  }
});

window.MooFrenchGuy = new Class({
  Extends: MooPerson,
  initialize: function(name) {
    this.parent(name);
  },
  setAddress: function(city, street) {
    this.parent('France', city, street);
  }
});

window.MooParisLover = new Class({
  Extends: MooFrenchGuy,
  initialize: function(name) {
    this.parent(name);
  },
  setAddress: function(street) {
    this.parent('Paris', street);
  }
});
