//Object Destructuring

const person = {
  name: 'Your Name',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location
// if (person.location.temp && person.location.city) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}`)
// }
if (temperature && city) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// console.log(`You are in ${address[1]} ${address[2]}`);

const [street, arrayCity, state = 'New York', zip] = address;
// const [, arrayCity, state, ] = address; //comma skips items in the array you dont want to use

console.log(`You are in ${arrayCity} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee,,medium] = item;

console.log(`A medium ${coffee} costs ${medium}.`);