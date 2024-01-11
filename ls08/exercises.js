// exercise Level 2 - 1
/*
1. Write a function called joinArrays.
Given 2 arrays, joinArrays returns an array with the elements of arr1,
followed by the elements of arr2 in order.
var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
*/

function demo() {
    function add(x, y) {
        return x + y;
    }

    var myx = 1;

    var sum = add(1, 2);

    console.log(sum);
}

function exercise1() {
    var output = joinArrays([1, 2], [3, 4]);
    console.log(output); // --> [1, 2, 3, 4]


    function joinArrays(arr1, arr2) {
        for (var i = 0; i < arr2.length; i++) {
            var current = arr2[i];
            arr1.push(current);
        }
        return arr1;
    }
}

function demo2() {

    console.log(typeof "abc");
    var a = "abc";
    console.log(typeof a);
}

function demo3() {
    var x = Number("1");
    console.log(x);

    var myStr = "2";
    var y = Number(myStr);
    console.log(myStr, y);
    console.log(typeof myStr, typeof y);

}

function exercise1extended() {
    var output = joinArrays(["1", 2], [3, "4"]);
    console.log(output); // --> [1, 2, 3, 4]


    function joinArrays(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            var current = arr1[i];
            if (typeof current == 'string') {
                arr1[i] = Number(current);
            }
        }

        for (var i = 0; i < arr2.length; i++) {
            var current = arr2[i];
            if (typeof current == 'string') {
                current = Number(current);
            }
            arr1.push(current);
        }
        return arr1;
    }
}


function exercise7() {
    /*
        Write a function called getAllElementsButLast.
        Given an array, getAllElementsButLast returns an array with all the
        elements but the last.
        var input = [1, 2, 3, 4];
        var output = getAllElementsButLast(input);
        console.log(output); // --> [1, 2 , 3]
    */
    var input = [1, 2, 3, 4];
    var output = getAllElementsButLast(input);
    console.log(output); // --> [1, 2 , 3]

    function getAllElementsButLast(arr) {
        var returnArray = [];

        for (var i = 0; i < arr.length - 1; i++) {
            returnArray.push(arr[i]);
        }
        return returnArray;
    }
}

function exercise7option2() {
    /*
        Write a function called getAllElementsButLast.
        Given an array, getAllElementsButLast returns an array with all the
        elements but the last.
        var input = [1, 2, 3, 4];
        var output = getAllElementsButLast(input);
        console.log(output); // --> [1, 2 , 3]
    */
    var input = [1, 2, 3, 4];
    var output = getAllElementsButLast(input);
    console.log(output); // --> [1, 2 , 3]

    function getAllElementsButLast(arr) {
        arr.pop();
        return arr;
    }
}

/*
    array(
        1,
        2,
        3,
        4
    )
    
    push -> 5
    array(
        1,
        2,
        3,
        4,
        5
    )

    pop ->
    array(
        1,
        2,
        3,
        4
    )
    LIFO - Last in First out
    

*/


function exercise6() {
    /*
        Write a function called getAllElementsButFirst.
        Given an array, getAllElementsButFirst returns an array with all the
        elements but not the first.
        var input = [1, 2, 3, 4];
        var output = getAllElementsButFirst(input);
        console.log(output); // --> [2, 3, 4]
    */
    var input = [1, 2, 3, 4];
    var output = getAllElementsButFirst(input);
    console.log(output); // --> [2, 3, 4]

    function getAllElementsButFirst(arr) {
        var returnArray = [];

        for (var i = 1; i < arr.length; i++) {
            returnArray.push(arr[i]);
        }
        return returnArray;
    }
}
exercise6();