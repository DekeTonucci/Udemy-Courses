const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
]

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++ ) {
  var computer = computers[i]
  if(computers.ram < 16) {
    allComputersCanRunProgram = false
  } else {
    onlySomeComputersCanRunProgram = true
  }
}

computers.every((computer) => {
  return computer.ram > 16
})

computers.som((computer) => {
  return computer.ram > 16
})


var names = [
  "Alexandria",
  "Matthew",
  "Joe"
]

names.every((name) => {
  return name.length > 4 // False
})

names.some((name) => {
  return name.length > 4 // True
})

function Field(value) {
  this.value = value
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var uername = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/20");

username.validate() && password.validate();

var fields = [ username, password, birthdate ]
var formIsValid = fields.every((field) => {
  return field.validate();
})

if (formIsValid) {
  // Allow user to submit
} else {
  // Show an error message
}


/* Coding Exercise 1 */
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;

/* Soultion */
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every((user) => {
    return user.hasSubmitted === true
})


 /* Coding Exercise 2 */
 var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;
/* Soultion */
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some((request) => {
    return request.status === 'pending'
})
