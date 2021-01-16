// Promises:

// const promise = new Promise();
const promise = new Promise((resolve, reject) => {
  // reject() // PrmoiseStatus = 'Rejected';
  // resolved() // PrmoiseStatus = 'Resolved';
})

promise
  .then(() => console.log('Finally finished...'))
  .then(() => console.log('I was also ran!'))
  .catch((error) => console.log('There was a problem...', error))

// =======

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000)
})

promise
  .then(() => console.log('Finally finished...'))
  .then(() => console.log('I was also ran!'))
  .catch(() => console.log('There was a problem...'))

// FETCH
const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log({error}))
