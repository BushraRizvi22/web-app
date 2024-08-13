document.write("<h1> Rules for naming JS variables </h1>");
// Five legal varibales
var underScore = "__";
var Numbers = "Numbers";
var Dollar = "$";
var Example = "$my_1stVariable";

// Five illegal varibales
// var #add = "My Adress";
// var 3times = "*3";
// var my name = "Bushra Rizvi";
// var @course =  "Smit";
// var *one = "star one";

document.write(
  "</br>" +
    "</br>" +
    "</br>" +
    "Variable names can only contain," +
    " " +
    Numbers +
    "," +
    " " +
    Dollar +
    " " +
    "and" +
    " " +
    underScore +
    " " +
    "For Example" +
    " " +
    "." +
    Example
);

var letr = "letter";
var nam = "name";
var dname = "$name";
var uname = "_name";

document.write(
  "</br>" +
    "Variables must begin with a" +
    " " +
    letr +
    " " +
    Dollar +
    " " +
    " " +
    "or" +
    " " +
    underScore +
    "." +
    " " +
    "For example" +
    ":" +
    " " +
    dname +
    " " +
    uname +
    " " +
    "and" +
    " " +
    nam
);

var sens = "sensitive";
document.write("</br>" + "Variable names are case" + " " + sens + ".");
var key = "keywords";
document.write(
  "</br>" + "Variable names are case should not be JS" + " " + key + "."
);
