// Enhanced Object Literals

// ES5
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      // Find book in inventory and display price
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  {title: 'Harry Potter', price: 10 },
  {title: 'Eloquent JavaScript', price: 15 },
]

const bookShop = createBookShop(inventory)

bookShop.inventoryValue(); // 25
bookShop.priceForTitle('Harry Potter') // 10

// ES6
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      // Find book in inventory and display price
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  {title: 'Harry Potter', price: 10 },
  {title: 'Eloquent JavaScript', price: 15 },
]

// Another example
function saveFile(url, data) {
  $.ajax({ method: 'POST', url: url, data: data });
}

// ES6 (condensed)
function saveFile(url, data) {
  $.ajax({ url, data, method: 'POST' });
}

const url = 'http://fileupload.com';
const data = { color: 'red '};
saveFile(url, data);



/* Coding Exercise 1 */
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };

/* Soultion */
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };



/* Coding Exercise 2 */
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields: fields };

/* Soultion */
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };



/* Coding Exercise 3 */
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}

/* Soultion */
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { width, height };
}



/* Coding Exercise 4 */
const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

/* Soultion */
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};