var number1 = +prompt("enter a number")
var arithmetic = prompt("enter an arithmetic")
var number2 = +prompt("enter a number")

var a = "+"
var b = "-"
var c = "*"
var d = "/"

if(arithmetic === a){
    alert(number1 + number2)
}else if(arithmetic === b){
    alert(number1 - number2)
}else if (arithmetic === c){
    alert(number1 * number2)
}else if(arithmetic === d){
    alert(number1 / number2)
}