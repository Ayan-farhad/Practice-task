         //** My practice **/

// 'Strings'
// 23 integer 
// float 


// = assigning operator
// == value check 
// ===value ke sath data type bhi chek
// && left and right dono ka true hona zaroori hai
// || left ya right dono me se kisi ek ka true hona zaroori hai
// <less then
// > greater then
// <=less then equal to
// >= greater then equal to
// != not equal to



//   let Name = 'Ayan'
//   let lastName ='Farhad'
//   let age = 17

// document.write(Name)
// document.write('<br>')
// document.write(lastName)
// document.write('<br>')
// document.write(age)
// document.write('<br>')


// ----------

// let value1 = +prompt('Enter value one')
// let value2 = +prompt('Enter value two')
// let result= (value1+value2)

// document.write('your result is '+ result)


// ----------

// var check = 2
// var check2 = 3
// var plus = check++ + check++ + ++check2 + check2++ + check++

// document.write( plus)

// var check = 6
// var check2 = 3
// var one = 10
// var plus = --check - --check2 + one++ + one-- + check++
//             // 5     -    2    +  10     + 11    + 3
// document.write(plus)

   //**if else**//

// == vale check karega 
// === vale ke sath datatypes nhi checlk karega

// if(5==="5"){
//     document.write('correct ')
// }
// else{
//     document.write('wrong')
// }

// -----------------

// && dono side check karta hai 
// || koi aik bhi true honi chiye


// let email = prompt('Enter name')
// let password = prompt('Enter password')

// if(email=="ayan"|| password=="123456"){
//     document.write('correct')
// }
// else{
//     document.write('wrong')
// }

// --------------

// let uvalue =+prompt('Enter your value')

// if (uvalue>80 && uvalue<100){
//     document.write('A+')
// }
// else if (uvalue>60 && uvalue<70){
//     document.write('A')   
// }
// else if (uvalue>50 && uvalue<60){
//     document.write('b')   
// }
// else if (uvalue>40 && uvalue<50){
//     document.write('c')   
// }
// else if (uvalue>39 && uvalue<40){
//     document.write('fail')   
// }

// ----------------------

//**  array **/

// let array = ['Ayan','karachi','Pakistan','Buffer','Zone']
// array.push('Dayare sheeri')
// array.pop()
// array.unshift('ayan')
// array.shift()
// array.splice(2,1,0)

// document.write(array)

//**Loops *


//  Increment Decrement

// var a = 6
// var b = 3
// var c = 5
// //var res = a++ + a++ + ++b + b++ + ++a
// //         6    7     4      5    8  
// //         6    7     4     5     7
// // var res = a++ + a++ - --b + b-- + ++c + c++ + a
//    //     6   +  7  - 2  +  2   +  6  +     6  + 6        31 
//    //     6   +  7  -  2  + 1   +  6  +  7  +  7    
// document.write(res)

// var a = 4
// var b = 7
// var c = 15
// var res = --a - --b + c++ + c-- + a
// //         3  -  6  + 15  +  15 + 4
// //         3  -  6  + 15  +  16 + 3 
// document.write(res)

// var a = 11
// var b = 16
// var c = 13
// //var d = 45
// var res = --a - --a - --a - --b + c++ + c--  + a
//    //      10 -  9  -   8  - 15  + 13  +  13 + 11
//    //      10  - 9  -   8  - 15 + 13  + 14 +  8  
// document.write(res)


// var a = 11
// var b = 16
// var c = 13
// var d = 45
// let f = 22
// let e = 67 
// var res = ++e + --e + f++ - ++e + f++ + ++a + c-- - --c + f +  c++ + ++d - ++a + a++ + ++c + e
// //        68  +  67 +  22 - 68  +  23 + 12  + 13  -  11 + 22 +  11 +  46 -   13 + 13 + 12 + 68
// //        68  +  67 + 22  - 68  +  23  + 12  + 13  - 11  + 23 + 11  + 46  - 13  + 13  + 12  + 68
  
// document.write(res)


// var userInput = prompt ("admin")
// var pass = prompt ("admin")
// if (userInput== pass){
//    document.write('login success')
// }
//  else {
//  document.write('incorrect')
// }

// var a = prompt ("enter email")
// var b = prompt ("enter password")
// if (a == "usama" && b == '1234567'){
//    document.write('login success')
// }
//  else {
//  document.write('incorrect')
// } 


// var a = prompt ("enter email")
// var b = prompt ("enter password")
// if (a == "usama" || b == '1234567'){       
//    document.write('login success')
// }
//  else {
//  document.write('incorrect')
// } 

// let pro = ""
// let userinp= prompt("enter value")

// for (i = 10; i>=0; i++){
// document.write(i+'<br>')
// }

