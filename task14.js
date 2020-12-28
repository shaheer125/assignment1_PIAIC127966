var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
//--a = 1
//--b = 0
//++b = 1
//b-- = 1
//Put all the values in this equation:  --a - --b + ++b + b--
//1 - 0 + 1 + 1
//1 + 1 + 1 = 3 
//so a: 1.
//b: 0.
//and the final answere of result variable is: 3.
console.log(a);
console.log(b);
console.log(result);
document.write("</br>a is: 1 </br>b is: 0 </br>result is: 3");
//output at each stage:
//stage#1 --a = 1 therefore a = 1
//stage#2 --a - --b = 1 therefore a = 1 and b = 0
//stage#3 --a - --b + ++b = 2 therefore a = 1 and b = 1
//stage#4 --a - --b + ++b + b-- =  3 therefore a = 1 ; b = 0 and result = 3.