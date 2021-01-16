const users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' },
]

var user; 

for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
  }
}

// .find Helper
users.find((user) => {
  return user === 'Alex';
})

// .find helper example 2
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus'),
]

cars.find((car) => {
  return car.model === 'Focus';
})

// .find helper example 3
var posts = [
  { id: '1', title: 'New Post' },
  { id: '2', title: 'Old Post' },
]

var comment = { postId: 1, content: 'Great Post!' }

function postForComment(posts, comment) {
  return posts.find((post) => {
    return post.id === comment.postId;
  })
}

postForComment(posts, comment);

 /* Coding Exercise 1 */
 var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;
/* Soultion */
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find((user) => {
  return user.admin === true
})

 /* Coding Exercise 2 */
 var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;
/* Soultion */
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];
var account = accounts.find((account) => {
  return account.balance === 12
})

 /* Coding Exercise 3 */
 function findWhere(array, criteria) {
  
}

/* Soultion */
function findWhere(array, criteria) {
  
  return array.find( (el) => {
    let searchedProp = Object.keys(criteria)[0];
    return el[searchedProp] === criteria[searchedProp];
  });
  
}
