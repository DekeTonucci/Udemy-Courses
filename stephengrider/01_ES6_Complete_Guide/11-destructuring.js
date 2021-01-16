// Destructuring
const expense = {
  type: 'Business',
  amount: '$45 USD'
}

const type = expense.type;
const amount = expense.amount;

// ES 6

// const { type } = expense;
// const { amount } = expense;

const { type, amount } = expense;


// ========

const savedFile = {
  extension: '.jpg',
  name: 'repost',
  size: 14040
}

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}.`
}


function fileSummary({name, extension, size}, { color }) {
  return `The file ${name}.${extension} is of size ${size}.`
}
fileSummary(savedFile, { color: 'red' })

// Destructoring arrays
const companies = [
  'Google', 'Facebook', 'Uber'
]

const firstCompany = companies[0] // ES5
const [ name ] = companies //ES6

const [ name, name2, ...rest ] = companies;

// ===========

const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' },
]

// ES5 
var loaction = companies[0].location;

// ES6
const [ { location } ] = companies // 'Mountain View'

const Google = {
  locations: [ 'Mountain View', 'New York', 'London' ]
}

const { locations: [ location ] }= Google;


// ================

function signup({username, password, email, dob, city}) {
  // create new user
}

signup('myname', 'password', 'myemail@example.com', '1/1/21', 'hometown')

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dob: '1/1/1990',
  city: 'mycity'
}

signup(user)


// ==========
// Destructor arrays, why?

// From API:
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
]

// library wanted to see an array of objects:
/*
    [
      {x: 4, y: 5},
      {x: 10, y: 1},
      {x: 0, y: 40},
    ]
*/

// Change structure of object
// map over array and destructor 'x' and 'y' values
/*
    points.map(pair => {
      // const x = pair[0]
      // const y = pair[1]
      const [ x, y ] = pair
    })
*/

points.map(([ x , y ]) => {
  // return { x: x , y: y }
  return { x , y }
})

/* Coding Exercise 1 */
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

/* Soultion */
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}


/* Coding Exercise 2 */
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject;

/* Soultion */
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([ subject, time, teacher ]) => {
    return { subject, time, teacher }
});



/* Coding Exercise 3 */
const numbers = [1, 2, 3];

function double() {
    
}

/* Soultion */
const numbers = [1, 2, 3];
 
function double(numbers, doubled = []) {
    const [number, ...rest] = numbers;
    if (number) {
      doubled.push(number * 2);
      double(rest, doubled);
    } 
    return doubled;
}