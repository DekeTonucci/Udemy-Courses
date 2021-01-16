var colors = ['red', 'blue', 'green' ];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach( color => {
  console.log(color);
})

/* Example: Add numbers in array */
// Create array of numbers
const numbers = [ 1, 2, 3, 4, 5 ];

// Create a variable to hold sum
let sum = 0;

// Loop over array, incrementing the sum variable
numbers.forEach( number => {
  sum =+ number;
})

// Print Sum
sum;


/* Coding Exercise 1 */
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}

/* Soultion */
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  posts.forEach( post => {
      savePost(post);
  })
}

/* Coding Exercise 2 */
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

/* Soultion */
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach( ({height, width})  => {
    areas.push(height * width)
})