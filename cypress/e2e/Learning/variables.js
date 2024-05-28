// var - old way
//scope - functional/local + global
//var let const 

/*var a = 10;
function test() {

    var b = 30;
}

console.log(a)
//console.log(b) */


let browser = 'chrome'
browser = 'edge'
browser = 'firefox'
//Reinitialization and re decleration possible

console.log(browser)

/*var g;
console.log(g) // undefined

//issue with var

var flag = 'Cypress'
var t1 = 4
if(t1>3)
{
    var flag = 'Selenium'
}

console.log(flag); // Selenium



//let - Improvement of var
//scope-block scoped

let xyz = 'hey';
let time=4;
if(time>3)
{
    let msg='how are you';
    console.log(msg);
}
//console.log(msg)  //Undenifed
//console.log(xyz)  //Hey

var len = 4;
var len = 5,

console.log(len)

let n = 6 //let can be reinitialized but cannot redeclared
let n = 7
*/

//const - Once the value is declered,cannot be declared again

const days = 7;
//days = 10;

console.log(100*days) //Error- Assigment to constant variable

