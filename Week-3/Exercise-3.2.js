var foo = {
    name: 'Name:',
    returnName: function (firstName, lastName) {
        return `${this.name} ${firstName} ${lastName}`;
    },
};

var displayFoo = foo.returnName;

//this is not binded to any object
//Object is lost because we are calling the displayFoo with global context and there is no variable name in global context

console.log(displayFoo());

//Bind
//It accepts positional arguments and creates a copy of function for future reference & permanently binds the passed object with it

//Solution with Bind
displayFoo = foo.returnName.bind(foo);
console.log(displayFoo('Salman', 'Zafar'));

//Call
//It accepts positional arguments, doesn't create a new copy of function and uses the original copy with the context which is passed

//Solution with Call
console.log(foo.returnName.call(foo, 'Salman', 'Zafar'));

//Apply
//It accepts an array of arguments instead of separate positional parameters

//Solution with Apply
console.log(foo.returnName.apply(foo, ['Salman', 'Zafar']));
