name_student = [];
function submit(){
    var name1 = document.getElementById("input1").value;
    var name2 = document.getElementById("input2").value;
    var name3 = document.getElementById("input3").value;
    var name4 = document.getElementById("input4").value;
    var name5 = document.getElementById("input5").value;
    name_student.push(name1);
    name_student.push(name2);
    name_student.push(name3);
    name_student.push(name4);
    name_student.push(name5);
    console.log(name_student);
    document.getElementById("result").innerHTML = name_student;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){
name_student.sort();
console.log(name_student);
document.getElementById("result").innerHTML = name_student;
}