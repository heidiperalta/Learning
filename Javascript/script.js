var tempConst = 30;
var scope = "global value!";

var fibStr = "";

function CelsiusToFarenheit(temp){

	if(temp)
		return temp * 2 + tempConst;
	else
		return "no temp for you!";
}
function FarenheitToCelsius(temp){

	if(temp)
		return (temp - tempConst) / 2;
	else
		return "no temp for you!";
}
function ConvertToFarenheit () {

	alert(CelsiusToFarenheit(prompt("Convert celsius to farenheit","")));	
}
function ConvertToCelsius () {

	alert(FarenheitToCelsius(prompt("Convert farenheit to celsius","")));
}


/* Scope & closure */
function TestLocal () {

	var scope = "local value!";
	function localFunc(){return scope;}
	return localFunc;
}
function TestGlobal () {

	function localFunc(){return scope;}
	return localFunc;
}
function GetScope (input) {

	if(input){
		if(input == "local")
			alert(TestLocal()()); //--> double parentheses calls the function that is returned
		if(input == "global")
			alert(TestGlobal()());
	}
}


/* Recursion */
function MultExponentially (num, exp) {

	if(exp === 0)
		return 1;
	return num * MultExponentially(num, exp - 1);
}
function GetExponential () {

	var num = prompt("Give me your number","");
	var exp = prompt("Give me your exponent", "");
	alert(MultExponentially(num, exp));
}
function GetFibonacci (n) {
	
	//set loop-break logic
	if (n >= 100){

		fibStr + " finito!";
		return;
	}
	
	fibStr += " " + n 
	return n + GetFibonacci(n);
}
function PrintFibonacci () {
	
	alert(GetFibonacci(1));
}


/* Objects */
var puchi = {
	color: "red",
	eyes: 2,
	size: "medium"
}
function TestObject () {
	
	alert("This puchi's color is " + puchi.color
		+",\n" + "size " + puchi.size
		+",\n" + "with " + puchi.eyes + " eyes");
}