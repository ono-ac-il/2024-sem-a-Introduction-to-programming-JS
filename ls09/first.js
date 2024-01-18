// key: value
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

function step01() {
    var test1 = Object.create(null); // we dont use this
    var test2 = new Object(); // we dont use this also
    var test3 = {};

    console.log(test1, test2, test3)

    var myObj = {
        prop1: "value1",
        prop2: true,
        prop3: "value3"
    };

    console.log(myObj);

    /*
    var arr = ["a", "b", "c"];
    
    arr = {
        0: "a",
        1: "b",
        2: "c"
    }
    */

    var p1 = {
        name: "name 1",
        age: 23
    }

    var p2 = {
        name: "name 2",
        age: 54
    }

    var persons = [p1, p2];
}

function step02() {
    // accessing values
    console.log(person.firstName); // John

    console.log(person.lastName); // Doe
    console.log(person['lastName']); // Doe

    var myObj = {
        "asfASFQ#$RQ#$FEGQ$%TGQ$#%~~": 1
    }
    // compiler error: console.log(myOb.asfASFQ#$RQ#$FEGQ$ % TGQ$# % ~~);
    console.log(myObj["asfASFQ#$RQ#$FEGQ$%TGQ$#%~~"]);
}

function step03() {
    // Modify an object value
    person.firstName = "Drone";
    // person['lastName']

    console.log(person.firstName); // Drone

    console.log(person.lastName); // Doe
}

// adding key-value to obect
function step04() {
    console.log(person.isWorking)
    person.isWorking = true;
    console.log(person.isWorking)
    console.log(person);

}


function step05() {
    person.isWorking = true;
    console.log(person);
    delete person.isWorking;
    console.log(person);
}


function ATM() {
    var operation = {
        action: null
    }

    var pull = true; // from user
    if (pull == true) {
        operation.action = "pull";
    }
}

step05();