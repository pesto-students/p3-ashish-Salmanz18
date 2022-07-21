function createStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        },
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!

//Refactor the above stack implementation, using the concept of closure,
//such that there is no way to access items array outside of createStack() function scope

function createStack() {
    let items = [];
    return {
        get() {
            return items;
        },
        push(item) {
            items.push(item);
        },
        pop() {
            items.pop();
        },
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items); // => undefined   !!Now items array can't be accessed from outside createStack function scope
console.log(stack.get()); //to access items array from inside the createStack function scope
