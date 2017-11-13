console.log("person.js is running");

const isAdult = (age) => {
  if (age >= 18){
    return age + " years old makes you an adult"
  } else {
    return age + " makes you not an adult"
  }
}

const canDrink = (age) => {
  if (age >= 21){
    return "You are able to drink at " + age;
  } else {
    return "You are not able to drink at " + age;
  }
}

const isSenior = (age) => {
  if (age >= 65){
    return "You are a senior at " + age;
  } else {
    return "You are not a senior at " + age;
  }
}

export default isSenior;
export { isAdult, canDrink };