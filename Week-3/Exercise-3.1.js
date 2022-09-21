//Given reducer method:
function add(a, b) {
    return a + b;
}

//Create a method called memoize such that:
const memoize = function (fn) {
    const cache = new Map();
    return function (...args) {
        if (args.length === 1) {
            args.push(0);
        }
        const key = args.toString();
        console.log('functon called with ' + key);
        console.log(cache);
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
};

const memoizeAdd = memoize(add);

//function to check time taken for computation
function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

//then calling...
time(() => memoizeAdd(100, 100)); //returns 200
time(() => memoizeAdd(100)); //returns 200
time(() => memoizeAdd(100, 200)); //returns 300
time(() => memoizeAdd(100, 100)); //returns 200 without computing
