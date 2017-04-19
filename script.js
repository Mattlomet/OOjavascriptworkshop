// 3//
function Person (year, cellphone){
	this.year = year;
	this.cellphone = cellphone;
}

function Teacher (){
	this.teacher=true;
	this.changeGrade=changeGrade;
	this.giveDentention=giveDentention;
	this.sendtoPrincipal=sendtoPrincipal;
	this.appleStatus=[];
	Person.apply(this,arguments);
}

function Student (){
	this.student=true;
	this.gotoClass=gotoClass;
	this.giveApple=giveApple;
	this.doHomework=doHomework;
	this.finalgrade=[];
	this.dententionslip= [];
	this.principaloffice= [];
	this.homeworkStatus=[];
	this.classStatus=[];
	Person.apply(this,arguments);
}

var mrjohn	= new Teacher (11, "Iphone");
var mrsteve	= new Teacher (10, "Samsung");
var mrsjones = new Teacher (9, "Iphone");
var kyle = new Student (11, "Samsung");
var mike = new Student (10, "Iphone");
var monica = new Student (9, "Samsung");

function School (grades,detention,principal,homework,attend,apple){
	this.grades  = grades ;
	this.detention  = detention ;
	this.principal  = principal ;
	this.homework  =  homework;
	this.attend  =  attend;
	this.apple  =  apple;
}

function changeGrade (student,grade){
	student.finalgrade.push(grade);
}

function giveDentention (student,slip){
	student.dententionslip.push(slip);
}
function sendtoPrincipal (student, status){
	student.principaloffice.push(status);
}

function doHomework(student, status) {
	student.homeworkStatus.push(status);
}

function gotoClass (student, inclass){
	student.classStatus.push(inclass);
}

function giveApple (teacher, gift){
 	teacher.appleStatus.push(gift);
}

// 1//
function Multiplier() {
    var lastValue = null;
    this.getCurrentValue = function() {
        return lastValue;
    };

    this.multiply = function() {
        var a = prompt("Input your desired number");
        var c = prompt("input your desired number");
        var b = a * c;
        
        lastValue = b;
        return alert(b);
    }
}

var myMultiplier = new Multiplier;

