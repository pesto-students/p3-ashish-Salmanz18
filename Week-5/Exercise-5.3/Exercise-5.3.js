//todo: Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
    let set = new Set(arr);
    return Array.from(set).length !== arr.length;
}

console.log(hasDuplicate([1, 5, -1, 4])); //returns false as array doesn't contain dublicate values
console.log(hasDuplicate([1, 7, 7, 5])); //returns true as array contains dublicate values
