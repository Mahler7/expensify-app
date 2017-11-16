const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Your Name',
    //   age: 26
    // });
    reject('Something went wrong');
  }, 5000)
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

//promise chain for testing
promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my new promise');
    }, 5000)
  });
}).then((str) => {
  console.log('does this run', str);
}).catch((error) => {
  console.log('error: ', error);
});

// alt syntax without catch and then taking two arguments instead

// promise.then((data) => {
//   console.log('1', data);
// }, (error) => {
//   console.log('error: ', error);
// });





console.log('after');

//import this in app.js to run
