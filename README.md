# my.class.js

Probably the fastest JS class system out there. 100% no wrappers, same perfs as hand-written pure JS classes.

* [instantiation perfs] (http://jsperf.com/moo-resig-ender-my)
* [inheritance perfs - calling super constructor] (http://jsperf.com/moo-resig-ender-my/2)
* [inheritance perfs - calling super method] (http://jsperf.com/moo-resig-ender-my/3)

See a little [demo] (http://myjs.fr/my-class/example/example.html).  

My.js class system is not only a class implementation, it's mostly a class design.

See [how My.js classes achieve better perfs] (http://jiem.github.io/my-class/).


## Create a class

 Assume that classes are created in the namespace `myLib`.

    (function() {

      var Person = my.Class({

        STATIC: {
          AGE_OF_MAJORITY: 18
        },

        constructor: function(name, age) {
          this.name = name;
          this.age = age;
        },

        sayHello: function() {
          console.log('Hello from ' + this.name + '!');
        },

        drinkAlcohol: function() {
          this.age < Person.AGE_OF_MAJORITY ?
            console.log('Too young! Drink milk instead!') :
            console.log('Whiskey or beer?');
        }

      });

      myLib.Person = Person;

    })();

    var john = new myLib.Person('John', 16);
    john.sayHello(); //log "Hello from John!"
    john.drinkAlcohol(); //log "Too young! Drink milk instead!"


## Extend a class

    (function() {

      //Dreamer extends Person
      var Dreamer = my.Class(Person, {

        constructor: function(name, age, dream) {
          Dreamer.Super.call(this, name, age);
          this.dream = dream;
        },

        sayHello: function() {
          superSayHello.call(this);
          console.log('I dream of ' + this.dream + '!');
        },

        wakeUp: function() {
          console.log('Wake up!');
        }

      });

      var superSayHello = Dreamer.Super.prototype.sayHello;

      myLib.Dreamer = Dreamer;

    })();

    var sylvester = new myLib.Dreamer('Sylvester', 30, 'eating Tweety');
    sylvester.sayHello(); //log "Hello from Sylvester! I dream of eating Tweety!"
    sylvester.wakeUp(); //log "Wake up!"


## Private methods

 See the section "Private fields and methods" of [this post] (http://jiem.github.io/my-class/).


## Add methods to a class

    my.extendClass(myLib.Dreamer, {

      touchTheSky: function() {
        console.log('Touching the sky');
      },

      reachTheStars: function() {
        console.log('She is so pretty!');
      }

    });

## Implement classes

     myLib.ImaginaryTraveler = my.Class({
      travel: function() { console.log('Traveling on a carpet!'); },
      crossOceans: function() { console.log('Saying hi to Moby Dick!'); }
    });

    (function() {

      //Dreamer extends Person implements ImaginaryTraveler
      var Dreamer = my.Class(Person, ImaginaryTraveler, {

        constructor: function(name, age, dream) {
          Dreamer.Super.call(this, name, age);
          this.dream = dream;
        },

        ...

      });

      myLib.Dreamer = Dreamer;

    })();

    var aladdin = new Dreamer('Aladdin');
    aladdin instanceof Person; //true
    aladdin instanceof ImaginaryTraveler; //false
    aladdin.travel();
    aladdin.wakeUp();
    aladdin.sayHello();

## Afraid to forget the `new` operator?

    var Person = my.Class({

      //you can now call the constructor with or without new
      constructor: function(name, city) {
        if (!(this instanceof Person))
          return new Person(name, city);
        this.name = name;
        this.city = citye;
      }

    });
