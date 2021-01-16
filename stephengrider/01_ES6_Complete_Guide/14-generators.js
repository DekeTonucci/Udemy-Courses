// Generators

// For Of Loops:
// used to iterate over arrays
// for each, reduce, map

const colors = [ 'red', 'green', 'blue' ];

for ( let color of colors ) {
  console.log(color)
}

// ========

const numbers = [ 1, 2, 3, 4 ];
let total = 0;

for ( let number of numbers ) {
  total += number;
}

// ========
// What is a generator?
// - Is a function that can be entered and exited multiple times.
    // - function* name() {} = a generator function
    // - function *name() {} = a generator function
    // - If there is a * this function is a generator, can be seen both ways shown above

// Purpose of generators
// 

// Iteration with generators

// Generator Delegation

// Generators with Symbol.iterator


function* numbers() {
 yeild;
}

const gen = numbers();
gen.next(); // false
gen.next(); // true

// === === === === === === === ===
// Sidewalk Short Story
// === === === === === === === ===

function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield 'cash'; // transition from sidewalk to store

  // to add another 'stop' before returning home, use 'yield'
  const cleanClothes = yield 'clean clothes'; // transition from sidewalk to laundrymat

  // walking back home
  return [ stuffFromStore, cleanClothes ];
}

// stuff in the store
const gen = shopping(); // calling shopping doesnt invoke any code to start
gen.next(); // Leaving our house (starts executing code)
// walked into the store
// walking up & down aisles...
// purchase out items

gen.next('groceries'); // leaving the store with groceries
// transitioning from store back to sidewalk

gen.next('clean clothes'); // leaving the laudrymat with clean clothes
// transitioning from laundrymat back to sidewalk


// === === === === === === ===
// Generators work perfectly with for of loops!
// === === === === === === ===

// using a for of loop, no need to use gen.next();
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
gen.next(); //
gen.next(); //
gen.next(); //
gen.next(); // done: true

const myColors = [];
for ( let color of colors()) {
  myColors.push(color)
}

myColors; // [ 'red', 'blue', 'green' ]

// === === === === === === ===
// Practicle Use of a Generator
// === === === === === === ===

const engineeringTeam = {
  // team of people writing software
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
}

const secondaryEngineeringTeam = {
  // team of people writing software
  size: 3,
  department: 'Engineering',
  lead: 'Brad',
  manager: 'Heinz',
  engineer: 'Deke'
}

// interate over lead, manager, and engineer
// we dont want to iterate over size or department

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
names; // [ 'Jill', 'Alex', 'Dave']

const namesOfSecondTeam = [];
for (let name of TeamIterator(secondaryEngineeringTeam)) {
  names.push(name);
}
namesOfSecondTeam; // [ 'Brad', 'Heinz', 'Deke']

// === === === === === === ===
// Combine Generators
// === === === === === === ===
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
}

const engineeringTeam = {
  // team of people writing software
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam: testingTeam
}


function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  // Call 2nd generator
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  // yield* = this generator has some yeild statements you might care about
  yield* testingTeamGenerator; // gets testing team names
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
names; // [ 'Jill', 'Alex', 'Dave']

// === === === === === === ===
// === === === === === === ===
// === === === === === === ===
// Symbole.iterator
// === === === === === === ===
// === === === === === === ===
// === === === === === === ===

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  // Symbole.iterator = method on testingteam needs to use 'this'
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  // team of people writing software
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam: testingTeam
}


function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* team.testingTeam; // gets testing team names rom the '[Symbol.iterator]' in the testingTeam object
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
names; // [ 'Jill', 'Alex', 'Dave']


// === === === === === === ===
// === === === === === === ===
// === === === === === === ===
// Practicle Example:
// === === === === === === ===
// === === === === === === ===
// === === === === === === ===

// Find all the users posted on a given thread on Reddit or youtube video

// Create a Node Tree of 'Comments'
class Comment {
  constructor( content, children ) {
    this.content = content;
    this.children = children;
  }

  // * = this is a generator
  // Array helpers do not work with Symbol Iterators (.map, .reduce, ect.)
  // can use for of loop
  *[Symbol.iterator]() {
    yield this.content;
    for ( let child of this.children ) {
      yield* child;
    }
  }
}

const children = [
  new Comment('Good comment', []),
  new Comment('Bad comment', []),
  new Comment('Meh', [])
];

const tree = new Comment('Great Post!', children);

// Recurse through the tree.
const values = [];
for( let value of tree) {
  values.push(value)
}

values;