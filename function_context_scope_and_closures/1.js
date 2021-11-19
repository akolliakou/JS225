// Read the following code carefully. What do you think is logged on line 7. 
// Try to answer the question before you run the code.

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

//logs NaN as (outside a function) `this` refers to the global object