

for (var i = 0; i <= 10; i++) {
    var row = "";
    for (var j = 0; j <= 10; j++) {
        row = row + " " + String(i * j)
    }
    console.log(row);
}