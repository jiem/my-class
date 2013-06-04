EnderPerson = klass(function(name) {
  this.name = name;
})
.methods({
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

EnderFrenchGuy = EnderPerson.extend(function(name) {
})
.methods({
  setAddress: function(city, street) {
    this.supr('France', city, street);
  }
});


EnderParisLover = EnderFrenchGuy.extend(function(name) {
})
.methods({
  setAddress: function(street) {
    this.supr('Paris', street);
  }
});
