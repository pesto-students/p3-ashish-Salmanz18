//todo: Write a function called vowelCount which accepts a string and returns a map where the keys are numbers
//todo: and the values are the count of the vowels in the string.

const isVowel = (char) => 'aeiou'.includes(char.toLowerCase());

const vowelCount = (str) => {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar))
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            else vowelMap.set(lowerCaseChar, 1);
        }
    }
    return vowelMap;
};

const vc = vowelCount('Salman Counts Vowel');
for (let el of vc) console.log(el);
