                        //** My practice **// 

// 'Strings'
// 23 integer 
// float 


// ----------------------------//**Alert , variable , prompt **/-------------------------------------

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



// --------------------------------------//**IF ELSE**//--------------------------------------


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



// if(5==="5"){
//     document.write('correct ')
// }
// else{
//     document.write('wrong')
// }



// let email = prompt('Enter name')
// let password = prompt('Enter password')

// if(email=="ayan"|| password=="123456"){
//     document.write('correct')
// }
// else{
//     document.write('wrong')
// }



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

   

// --------------------------------------ARRAY---------------------------------------------------------


// --arraykeMethods--//
// push = akhir se value ko add karta hai
// pop = akhir se value ko delete karta hai
// unshift = shuru se value ko add karta hai  
// shift = shuru se value ko delte karta hai 
// splice = shuru se akhir se bech se value ko add bhi kata hai or delte bhi karat hai



// let array = ['Ayan','karachi','Pakistan']
// array.splice(1,1,"kam tamam")

// document.write(array)




// --------------------------------------//** Increment Decrement **//---------------------------------

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



// -------------------------------------LOOPS---------------------------------------------------


// let a = +prompt("Enter value")

// for (let i = 1; i <= 10; i++) {
//    document.write (a + " x " + i + " = " + a*i + "<br>")
   
// }



// -------------------------------------NESTED-LOOPS---------------------------------------------

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
// let arr2 = ['javed','khan']                  
// for (let i=0; i<arr.length; i++){              Normal
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

// ------------------------------WHILE-LOOP-------------------------------------------------

// let a = 10
// while (a <= 20){
//     console.log("chal raha hai");
//     a++;
// }


// ---------------------------------DO-LOOP----------------------------------------------------

// let a = 5

// do {
//      console.log("Do chal raha " +a)
//      a++;
    
// } while (a<=10);


// -------------------------------------FOR-OF-LOOP---------------------------------------------------

// let str = "Ayan"

// for (let u of str) {
//     console.log("u =", u);
// }


// --------------------------------------METHODS------------------------------------------------------

// setInterval(function(){                      
//     document.write("Ayan ")        time dene ke bad chalta hi rahega
// } ,2000)

// function timer(){
//     document.write("ayan");
// } setInterval(timer,2000)

// setTimeout(function(){
//     document.write("Chal na")     time dene ke bad aik hi bar chalega 
// },4000)



// let a = 1
// setInterval(function(){
//     a++
//     console.log(a);
// },500);


// var minutes = 0
// var seconds = 0
// var miliseconds = 0
// var getmin = document.getElementById('min')
// var getsec = document.getElementById('sec')
// var getmili = document.getElementById('msec')
// var interval;



// function start(){
//     interval = setInterval(function(){
//         miliseconds++
//         getmili.innerHTML = miliseconds
//         if(miliseconds >= 100){
//             seconds++
//             getsec.innerHTML = seconds
//             miliseconds = 0
//         }
//         else if(seconds >= 5){
//             minutes++
//             getmin.innerHTML = minutes
//             seconds = 0
//         }
//     },10)  
//     document.getElementById('sss').disabled = true
// }
// function stop(){
//     clearInterval(interval)
//     document.getElementById('sss').disabled = false
// }

// function reset(){
//     minutes = 0
//     miliseconds = 0
//     seconds = 0
//     getmin.innerHTML = minutes
//     getsec.innerHTML = seconds
//     getmili.innerHTML = miliseconds
// }







// --------------------------------//**OBJECTS**//------------------------------------------------

// let obj = {
//     s_name : "Ayan",
//     s_id :  "1159",
//     s_age :  "19",
//     s_roll : "7078",
//     s_course : "web and mob",
// }

// delete obj = s-;
// obj.color ="black"


// -------------------------------------------//**EVENTS **//-------------------------------------------------


// let button = document.querySelector("#head")

// button.addEventListener('click' ,function(){
//     console.log("Doneee");
// })