// var i;
// for (i=5; i>=0; i--){ 
//    string == string + '*'                      //reverse countion
//     document.write(i+'</br>')
// }


// let string = ''
// let userInput = +prompt('enter')
// for(let i =0; i<=userInput; i++){
//    string = string + ' * ';
//    if( i ===  userInput){
//       document.write(string.length-1)
//       for (let j = 0; j <string.length; j++  + '<br>'){
//          document.write(string.slice(0 , string.length-j))
//       }
//    }
// }

// let a = +prompt("Enter value")

// for (let i = 1; i <= 10; i++) {
//    document.write (a + " x " + i + " = " + a*i + "<br>")
   
// }

 //     Nested loop //

// let userinp = prompt("Enter city");
// let arr = ["karachi", "lahore", 'muree' , 'islamabad', 'rawalpindi']
// let abc = false 

// for (let i = 0; i < arr.length; i++) {
//    if (userinp== arr[i]) {
//       abc = true
//       alert("City found ")
//    }
// }
// if (abc == false){
//    alert("City not found")
// }


// let arr = ['usama', 'ali' , 'ayan', 'sheraz']
// let arr2 = ['javed','khan']                  normal
// for (let i=0; i<arr.length; i++){
//     document.write(arr[i]+' '+ arr2+'<br>')
// }

// let  arr = [ 'Salman ' , ' Sohail ' , ' Arbaz ']
// let arr2 = ['Saleem khan' , 'Asad']

// for (let i = 0 ; i<arr.length ; i++){
//    for (let b = 0; b < arr2.length; b++) {
//       document.write(arr[i] + ' ' + arr2[b] + "<br>")
      
//    }
// }
  

// if ("karachi" === "Karachi"){
//    console.log("a");
// }else{
//    console.log('b');
// }

// -------------

// let getul = document.getElementById("ul");
// function abc(){
//     let a = document.getElementById("inp");    
//     let li = document.createElement("li");
//          //console.log (li)
//      let litext = document.createTextNode(a.value)               
//      li.appendChild(litext)
//          // console.log(li)
//     getul.appendChild(li)
//     a.value = " "
//    let deletebtn = document.createElement("button")
//   let btntext = document.createTextNode("Delete")
//   deletebtn.appendChild(btntext) 
//   li.appendChild(deletebtn) 
//   deletebtn.setAttribute('onclick','del(this)')
//   let editbtn = document.createElement("button")
//   let editbtntext = document.createTextNode("Edit")
//   editbtn.appendChild(editbtntext)
//   li.appendChild(editbtn)
//   editbtn.setAttribute("onclick",'editfun(this)')
// }
// function deleteall (){
//     getul.innerHTML = ' '
// }
// function del(e){
//   e.parentNode.remove()                 // console.log(e)
// }
// function editfun(e){
//   let a = prompt("Enter Edit Value",e.parentNode.firstChild.nodeValue)
//   e .parentNode.firstChild.nodeValue = a
// //   console.log(a)
// }






// let inp = document.getElementById("value")
// let sUl = document.getElementsByClassName("ul")
// let array = []

// function todoInput(){
   

// }

// -------------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------------//



 //**JS Class 1 **/

//console.log("hello world");
// alert("hello world")
// console.log("hello world");
// console.log("hello world");

//let names = 'Ayan'
//let age = 17 
//console.log( names  ) 
//console.log( age  )


//let userName = prompt('Enter user name ')
//let chemMarks = Number(prompt(' Enter Chemistry marks'))
//let phyMarks = Number(prompt(' Enter phy marks'))
//let bioMarks = Number(prompt(' Enter bio marks'))
//let mathsMarks = Number(prompt(' Enter maths marks'))

//let totalMarks = 400;
//let userTotal = chemMarks + phyMarks + bioMarks + bioMarks
//let percentage = userTotal / totalMarks * 100 ;

//console.log('students names ' + userName + " got " + percentage+ "%.")


// const Wicket = 4
 


// if (Wicket >=  7 ){
//     console.log('pAkistan jeet gaya');
// }
// else if (Wicket >=6){
//    console.log('match drow hogaya ');
// }
// else if (Wicket >= 5){
//     console.log('Pakistan har gaya');
// } else {
//     console.log('mene Aj tak match nhi dekha ');
// }
  

// -------------------------------------------------------------------------------------------------//

//**JS class 2 **/

// 'hello world'       String
// 1,2,123             integer
// 1.3                 float


            /** Alert **/

// alert ('Username')
// alert ('myName')
// alert ('JS hard hai ')



/** variable for string **/

// let names = 'ayan'
// let age = 17  
// console.log('My name is '+ names +' '+ 'and my age is' +' '+ age + '.')

// document.write ('<h1>AYAN </h1>')
// document.write ('<h1>AYAN </h1>')
// document.write ('<h1>AYAN </h1>')

