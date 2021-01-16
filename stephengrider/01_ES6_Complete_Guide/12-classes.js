// ES5 Classes
function Car(options) {
  this.title = options.title

}

Car.prototype.drive = function() {
  return 'VVRRROOOMMMM!'
}

function  Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver'})

toyota;

// ES6 Classes
class Car {
  /*
  constructor(options) {
    // Initialize / create
    // Ran when we use 'new' Car
    this.title = options.title;
  }
  */
 constructor({ title }) {
  this.title = title;
}

  drive() {
    return 'VVRROOOOMM!'
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); // Car.constructor();
    this.color = options.color;
  }

  honk() {
    return 'beep!'
  }
}

const toyota = new Toyota({ color: 'red' });
toyota.honk(); // 'beep!'
toyota.drive(); // from Car class

/* Coding Exercise 1 */
class Monster {
  
}

/* Soultion */
class Monster {
  constructor({ name }) {
    this.name = name;
    this.health = 100;
  }
}
 
const monster = new Monster({ name: 'Bob' });



/* Coding Exercise 2 */
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake {

}

/* Soultion */
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}


class Snake extends Monster {
    constructor(options) {
        super(options);
    }

    bite(snake) {
        snake.health -= 10;
    }
}
