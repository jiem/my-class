(function() {
  MyPerson = my.Class({
    constructor: function(name) {
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
})();

(function() {
  var MyFrenchGuy = window.MyFrenchGuy = my.Class(MyPerson, {
    constructor: function(name) {
      MyFrenchGuy.Super.call(this, name);
    },
    setAddress: function(city, street) {
      _superSetAddress.call(this, 'France', city, street);
    }
  });
  var _superSetAddress = MyFrenchGuy.Super.prototype.setAddress;
})();

(function() {
  var MyParisLover = window.MyParisLover = my.Class(MyFrenchGuy, {
    constructor: function(name) {
      MyParisLover.Super.call(this, name);
    },
    setAddress: function(street) {
      _superSetAddress.call(this, 'Paris', street);
    }
  });
  var _superSetAddress = MyParisLover.Super.prototype.setAddress;
})();
