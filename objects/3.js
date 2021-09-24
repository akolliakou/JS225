// In JavaScript, comparing two objects either with == or === checks for object identity. 
// In other words, the comparison evaluates as true if it's the same object on either side of == or 
// ===. This is a limitation, in a sense, because sometimes we need to check if 
// two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns true or false 
// depending on whether the objects have the same key/value pairs.

function objectsEqual(obj1, obj2) {
  for (let prop1 in obj1) {
    for (let prop2 in obj2) {
      if (prop1 !== prop2 || obj1[prop1] !== obj2[prop2]) {
        return false;
      }
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

