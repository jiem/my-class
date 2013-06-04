window.JRPerson = JRClass.extend({
  init: function(name){
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

window.JRFrenchGuy = JRPerson.extend({
  init: function(name) {
    this._super(name);
  },
  setAddress: function(city, street) {
    this._super('France', city, street);
  }
});

window.JRParisLover = JRFrenchGuy.extend({
  init: function(name) {
    this._super(name);
  },
  setAddress: function(street) {
    this._super('Paris', street);
  }
});

