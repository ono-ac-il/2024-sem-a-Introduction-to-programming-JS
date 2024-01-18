var students = [];

function add() {
    var studentName = document.getElementById("input1").value;
    students.push({
        name: studentName,
        age: 20
    });
    renderList();
}

function renderList() {


    var html = "";
    for (var i = 0; i < students.length; i++) {
        html += "<li>" + students[i].name + ", " + students[i].age + "</li>";
    }

    document.getElementById('lst').innerHTML = html;

}