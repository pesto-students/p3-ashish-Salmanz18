function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

//  Answer:
// Count is 0 will be logged.

//Execution steps
//1: the createIncrement function is declared
//2: the createIncrement function is called
//3: count is assigned value of 0
//4: the increment function is declared
//5: message variable is declared which stores the value of count which is 0 at that time.
//6: log function is declared
//7: increment function is called 3 times so it will increase the value of count from 0 to 3 (1->2->3)
//8: log function is called which displays the value stored in message variable which is Count is 0.
