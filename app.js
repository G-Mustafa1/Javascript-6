var num = 10;
document.write(`<h1>The Result:</h1>\n The value of a is <b>:${num}</b><br>...........................................<br><br><br>`)
document.write(`The value of ++a is <b>:${++num}</b><br> <br> `);
document.write(`Now the value of a is <b>:${num}</b><br> <br> <br>`);

document.write(`The value of a++ is <b> :${num++}</b> <br><br>`);
document.write(`Now the value of a is <b>:${num}</b><br> <br> <br>`);

document.write(`The value of --a is <b> :${--num}</b> <br><br>`);
document.write(`Now the value of a is <b>:${num}</b><br> <br> <br>`);

document.write(`The value of a-- is <b> :${num--}</b> <br><br>`);
document.write(`Now the value of a is <b>:${num}</b><br> <br> <br> <hr><br> <br>`);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write(`The value of a is <b> : ${a}</b> <br> <br>`)
document.write(`The value of b is <b> :${b}</b> <br> <br> `)
document.write(`The final result is <b> :${result}</b> <br> <br> <hr> <br> <br>`)

// 3. Write a program that takes input a name from user &
// greet the user.

var userName = prompt("Please Enter Your Name : ")
alert(`Welcome To ${userName} My Web Page `);
document.write(`Welcome To ${userName} My Web Page <br> <br> <hr> <br> <br>`)

// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default

var table = +prompt("Enter a table number")
for(ab = 1; ab <=10; ab++){
   var table2 = 
   `<center>
   <table class="td1">
      <tr>
         <th>${table} x ${ab} = ${table*ab}</th>
      </tr>
   </table>
   </center>
   `
   document.write(` ${table2}`)
}
// var table = +prompt("Enter a table number")

// document.write(` ${table} + 1 = ${table + 1}<br>`)
// document.write(` ${table} x 2 = ${table * 2}<br>`)

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// // stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subject1 = prompt("Enter The Name of Subject 1: ");

var subject2 = prompt("Enter The Name of Subject 2: ");

var subject3 = prompt("Enter The Name of Subject 3: ");

var totalmarks = 100;

var totalmarksObatin1 = +prompt(`Enter Your obtained marks in ${subject1}`);
var totalmarksObatin2 = +prompt(`Enter Your obtained marks in ${subject2}`);
var totalmarksObatin3 = +prompt(`Enter Your obtained marks in ${subject3}`);
var totalmarksObatin = (totalmarksObatin1 + totalmarksObatin2 + totalmarksObatin3);
// var totalmarks1 =``
var percentage = (totalmarksObatin / (totalmarks * 3) ) * 100;
var percentage1 = (totalmarksObatin1 / (totalmarks *3 ) ) *100;
var percentage2 = (totalmarksObatin2 / (totalmarks * 3) ) * 100;
var percentage3 = (totalmarksObatin3 / (totalmarks * 3) ) * 100;

var table1 = ` <h1> Subject Total Marks Obtained Marks Percentage </h1>
<div class="th1">
   <table border="1px">
      <tr>
         <th>Subject</th>
         <th>Total Marks</th>
         <th>Obtained Marks</th>
         <th>Marks Percentage</th>
      </tr>
      <tr>
         <th>${subject1}</th>
         <td>${totalmarks}</td>
         <td>${totalmarksObatin1}</td>
         <td>${totalmarksObatin1}%</td>
      </tr>
      <tr>
         <th>${subject2}</th>
         <td>${totalmarks}</td>
         <td>${totalmarksObatin2}</td>
         <td>${totalmarksObatin2}%</td>
      </tr>
      <tr>
         <th>${subject3}</th>
         <td>${totalmarks}</td>
         <td>${totalmarksObatin3}</td>
         <td>${totalmarksObatin3}%</td>
      </tr>
      <tr>
         <th align="center" colspan="2">Total</th>
         <th>${totalmarksObatin}</th>
         <th>${percentage .toFixed(0)}%</th>
      </tr>
   </table>  <br> <br> <br> <hr> <br>
<div>
`
document.write(`<center> ${table1} </center>`)

// var marks1 = document.write(`${marks1}`);
// var marks2 = document.write(`${marks1}`);
// var marks3 = document.write(`${marks1}`)

// var totalmarksObatin = `presentin ${marks1} presentin ${marks2} presentin ${marks3}`;
// var percentage = (totalmarksObatin / totalmarks * 3) * 100;
// document.write(`${percentage}`)