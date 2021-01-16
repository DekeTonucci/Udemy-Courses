// Default function arguments
// ES5 Way
function makeAjaxRequest(url, method) {
  if(!method) { method = 'GET' };

  // Logic to make request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');

// ES6 Way 
function makeAjaxRequest(url, method = 'GET') {
  return method;
  // Logic to make request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');

// ===========
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

createAdminUser(new User(generateId()));



/* Coding Exercise 1 */
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}

/* Soultion */
function sum(a = 0, b = 0) {
  return a + b;
}


/* Coding Exercise 2 */
function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}

/* Soultion */
function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}