import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC8sIS33Cgkr0AqPaIV9kqv_30UFY-SJnY",
  authDomain: "expensify-b7f16.firebaseapp.com",
  databaseURL: "https://expensify-b7f16.firebaseio.com",
  projectId: "expensify-b7f16",
  storageBucket: "expensify-b7f16.appspot.com",
  messagingSenderId: "836749289351"
};

firebase.initializeApp(config);

const database = firebase.database();

//child removed from array
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});


//read database array
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses)
// })

// database.ref('expenses').once('value').then((snapshot) => {
//   // console.log(snapshot.val());
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'rent',
//   note: 'monthyly',
//   amount: 1000,
//   createdAt: 2000
// });

// database.ref('expenses').push({
//   description: 'water',
//   note: 'monthyly',
//   amount: 100,
//   createdAt: 4000
// });

// database.ref('expenses').push({
//   description: 'food',
//   note: 'monthyly',
//   amount: 500,
//   createdAt: 6000
// });

// database.ref('notes/-Kz0DZvJyKmgDZthFEf_').update({
//   body: 'Buy Food'
// });

// database.ref('notes/-Kz0DZvJyKmgDZthFEf_').remove()

//insert array of hashes
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Angular, Vue'
// })

//whats really happening with arrays in firebase
// const firebaseNotes = {
//   notes: {
//     asdfasf: {
//       title: 'First Note',
//       note: 'This is a note'
//     },
//     asdfsaf: {
//       title: 'Second Note',
//       note: 'This is another note'
//     }
//   }
// }

//doesnt work
// const notes = [{
//   id: '12',
//   title: 'First Note',
//   note: 'This is a note'
// }, {
//   id: '13',
//   title: 'Second Note',
//   note: 'This is another note'
// }];

// database.ref('notes').set(notes);


//exercise
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })
//fetching data multiple times

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log("Error with data fetching: ", e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange); //unsubscribes to changes, but still persists in db not in browser
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500)


//fetching data a single time with once
// database.ref().once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log("Error fetching data: ", e);
// })

//remove data from database
// database.ref('isSingle').remove().then(() => {
//   console.log('Remove succeeded');
// }).catch((error) => {
//   console.log('Remove failed', error);
// })


//add to database
// database.ref().set({
//   name: 'Your Name',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: "Software developer",
//     company: "Google"
//   },
//   isSingle: false,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed. ', e);
// });

// forward / for nested objects, update updates at root level only
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

//Equivalent to calling remove
// database.ref('isSingle').set(null);

// database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//   height: "70",
//   weight: "165"
// }).then(() => {
//   console.log('hw saved');
// }).catch((error) => {
//   console.log('hw not saved ', error);
// });