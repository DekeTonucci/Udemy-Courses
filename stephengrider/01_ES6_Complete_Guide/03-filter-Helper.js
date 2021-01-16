const products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit'},
  { name: 'celery', type: 'vegetable'},
  { name: 'orange', type: 'fruit'},
]

let filteredProducts = [];

// for loop example

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
      filteredProducts.push(products[i]);
    }
}

// .filter Example
products.filter((product)=> {
  return product.type === 'fruit';
})

// Example 2
const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
]

// Type is 'vegtable, quanatity > 0, price is < 10
products.filter((product) => {
  return product.type === 'vegetable'
  && product.quantity > 0
  && product.price < 10
})

// Example 3
const post = { id: 4, title: 'New Post'}
const comments = [
  { postId: 4, content: 'Awesome post' },
  { postId: 3, content: 'It was okay' },
  { postId: 4, content: 'Neat!' },
];

function commentsForPost(post, comments) {
  return comments.filter((comment) => {
    return comment.postId == post.id
  })
}

commentsForPost(post, comments);


/* Coding Exercise 1 */
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;
/* Soultion */
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((number) => {
    return number > 50;
});

/* Coding Exercise 2 */
var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];
 
 var filteredUsers;
/* Soultion */
var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];
 
 var filteredUsers = users.filter((user) => {
     return user.admin === true;
 })

/* Coding Exercise 3 */
function reject(array, iteratorFunction) {
  
}
/* Soultion */
var numbers = [10, 20, 30]

function reject(array, iteratorFunction) {
  return array.filter((e) => {
    return !iteratorFunction(e)
  })
}

var lessThanFifteen = reject(numbers, (number) => {
  return number > 15
})