// ---------------------------------//**API **//---------------------------------------------


// axios.get("https://fakestoreapi.com/products")
// .then((res)=>{
//     console.log(res.data);
//     for(let i = 0; i < res.data.length; i++)
//     console.log();
// })
// .catch((err)=>{
//     console.log(err);   a 
// })

 

// ------------------------------------------------------------------------------------------
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
//    string == string + '*'                      //reverse condition
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




// ------------------Todo delete edit button------------------------------------------------


// let getul = document.getElementById("ul")

// function  todofunc(){                                              //pending//continue
//    let inp = document.getElementById("input")
//    let getli = document.createElement("li")
   
//    let litext = document.createTextNode(inp.value)
//    getli.appendChild(litext)
//    getul.appendChild(getli)
//    inp.value = ""

//    let dAll = document.createElement("button")
//    let dbtntext = document.createTextNode("delete")
//    dAll.appendChild(dbtntext)
//    getli.appendChild(dAll)
//    dAll.setAttribute("onclick","del(this)")

//    let editli = document.createElement("button")
//    let editbtn = document.createTextNode("edit")
//    editli.appendChild(editbtn)
//    getli.appendChild(editli)
//    dAll.setAttribute("onclick","editfun(this)")



// }

// function deleteall (){
//    getul.innerHTML = ""
   
// }
// function del(c){
//    c.parentNode.remove()
   

// }
// function editfun(e){
//    // let a = prompt("Enter and Update")

  
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
                    



//**Class 11 **/

                               //**Switch case **/

// let grade = "C"

// switch (grade){
//     case "A":
//         console.log("A grade ");
//         break
//     case "B":
//         console.log("B garde");
//         break
//     case "C":
//         console.log("C grade");
//     default:
//         console.log("thenga");    

// }


// let num = prompt("enter")

// switch (true){
//     case num > 6  :
//         console.log("A grade ");
//         break
//     default:
//         console.log("thenga");    

// }

// let currentDate = new Date("November 09 2006 ");
// // console.log(typeof(currentDate));
// console.log(currentDate);


// -----------------------------------TODO--app--------------------------------------------------------

// let get = document.getElementById("ul")

// function todoAction(){
//     let inp = document.getElementsByClassName("input")
//     let creLi = document.createElement("li")

//     let liText = document.createTextNode(inp.value)
//     creLi.appendChild(liText)
//     get.appendChild(creLi)
//     inp.value = ""

//     let delBtn = document.createElement("button")
//     let delBtntext = document.createTextNode("Delete")
//     delBtn.appendChild(delBtntext)
//     creLi.appendChild(delBtn)
// }

           // ----------------------

// let curentDate = new Date();
// let days = [Sun, monday, tuesday, wednesday, thrusday, friday]
// let ind =
// console.log(days[]);


// const img = document.querySelector("img")

// function toss(clicked){
//     let rNumber = Math.floor(Math.random()*7)
//     console.log(rNumber);
//     if(clicked==="Shake" || rNumber===1 ){
//         console.log(clicked,);
       
//     }
// }


// const img = document.querySelector("img")
// function rollDice() {
//     var diceImageElement = document.getElementById("diceImage");
//     var randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
//     var imagePath = "path/to/your/images/dice" + randomNumber + ".jpg"; // Replace with the actual path to your images
//     Image.src ="./dice1.png";
// }


// const btn = document.querySelector('#head');
// btn.addEventListener('click' , function(event){
//     // event.preventDefault()
//     // event.stopPropagation()
//     console.log("chal raha hai");

// })

// let calInp = document.querySelector("input")

// calInp.addEventListener("", function(click){
//     calInp.value += click
// })


// function anyTable(){
//     let inp = document.getElementById("input").value;
//     for (let table = 1; table < inp; table++) {
//         let res = table * inp;
//         table +=  inp + " x " + table +" = "+ res +"</br>";
        
//     }

