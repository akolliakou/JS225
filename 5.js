// Our earlier implementation of the Function.prototype.bind was simplistic. 
// Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. 
// It's called partial function application. 

// Alter the myBind function written in the previous exercise to support partial function application.

function myBind(func, context, ...firstArgs) {
  return function(...secondArgs) {
    let totalArgs = firstArgs.concat(secondArgs);

    return func(context, totalArgs);
  }
}

