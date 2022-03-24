const me = {
  name: {
    first: "Diarmuid",
    last: "O'Connor",
  },
  gender: "m",
};

const her = {
  name: {
    first: "Sheila",
    middle: "Yvonne",
    last: "Fleming",
  },
  gender: "f",
};

const here = {
  name: "Waterford",
  location: {
    long: -7.11194,
    lat: 52.25833,
  },
};

// ==================================

console.log("---- Function declarations --------");

function isPerson(person) {
  return "name" in person && "gender" in person;
}

console.log(isPerson(me));
console.log(isPerson(here));

//=========================

console.log("---- Function expressions ----------");
const addMiddleName = function (person, middleName) {
  if (!isPerson(person)) {
    throw new Error("Not a person");
  }
  if (person.name.middle === undefined) {
    person.name.middle = middleName;
  } else {
    person.name.middle += " " + middleName;
  }
  return true;
};
try {
  addMiddleName(me, "Stephen");
  addMiddleName(her, "Jane");
  console.log(me.name);
  console.log(her.name);
  // addMiddleName(here)
} catch (error) {
  throw error;
}

// ==================================

console.log("----- Arrow Function  --------");

const salute = (person) => {
  if (!isPerson(person)) {
    throw new Error("Not a person");
  }
  // Ternary operator - ?:
  const title = person.gender === "m" ? "Mr" : "Ms";
  return `Hello ${title} ${person.name.first} ${person.name.last} `;
};

console.log(salute(me));

console.log("---- Shorthand Arrow Function  -------");

// Drop parentheses when only one parameter
const hasMiddleName = person =>
  isPerson(person) && "middle" in person.name;

console.log(hasMiddleName(her));
console.log(hasMiddleName(here));

// ==================================

console.log("----- Anonymous Function  --------");

const numbers = [2,3,4,6,8,10]

numbers.forEach( 
   (n, index, array) => {    // Anonymous function
         console.log(`${n} at index ${index} of ${array}` )
   }
)

let evens = 0
numbers.forEach( 
  (n) =>  evens += (n % 2 == 0) ? 1 : 0 
)
console.log(`\nNo. of evens = ${evens}`);
