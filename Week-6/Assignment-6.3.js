//todo: Sort array of 0's,1's and 2's

//* Pseudocode
/*
 -Keep three counters c0 to count 0s, c1 to count 1s and c2 to count 2s.
 -Traverse through the array and increase the count of c0 if the element is 0, 
 -Increase the count of c1 if the element is 1 and increase the count of c2 if the element is 2.
 -Now again traverse the array and replace the first c0 elements with 0, next c1 elements with 1 and next c2 elements with 2.
 -Return the array.
*/

const sortArr = (arr) => {
    // step 1
    let c0 = 0,
        c1 = 0,
        c2 = 0,
        i;

    // step2
    for (i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 0:
                c0++;
                break;
            case 1:
                c1++;
                break;
            case 2:
                c2++;
                break;
        }
    }

    // step 3
    i = 0;
    while (c0 > 0) {
        arr[i++] = 0;
        c0--;
    }

    while (c1 > 0) {
        arr[i++] = 1;
        c1--;
    }

    while (c2 > 0) {
        arr[i++] = 2;
        c2--;
    }

    return arr;
};
