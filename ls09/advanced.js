var arr = [];

function addItem(item) {
    arr.push(item);
}

function printArr() {
    // Language: LANG that can run on ENV
    for (var i = 0; i < arr.length; i++) {
        console.log("Language: " + arr[i].lang + " that can run on " + arr[i].env);
    }

}

var o1 = {
    lang: "JavaScript",
    env: "Cross platform"
}

addItem(o1);

addItem({
    lang: "c-sharp",
    env: "Cross platform"
});
printArr();