// }
// console.log(anyTable());

// --------------------------------------


// function rishta(bankBalance) {
//     return new Promise((resolve, reject) => {
//      if(bankBalance > 10000){
//         resolve('mubarrak')
//      }else{
//         reject('ghar jao')
//      }
//     })
    
// }
// rishta(20000)
// .then(function(res){
//     console.log(res);
// })
// .catch(function(rej){
// console.log(rej);
// })


// let email = document.getElementById("email")
// let password = document.getElementById("Password")
// let btn =  document.getElementById("btn")

// btn.addEventListener("click" )


// let div = document.getElementById("abc")
// axios.get('https://fakestoreapi.com/products')
// .then((res)=>{
//     console.log(res.data);
//     for (let i = 0; i < res.data.length; i++) {
//         div.innerHTML += `<div class="p-5 border border-1  rounded-1 shadow-lg m-2">
//         <p><span class="font-bold text-lg">brand:</span> ${res.data[i].brand}</p>
//         <p><span class="font-bold text-lg">Model:</span> ${res.data[i].model}</p>
//         <p><span class="font-bold text-lg">RAM:</span> ${res.data[i].ram}</p>
//         <p><span class="font-bold text-lg">ROM:</span> ${res.data[i].rom}</p>
//         <p><span class="font-bold text-lg">Camera:</span> ${res.data[i].camera}</p>
//         <p><span class="font-bold text-lg">Price:</span> ${res.data[i].price}</p>
//         <button onclick='addToCart(${i})' class="btn btn-primary m-2">Add to Cart</button>
//         </div>`
        
//     }
// })

// .catch((err)=>{
//     console.log(err);
// })

// ------------------function-prac--------------------//

// Question-1

// function greet(name) {
//     console.log("Hello, " + name + "!");
//   }
  
//   greet("Alice");
//   greet("Bob");
//   greet("Charlie");
  

// Question-2

// function displayCurrentDateTime() {
//     const currentDateTime = new Date();
  
//     const formattedDateTime = currentDateTime.toLocaleString();
  
//     alert("Current Date & Time: " + formattedDateTime);
//   }
  
//   displayCurrentDateTime();

// Question-3

// function greetUser(firstName, lastName) {
  
//     const fullName = firstName + " " + lastName;

//     console.log("Hello, " + fullName + "! Welcome!");
//   }
  
//   greetUser("John", "Doe");


// Question-4

// function addTwoNumbers() {
    
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));
  
//     let sum = num1 + num2;
//     return sum;
//   }
  
  // let result = addTwoNumbers();
  // console.log("The sum of the two numbers is:", result);
  
  
  
//  Question15

// var abc = function inner() { 
//     return typeof inner; 
// }
// alert(abc());


// Question16

// function computePower(base, exponent) {
//     let result = Math.pow(base, exponent);
//     return result;
// }
// let baseNumber = 2;
// let exponentNumber = 4;
// let result = computePower(baseNumber, exponentNumber);
// console.log(`${baseNumber}^${exponentNumber} is ${result}`);



// Question 17
// function rollDice() {
//        return Math.floor(Math.random() * 6) + 1;
// }
// let diceResult = rollDice();
// console.log(The dice rolled: ${diceResult});

//  Question 18
// function reverseNumber(number) {
    
//     let reversedString = number.toString().split('').reverse().join('');   
//     let reversedNumber = parseInt(reversedString);
//     return reversedNumber;
// }
// let x = 3224783;
// let reversedX = reverseNumber(x);
// console.log(Original number: ${x});
// console.log(Reversed number: ${reversedX});


// Question 19  
// function isPalindrome(inputString) {
    
//     let cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();   
//     let reversedString = cleanString.split('').reverse().join('');
//        return cleanString === reversedString;
// }
// let testString = "maham";
// if (isPalindrome(testString)) {
//     console.log(${testString} is a palindrome.);
// } else {
//     console.log(${testString} is not a palindrome.);
// }