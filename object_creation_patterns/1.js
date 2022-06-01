// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. 
// Here's an example output:

// name property added to make objects easier to identify
// const foo = {name: 'foo'};
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

foo.ancestors = function() {
  let arr = [];
  let ancestor = Object.getPrototypeOf(this)

 while (ancestor.name !== undefined) {
  arr.push(ancestor.name);
  ancestor = Object.getPrototypeOf(ancestor)
 }

  arr.push('Object prototype')
  return arr;
}