// var ayan = "test"
// var ayanu = "paper"

// document.write(ayan+' '+ayanu);

// var ayan = "test"
// var ayann = "paper"

// console.log(ayan+'   '+ayann);




// var a = prompt('enter value 1')   
// var b = prompt('enter value 2')
// document.write(a+b)


// document.write()


// var names = 'ayan'
// // let names = 'ayan'
// // const names = 'ayan'
// console.log(names)


// var check = 'ayan'

// console.log(check);


// let a = +'50'
// let b = 40
//  console.log(a+b);

// const a = prompt('enter your name ') 
// const b = prompt('father name')

// console.log(a+' '+b);
 


/** variable for number**/


// var num1 = 10
// var num2 = 20
// document.write(num1+num2)


// var num1 = '10'
// var num2 = '20'
// document.write(num1+num2)


// -------------------------------------------------------------------------------------------------//

//**JS class 4 **/

// peramiter
// function username(){ 
//     console.log('hello JS ');
//     console.log('hello JS ');
//     console.log('hello JS ');
//     console.log('hello JS ');
//     console.log('hello JS ');
//     console.log('hello JS ');
//     console.log('hello JS ');
//     console.log('hello JS ');
// }

// username(); //argument


// function userbio(name , age , salary){
//    console.log('my name is ' + name + ' my age is ' + age + ' and my salary is ' + salary);
// }

// userbio('Ayan',20,0);



//undefined
// function username(num1,num2){    
//     console.log(num1,num2);
//     const sum = num1+num2
//     return sum
// }

// console.log(username('num1'+'num2'));


// let userbio=prompt('Enter your name ')
// let  product1 = prompt ('enter product1 ')
// let product2 = prompt('enter product2')
// let prize1 =prompt ('enter prize1 ')
// let prize2 = prompt('enter prize2')

// function detail(userbio,product1,product2,prize1,prize2){
//     let bio = ('your name is this '+ userbio + 'and product 1 is this ' +product1+ 'and your product2 is this' +product2+ 'and prize' )
// }


// -------------------------------------------------------------------------------------------------//

//**JS class 5 **/

//**Dom  Manipulation **/


// let h1 =  document.querySelector('.change')
// h1.innerHTML = 'practice karry hai '

// const p =document.querySelector('.id')
// p.innerHTML='ayan ayan <br>ayan ayan ayan '


// function greetuser (){
//     if(h1.innerHTML === 'practice button ki'){
//         h1.innerHTML = 'hello world'
//     }else{
//         h1.innerHTML ='changed shayd hojye'
//     }
//     console.log('hello world');
// }

// console.log();

// -------------------------------------------------------------------------------------------------//

//**JS class 6 **/

// function changejs (names){
//     console.log(names);
//     head.innerHTML = 'change karrhy hai js se'
// }
// console.log('.head'); //eror


//** Array **/

// let sabzi = ['alu', 'gobi', 'piyaz',' tindy', 'matter' ]
// // sabzi.push('piyaz');

// console.log(sabzi)

// let numbers = ['one','two','three','four','five','six','seven','eight','nine','ten']

// numbers.splice(4,3,7,8,9)
// numbers.splice(0,1)
// numbers.splice(4,1)
// numbers.splice(10,1)
// console.log(numbers)

// let numbers = ['one','two','three','four','five','six','seven','eight','nine','ten']
// numbers.slice(0,1)
// numbers.slice(3,1)
// numbers.slice(7,1)
// console.log(numbers)

// -------------------------------------------------------------------------------------------------//

 //**JS Class 7 **/
  
 //loops

// const con = document.querySelector(".connect")

// let uValue = +prompt('enter your value');

// for (let i = 1; i <= 10; i++){
//     console.log(uValue + " x " + i + " = " + uValue * i );
//     con.innerHTML +=  uValue + " x " + i + " = " + uValue * i + "<br/>" ;
// }


// const input = document.querySelector('#value')

// function sValue (){
//     console.log(input.sValue)

// }

// -------------------------------------------------------------------------------------------------//


/** while loop **/

// let a = 1;
// while(a < 10){
//    console.log(a);  
//    a++
//     for(let b = 1; b < 10; b++){
//       console.log(b + " x " + a + " = " + b*a )
//    }
  
// }

//**do while **/
 
// let i = 1;
// do {
//    console.log(i);
//    i++
// } while (i < 10)

// plus ka asan tareeka

// const name = "ayan";
// const age = 17;
// console.log (`My name is ${name} and my age is ${age} `)

// let sabzi = ["aloo" , "gobi" ," piyaz",  "losson"];

// for (let i = 0; i < sabzi.length; i++) {
//    console.log(`${sabzi} and its ${i}`)
// }
