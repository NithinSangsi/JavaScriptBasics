                //JS BASICS                 
// console.log("Jai Sree Ram");
// window .alert(`I am Nithin Sangsi`);
// document.getElementById("myh1").textContent = `Hello`;
// document.getElementById("myp").textContent=` i love js`;

//Variables
//NUMBERS
// let x; --declaration
// x=100;  -assignment 
// console.log(x);
//  let age=25;
//  let price=10.99;
//  let cgpa=8.69;
 //console.log(typeof age);--number  
// console.log(age,price,gpa);
//console.log(`I have attained ${cgpa} after 3rd sem`);
//STRINGS
// let firstName=`Nithin`;
// let email=`nithinsangsi1234@gmail.com`;
// console.log(`my name is ${firstName} Sangsi and my email is ${email}`);
//BOOLEANS
// let online =true;
// console.log(`nithin is online in watsapp:${online}`);
// let student=true;
// document.getElementById("p1").textContent=age;
// document.getElementById("p2").textContent=cgpa;
// document.getElementById("p3").textContent=student;
// document.getElementById("p1").textContent=`my age is : ${age}`;
// document.getElementById("p2").textContent=`my cgpa as of now is : ${cgpa}`;
// document.getElementById("p3").textContent=`I am student : ${student}`;

//ARITHMETIC OPERATORS
// let students=20;
// students+1;
// students++;
// students+=1;                //AUGUMENTED ASSIGNMENT OPERATOR
// console.log(students);
// let result=1+2*3+4**2;                            //OPERATOR PRECEDENCE    parenthesis->pow->exponent->modulus->D->M->S->A
// console.log(resul t);
// let result1=12%5+8/2;
// console.log(result1);

//HOW TO ACCEPT USER INPUT
//1.EASY WAY
// let username;
// username=window.prompt("what is your Name?");
// console.log(username);
//PROFESSIONAL WAY .
// let username; --HTML TextBox                              takes input in live server and submites to console
// document.getElementById("mysubmit").onclick=function() { 
//     username=document.getElementById("mytext").value;
//     console.log(username);
// }
// let username;                        changes the header to hello username
// document.getElementById("mysubmit").onclick=function() { 
//     username=document.getElementById("mytext").value;
//     username=document.getElementById("myh1").textContent=`hello ${username}`;
// }

//TYPE CONVERSION
//without TC
// let age=window.prompt('how old are u ?');
// age+=1;
// console.log(age,typeof age);
//with TC
// let age=window.prompt('how old are u ?');
// age=Number(age);
// age+=1;
// console.log(age,typeof age);
// let x="puri";
// let y="puri";
// let z="puri";
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);
// let x="";
// let y="";
// let z="";
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);
// let x="0";
// let y="0";
// let z="0";
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);
// let x;
// let y;
// let z;
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

//          CONSTANTS                   
// const PI=3.14159;               //easy way
// let radius;
// let circumference;
// PI=421.368;                   //error occurs in console
// radius=window.prompt("enter the radius of circle:");
// radius=Number(radius);
// circumference=2*PI*radius;
// console.log(circumference);
// const PI=3.14159;                   //professional way(every line is imp and should be in correct way )
// let radius;
// let circumference;
// document.getElementById("mysubmit").onclick=function(){
//     radius=document.getElementById("mytext").value;
//     radius=Number(radius);
//     circumference=2 * PI * radius; 
//     document.getElementById("myh3").textContent=circumference + " cm";
// }
                            //COUNTER PROGRAM
            // const decreasebtn=document.getElementById("decreasebtn");
            // const resetbtn=document.getElementById("resetbtn");
            // const increasebtn=document.getElementById("increasebtn");
            // const countlabel=document.getElementById("countlabel");
            // let count=0;
            // increasebtn.onmousemove=function(){
            //     count++;
            //     countlabel.textContent=count;
            // }
            // resetbtn.onmousemove=function(){   //onclick can be used
            //     count=0;
            //     countlabel.textContent=count;
            // }
            // decreasebtn.onmousemove=function(){
            //     count--;
            //     countlabel.textContent=count;
            // }
                        //MATH OBJECT
        // let x=3.21;
        // let y=2;
        // let z=6;
        // let p=-3.2562;
        // let a,b,c,d,e,f,g,h,i,JS;
        // console.log(a=Math.round(x))
        // console.log(b=Math.floor(x))
        // console.log(c=Math.ceil(x))
        // console.log(d=Math.trunc(x))
        // console.log(e=Math.pow(y,z))
        // console.log(f=Math.sin(x))
        // console.log(g=Math.sign(p))  // if negative number it return -1,if positive it eturns 1,and 0 if enterered 0
        // console.log(h=Math.log(x))
        // console.log(a=Math.sqrt(z))
        // console.log(a=Math.abs(x))
        // let max=Math.max(x,y,z);
        // console.log(max)
            //RANDOM NUMBER GENERATOR
                            // o=Math.random();
                            // console.log(o);
                            // let randomnum=Math.random();          //0-1   0.85553559865556-0.99999999999999  not 1
                            // console.log(randomnum);
                            // let randomnum1=Math.random()*6;        //0.000000005955/2.525585855/5.4825626656    not 6
                            // console.log(randomnum1);
                            // let randomnum2=Math.floor(Math.random()*6);         //0-5->0/1/2/3/4/5
                            // console.log(randomnum2);
                            // let randomnum3=Math.floor(Math.random()*6)+1;         //1-5->1/2/3/4/5/6
                            // console.log(randomnum3);
                            // const min=50;
                            // const max=100;
                            // let randomnum4=Math.floor(Math.random()*max)+min;         // 50-149
                            // console.log(randomnum4);
                            // let randomnum5=Math.floor(Math.random()*(max-min))+min;         //50-99
                            // console.log(randomnum5);
                //ROLL
                        // //1 time                const mybtn=document.getElementById("mybtn");
                        //                         const min=1;
                        //                         const max=6;
                        //                         let randomnum;

                        //                         mybtn.onclick=function(){
                        //                             randomnum=Math.floor(Math.random()*max)+min;     //1-6
                        //                             mylabel.textContent=randomnum;
                       //                           }
                        //3 times
                        // const mybtn=document.getElementById("mybtn");
                        // const label1=document.getElementById("label1");
                        // const label2=document.getElementById("label2");
                        // const  label3=document.getElementById("label3");
                        // const min=1;
                        // const max=6;
                        // let randomnum1;
                        // let randomnum2;
                        // let randomnum3;
                        // mybtn.onclick=function(){
                        //     randomnum1=Math.floor(Math.random()*max)+min ;     //1-6
                        //     randomnum2=Math.floor(Math.random()*max)+min ;     //1-6
                        //     randomnum3=Math.floor(Math.random()*max)+min ;     //1-6
                        //     label1.textContent=randomnum1;
                        //     label2.textContent=randomnum2;
                        //     label3.textContent=randomnum3;

                        // }
                                                        // IF STATEMENTS
// let isstudent =true;          // if works well with boolean variables;
// if(isstudent){
//     console.log("you are a student");   //if true
// }
// else{
//     console.log("you are not a student");    //if false
// }
// let age=25;                     //nested-if
// let haslicense=true;
// if(age>=16){
//          console.log("you can drive");  
//         if(haslicense){
//                  console.log("you have license");   //if true
//             }
//             else{
//                 console.log("you dont have license");    //if false
//             }
//             }
//             else{
//                 console.log("you are not a student");    //if false
//             }
                            // IF STATEMENTS
// const mytext=document.getElementById("mytext");
// const mysubmit=document.getElementById("mysubmit");
// const resultelement=document.getElementById("resultelement");
// let age;  
// mysubmit.onclick=function()
// { 
//        age=mytext.value;
//        age=Number(age);                 
//         if(age>=18  && age<100){
//             //console.log("u can drive"); 
//             resultelement.textContent=`u can drive`; 
//         }    
//         else if(age == 0){
//             //console.log("you are just born");
//             resultelement.textContent=`you are just born`; 
//             }
//         else if(age>100){
//             //console.log("you are too old to drive");
//             resultelement.textContent=`you are too old to drive`; 
//             }
//         else if(age<0){
//             //console.log("you people don't exist");
//             resultelement.textContent=`you people don't exist`; 
//         }
//         else{
//             //console.log("you must be 18+to drive or else patrolling people will fine u and take money");
//             resultelement.textContent=`you must be 18+ to drive or else patrolling people will fine u and take money`; 
//         }
// }
                                    //CHECKED PROPERTY
                    // const mycheckbox=document.getElementById("mycheckbox");
                    // const viszbtn =document.getElementById("visabtn");
                    // const mastercardbtn=document.getElementById("mastercardbtn");
                    // const paypalbtn=document.getElementById("paypalbtn");
                    // const mysubmit=document.getElementById("mysubmit");
                    // const subresult=document.getElementById("subresult");
                    // const paymentresult=document.getElementById("paymentresult");
                    // mysubmit.onclick=function()
                    // {
                    //     if(mycheckbox.checked){
                    //     subresult.textContent=`You Are Subscribed`
                    //     }
                    //     else{
                    //         subresult.textContent=`You Are Not Yet Subscribed`
                    //     }
                    //     if(visabtn.checked){
                    //         paymentresult.textContent=`You Paid With Visa`
                    //     }
                    //     else if(mastercardbtn.checked){
                    //     subresult.textContent=`You Paid With Mastercard`
                    //     }
                    //     else if(paypal.checked){
                    //     paymentresult.textContent=`You Paid With PayPal`
                    //     }
                    //     else{
                    //     paymentresult.textContent=`You Must Select `
                    //     }

                    // }
        //TERNERAY OPERATOR
    // let age=21;
    // res=age>18?`You Are Adult`:`You Are Minor`;
    // console.log(res)
    // let isstudent=true;
    // res=isstudent?`You Are Adult`:`You Are Minor`;
    // console.log(res)
    // let purchaseamount=125;
    // let discount=purchaseamount>=100?10:0;
    // console.log(`your total amount is Rupees ${purchaseamount-purchaseamount *(discount/100)}`)
//SWITCHES = can be an efficient replacement to many else if statements
// let testscore=98;
// let testgrade;
// switch (true){
//     case testscore>=90:
//         testgrade='A';
//         break;
//     case testscore>=80:
//         testgrade='B';
//         break;
//     case testscore>=70:
//         testgrade='C';
//         break;
//     case testscore>=60:
//         testgrade='D';
//         break;
//     default:
//         testgrade="Fail";        
// }
// console.log(testgrade);
                //STRING METHODS
        // let username="Nithin";
        // a=username.lastIndexOf('i');
        // console.log(a);
        // b=username.indexOf('i');
        // console.log(b);
        // c=username.length;
        // console.log(c);
        // let username1="   NithinSangsi"
        // d=username1.trim();     //to remove white spaces
        // console.log(d);
        // e=username.toUpperCase();
        // console.log(e);
        // f=username.toLowerCase('i');
        // console.log(f);
        // g=username.repeat(3);
        // console.log(g);
        // h=username.startsWith('n');
        // console.log(h);
        // i=username.endsWith('n');
        // console.log(i);
        // j=username.includes("in");
        // console.log(j);
        // let pnum="701-108-4252";
        // pnum=pnum.replaceAll("-","");
        // console.log(pnum);
    // let k="123456789";
    // a=k.padStart(12,"0");
    // b=k.padEnd(15,"B");
    // console.log(a)
    // console.log(b);
                    //STRING SLICING
    // const myname="Nithin Sangsi";
    // let firstname=myname.slice(0,6);
    // let a=myname.slice(-1);
    // let b=myname.slice(-4);
    // console.log(firstname);
    // console.log(a);
    // console.log(b);
    // const email="NithinSangsi12345@gmail.com";
    // let user =email.slice(0,email.indexOf("@"));
    // let extension=email.slice(email.indexOf("@")); =@ is included
    // let extension=email.slice(email.indexOf("@")+1); =@ is not included
    // console.log(user,extension);
                        //METHOD CHANING
   //NO METHOD CHANING
// let username=window.prompt("Enter the username name:");
// username=username.trim();
// let letter=username.charAt(0);
// letter=letter.toUpperCase();
// let extrachars=username.slice(1);
// extrachars=extrachars.toLowerCase();
// username=letter+extrachars;
// console.log(username);
  //METHOD CHANING
//   let username=window.prompt("Enter the username name:");
//   username=username.trim().charAt(0).toUpperCase() 
//   +
//   username.trim().slice(1).toLowerCase();
//   console.log(username);
  //LOGICAL OPERATORS
     //AND
// const temp=21;
// if(temp > 0 && temp<=45){
//     console.log(`toady is SUNNY`);
// }
// else{
//     console.log(`today is CLOUDY`);
// }
    //OR
// const temp=-21;
// if(temp < 0 || temp > 45){
//     console.log(`toady is SUNNY`);
// }
// else{
//     console.log(`today is CLOUDY`);
// }
    //NOT
// const issunny=true;    //normal as if-T,else-F
// if(!issunny){
//     console.log(`it is sunny`);
// }
// else{
//     console.log(`it is cloudy`);
// }
                    //STRICT INEQUALITY------imp
            //  = assignment operator
            //   == comparision operator (compare if values are equal)
            //  === strict equality operator(compare if the values and datatype are equal)
            //   !=   inequality operator
            //  !==  strict inequality operator

// const PI=3.14159;
// if(PI == "3.14159"){     // == comparision (if only value matches is enough)
//     console.log('That is PI');
// }
// else{
//     console.log('that is not PI')
// }
// const PI=3.14159;
// if(PI === "3.14159"){     // === comparision (both datatype and value should match)
//     console.log('That is PI');
// }
// else{
//     console.log('that is not PI')
// }
// const PI=3.14159;
// if(PI != "3.14159"){     // (!=inequality operater)
//     console.log('That is not PI');
// }
// else{
//     console.log('that is  PI')
// }
// const PI=3.14159;
// if(PI !== "3.14159"){     // (!=inequality operater)
//     console.log('That is not PI');
// }
// else{
//     console.log('that is  PI')
// }
                    //WHILE LOOP--it repeats for unlimited number of times
// let username=`Nithin`;
// while (username == "Nithin"){
//     console.log(`you did not enter ur name`);
// }
//console.log(`Hello ${username} !`);
// let username1='';
// while(username1==='' ){
//     username1=window.prompt('Enter the username:');
// }
// console.log(`Hello ${username1}`);
// let loggedin=false;
// let username;
// let password;
// while(!loggedin){
//    username=window.prompt("Enter the username:");
//    password=window.prompt("Enter the password:");
//    if(username ==="Nithin" && password==="12345"){
//        loggedin=true;
//        console.log("you are logged in");
//    }
//    else{
//        console.log("invalid credentials,please enter correctly");
//    }
// }
        //FOR LOOPS--it repeats for limited number of times
// for(let i=0;i<=2;i++){
//     console.log('hello')
//         console.log(i);
//     }
// for(let i=1;i<=20;i+=2){
//     if(i==3){
//         break;
//     }
//     else{
//     console.log(i);
//     }
// }
// for(let j=1;j<=20;j+=2){
//     if(j==3){
//         continue;
//     }
//     else{
//     console.log(j);
//     }
// }
                    //NUMBER GUESSING GAME--- //GOOD GAME WHERE MACHINE CHOOSES A RANDOM NUMBER IN THE GIVEN RANGE AND WE NEED YO GUESS THAT NUMBER
// const minnum=1;
// const maxnum=100;
// const answer=Math.floor(Math.random()*(maxnum-minnum+1)+minnum);
// let attempts=0;
// let guess;
// let running=true;
// while(running){
//     guess=window.prompt(`Guess a number between ${minnum} To ${maxnum}`);
//     if(isNaN(guess)){
//         window.alert("please enter a valid number:");
//     }
//     else if(guess<minnum || guess >maxnum){
//         window.alert("plese a valid number");
//     }
//     else{
//         attempts++;
//         if(guess<answer){
//             window.alert("TOO LOW");
//         }
//         else if(guess>answer){
//             window.alert("TOO HIGH");
//         }
//         else{
//             window.alert(`CORRECT! The answer is ${answer} , It took you ${attempts} attempts`);
//             running=false;
//         }
//     }
// }
                            //FUNCTIONS
// function happybirthday(){                 //NO ARGS AND PAREMETERS
//     console.log('Happy birthday to you!');
//     console.log('Happy birthday to you my dear!');
//     console.log('May god bless you!');
//     console.log('Happy birthday to you!');
// }
// happybirthday();
// function happybirthday(bboy,god){     //ARGS AND PAREMETERS
//     console.log(`Happy birthday to you ${bboy}!`);
//     console.log('Happy birthday to you my dear!');
//     console.log(`May god ${god} bless you!`);
//     console.log('Happy birthday to you!');
// }
// happybirthday("Nithin","Hanuman");
//function iseven(number){
//     if(number % 2 === 0){
//         console.log(`the number ${number} is even`);
//     }
//     else{
//         console.log(`the number ${number} is odd`);
//     }
//   return number % 2 === 0 ? true : false; 
//}
//console.log(iseven(12));
// function isvalidemail(email){
//     return email.includes("@") ? true : false; 
// }
// console.log(isvalidemail("abcd@.com"));
        //VARIABLE SCOPE---variable inside the function is a local variable and variable outside the function is global variable
        //when both are present local is given the more scope 
                //TEMPERATURE CONVERSION PROGRAM
            // const textbox=document.getElementById("textbox");
            // const tofahrenheit=document.getElementById("tofahrenheit");
            // const tocelsius=document.getElementById("tocelsius");
            // const result=document.getElementById("result");
            // let temp;
            // function convert(){
            //     if(tofahrenheit.checked){
            //         temp=Number(textbox.value);
            //         // temp=Number(temp);
            //         temp=temp*(9/5)+32;
            //         result.textContent=temp.toFixed(1) +"°F";
            //     }
            //     else if(tocelsius.checked){
            //         temp=Number(textbox.value);
            //         // temp=Number(temp);
            //         temp=(temp-32)*(5/9);
            //         result.textContent=temp.toFixed(1) +"°C"; 
            //     }
            //     else{
            //         result.textContent="Select the unit";
            //     }
            // } 
                        //ARRAYS
    
        // let fruits=["apple","cocunut","guava","banana"];
        // console.log(fruits);
        // let fruits=["apple","cocunut","guava","banana"];
        // fruits.push("watermelon") //added at the last 
        // console.log(fruits);
        // fruits.pop("watermelon")//removed from last
        // console.log(fruits);
        // fruits.pop()
        // console.log(fruits);
        // fruits.unshift("watermelon")
        // console.log(fruits);
        // a=fruits.length;
        // console.log(a);
        // console.log(fruits[3]);
        // console.log(fruits[5]);
        // console.log(fruits.sort());
        // console.log(fruits.sort().reverse());
        // console.log(fruits.indexOf("apple"));
        // console.log(fruits.indexOf("pine"));

        // for(let i=0;i<fruits.length;i++){
        //     console.log(fruits[i]);
        // }
        // for(let fruit of fruits)
        //     {
        //     console.log(fruit);
        // }
                        //SPREAD OPERATOR         (...variableName)
// let numbers=[1,2,3,4,5];
// let maximum=Math.max(numbers); //no output NAN
// let maximum=Math.max(...numbers); //output  5
// console.log(maximum);

// let user= "Nithin Sangsi";
// let letters1=[...user];
// let letters=[...user].join("-");
// console.log(letters);
// console.log(letters1);

// let fruits=["apple","cocunut","guava","banana"];
// let vegetables=["carrot","tomato","beans","gobi"];
// let foods=[...fruits,'milk','eggs',...vegetables];
// console.log(foods);
                    //REST PARAMETERS  --- Opposite to the spread operator
  
// function openfridge(...foods){
//   console.log(...foods);
//}
// function getFood(...foods){
//   return foods;
//}
//    const food1="rice";
//    const food2="Daal";
//    const food3="pickle";
//    const food4="ghee";
//    const food="Red Powder";
// }
// const foods=openfridge(food1,food2,food3,food4);
// const foods=getFood(food1,food2,food3,food4);
// console.log(foods);
// function sum(...numbers){
//     let result=0;
//     for (let number of numbers){
//         result+=number;
//     }
//     return result;
// }
// const total =sum(1,2,3,4,5,6,7,8,9);
// console.log(total);
// function getavg(...numbers){
//     let result=0;
//     for (let number of numbers){
//         result+=number;
//     }
//     return result/numbers.length;
// }
// const avg =getavg(1,2,3,4,5,6,7,8,9);
// console.log(avg);
// function combstr(...strings){
//     // const fullname=("Nithin","Sangsi","Amma","Nanna","Akka");
//     return strings.join("_");
// }
// const fullname=combstr("Nithin","Sangsi","Amma","Nanna","Akka");
// console.log(fullname);
                    //DICE ROLLER GAME
//     function rolldice() {
//         const ndice=document.getElementById("ndice").value;
//         const diceresult=document.getElementById("diceresult");
//         const diceimage=document.getElementById("diceimage");
//         const values=[];
//         const images=[];
// for(let i=0;i<ndice;i++){
//     const value=Math.floor(Math.random()*6)+1;
//     values.push(value);      
//     images.push(`<img src="dice_image/${value}.png" alt="dice${value}">`);
// }
       
// diceresult.textContent=`dice:${values.join(',')}`;
// diceimage.innerHTML=images.join('');
// }
        //RANDOM PASSWORD GENERATER
// function generatepassword(length,includeuppercase,includelowercase,includenumbers,includesymbols)
// {
//     const lowercasechars="abcdefghijklmnopqrstuvwxyz";
//     const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberchars="0123456789";
//     const symbolchars="!@#$%^&*()_+/*-";
//     let allowedchars="";
//     let password="";
//     allowedchars+=includelowercase?lowercasechars:"";
//     allowedchars+=includeuppercase?uppercasechars:"";
//     allowedchars+=includenumbers?numberchars:"";
//     allowedchars+=includesymbols?symbolchars:"";
//     if(length<=0){
//         return(`password length must be atleast 1`);
//     }
//     if(allowedchars.length === 0){
//         return(`atleast 1 set of characters must be selected`);
//     }
//         for(let i=0;i<length;i++){
//             const randomindex=Math.floor(Math.random()*allowedchars.length);
//             password+=allowedchars[randomindex];
//         }
//         return password;
// }
// const passwordlength=10;
// const includelowercase=true;
// const includeuppercase=true;
// const includenumbers=true;
// const includesymbols=true;
// const password=generatepassword(passwordlength,includeuppercase,includelowercase,includesymbols,includenumbers);
// console.log(`Generated password:${password}`);
       //CALLBACK
// hello(leave);
// function hello(callback){
//     console.log("hello");
//     callback();
// }
// function goodbye(){
//     console.log("goodbye");
// }
// function wait(){
//     console.log("wait");
// }
// function leave(){
//     console.log("leave");
//}
// sum(displaypage,1,2);
// function sum(callback,x,y){
//     let result=x+y;
//     callback(result);
// }
// function displaypage(result){
//     document.getElementById("myh1").textContent=result;
// }
// function displayconsole(result){
//     console.log(result);
// }

                                    //ForEach    
                        // let numbers=[1,2,3,4,5];
                        // numbers.forEach(display);
                        // function display(element){
                        //     console.log(element);
                        // }
                        // let numbers=[1,2,3,4,5];           //doubling the number
                        // numbers.forEach(double);
                        // numbers.forEach(display);
                        // function double(element,index,array){
                        //     array[index]=element*2;
                        // }
                        // function display(element){
                        //         console.log(element);
                        //      }
                        // let numbers=[1,2,3,4,5];           //cube of the number
                        // numbers.forEach(triple);
                        // numbers.forEach(display);
                        // function triple(element,index,array){
                        //     array[index]=Math.pow(element,3);
                        // }
                        // function display(element){
                        //         console.log(element);
                        //      }
                        // let fruits=['apple','coconut','watermelon','guava'];          //toUpperCase->✔️      touppercase❌
                        // fruits.forEach(UpperCase);
                        // fruits.forEach(display);
                        // function UpperCase(element,index,array){
                        //         array[index]=element.toUpperCase();
                        //     }
                        // function display(element){
                        //      console.log(element);
                        // }
                        // let fruits=['apple','coconut','watermelon','guava'];           //Captalize the first element
                        // fruits.forEach(Captalize);
                        // fruits.forEach(display);
                        // function Captalize(element,index,array){
                        //         array[index]=element.charAt(0).toUpperCase() + element.slice(1);
                        //     }
                        // function display(element){
                        //      console.log(element);
                        // }
                //.map()
    // const numbers=[1,2,3,4,5,6];
    // const squares=numbers.map(square);
    // console.log(squares);
    // function square(element){
    //     return Math.pow(element,2);
    // }
    // const students=['Nithin','Kanna','Harsha'];
    // const upper=students.map(toUpperCase);
    // console.log(upper);
    // function toUpperCase(element){
    //     return element.toUpperCase();
    // }
    // const students=['Nithin','Kanna','Harsha'];                   //capitalize usin map      dout
    // const upper=students.map(Capitalize);
    // console.log(upper);
    // function Capitalize(element,index,array){
    //     array[index]=element.charAt(0).toUpperCase() + element.slice(1);
    // }
    // const dates=['2024-12-02','2023-05-25','2025-06-24'];
    // const fdates=dates.map(fodates);
    // console.log(fdates);
    // function fodates(element){
    //     const parts=element.split('-');
    //     return `${parts[1]}/${parts[0]}/${parts[2]}`;

    // }
                        //filter
    // let numbers=[1,2,3,4,5,6];
    // let evennum=numbers.filter(isEven);
    // console.log(evennum);
    // function  isEven(element){
    //     return element%2==0;
    // }
    // const ages=[12,25,4,15,34,56];
    // const adults=ages.filter(isadult);
    // console.log(adults);
    // console.log('you can vote');
    // function  isadult(element){
    //     return element>=18;
    // }
    // const words=['Nithin','Kanna','Harsha'];
    // const swords=words.filter(getwords);
    // console.log(swords);
    // console.log('you can vote');
    // function  getwords(element){
    //     return element.length>=6;
    // }
                        //reduce
    // const prices=[5,30,41,25,31,21,12];
    // const total=prices.reduce(sum);
    // console.log(`$${total.toFixed(2)}`);
    // function sum(accumulator,element){
    //     return accumulator+element;
    // }
    // const grades=[55,30,81,25,100,65,92];
    // const max=grades.reduce(getmax);
    // console.log(max,`marks`);
    // function getmax(accumulator,element){
    //     return Math.max(accumulator,element);
    // }
                //function declaration
    // function hello(){
    //     console.log(`Hello`);
    // }
    // setTimeout(hello,3000);
    // function expression
    // const hello=function(){
    //     console.log(`Hello`);
    // }
    // hello();
    // setTimeout(function(){              //function is passed as an argument
    //            console.log(`Hello`);
    // },3000);
    //const numbers=[1,2,3,4,5];
    // const squares=numbers.map(function(element){
    //     return Math.pow(element,2);
    // });
    // console.log(squares);
    // const evennum=numbers.map(function(element){
    //     return element%2==0;
    // });
    // console.log(evennum);
    // const total=numbers.reduce (function(accumulator,element){
    //     return accumulator+element;
    // });
    // console.log(total);
                        //Arrow Functions
    // const hello =() => console.log('hello');hello();    
    // const hello =(name) => console.log(`Hello ${name}`);hello("Nithin");    
    // const hello =(name,age) => {console.log(`Hello ${name}`)
    //                             console.log(`i am ${age} years old`)};hello("Nithin",21);    
    //setTimeout(() => console.log("Hello"),3000);
    //   const numbers=[1,2,3,4,5,6];
    //   const squares=numbers.map((element) => Math.pow(element,2));
    //   const evennum=numbers.filter((element) => element%2===0);
    //   const total=numbers.reduce((accumulator,element) => accumulator+element);
    //   console.log(squares);
    //   console.log(evennum);
    //   console.log(total);
                        //OOPS    ------Objects
    // const person={
    //     firstname:"Nithin",
    //     lastname:"Sangsi",
    //     age:21,
    //     isBillionaire:true,
    //     sayHello :() => console.log(`Hello i am ${this.firstname}`)
    //     }
    // console.log(person.firstname);
    // //console.log(this.firstname);
    // console.log(person.lastname);
    // console.log(person.age);
    // console.log(person.isBillionaire);
    // console.log(`i am ${person.firstname} ${person.lastname} , i am ${person.age} years old and i am youngest billionaire:${person.isBillionaire}`);
    // person.sayHello();
                        //THIS            this keyword is only used inside function statements
    // const person={
    //     firstname:"Nithin",
    //     lastname:"Sangsi",
    //     age:21,
    //     isBillionaire:true,
    //     // sayHello :() => console.log(`Hello ${this.firstname}`)    //this keyword will not work for arrow functions
    //     sayHello :function (){console.log(`Hello i am  ${this.firstname} ${this.lastname}`)} 
    //     }
    // // console.log(person.firstname);
    // // //console.log(this.firstname);
    // // console.log(person.lastname);
    // // console.log(person.age);
    // // console.log(person.isBillionaire);
    //  console.log(`i am ${person.firstname} ${person.lastname} , i am ${person.age} years old and i am youngest billionaire:${person.isBillionaire}`);
    // person.sayHello();
                        //Constructers
    // function car(make,model,year,color){
    //     this.make=make,                //    ,  /   ;
    //     this.model=model,
    //     this.year=year,
    //     this.color=color,
    //     this.drive=function(){
    //         console.log(`i love to drive ${this.model}`);
    //     }
    // }
    // const car1= new car("Rolls Royce","Phantom",2024,'white');
    // console.log(car1.make);
    // console.log(car1.model);
    // console.log(car1.year);
    // console.log(car1.color);
    // car1.drive();
                    //Classes
//     class product{
//         constructor(name,price){
//             this.name=name;
//             this.price=price;
//         }
//         displayproduct(){
//             console.log(`product name is : ${this.name}`);
//             console.log(`product cost is : ${this.price} Rupees`);
//         }
//         calculatetotal(salestax){
//             return this.price + (this.price*salestax);

//         }
// }    
//     const p1=new product("T-Shirt",650);
//     p1.displayproduct();
//     //const salestax=0.05;
//     const total=p1.calculatetotal(0.05);
//     console.log(`total price(with tax) is ${total.toFixed(2)} Rupees`);
                        //Static keyword
// class mathutil{
//     static PI=3.14159;
// }
// //const mathutil1=new mathutil();
// console.log(mathutil.PI);
// class mathutil{
//     static PI=3.14159;
//     static getdiameter(radius){
//         return radius*2;
//     }
//     static circlecircumference(radius){
//         return radius*2*this.PI;
//     }
//     static getarea(radius){
//         return radius*radius*this.PI;
//     }
// }
// console.log(mathutil.getdiameter(10));
// console.log(mathutil.circlecircumference(10));
// console.log(mathutil.getarea(10));
// class user{
//     static usercount=0;
//     constructor(username){
//         this.username=username;
//         user.usercount++;
//     }
// }
// const u1=new user("Nithin");
// const u2=new user("Harsha");
// const u3=new user("Kanna");

// console.log(u1.username);
// console.log(u2.username);
// console.log(user.usercount);
// class user{
//     static usercount=0;
//     constructor(username){
//         this.username=username;
//         user.usercount++;
//     }
//     sayhello(){
//         console.log(`Hello, my username is ${this.username}`);
//     }
//     static getusercount(){
//         console.log(`There are ${user.usercount} users online now`);

//     }
// }
// const u1=new user("Nithin");
// const u2=new user("Harsha");
// const u3=new user("Kanna");
// console.log(u1.username);
// u1.sayhello();
// console.log(u2.username);
// u2.sayhello();
// console.log(u3.username);
// u3.sayhello();
// console.log(user.usercount);
// console.log(user.getusercount());
                    //INHERITANCE
// class animal{
//     alive=true;
//     eat(){
//         console.log(`The ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`The ${this.name} is sleeping`)
//     }
// }
// class Rabbit extends animal{
//     name="rabbiiee";
//     run(){
//         console.log(`The ${this.name} is runing`)
//     }
// }
// class Fish extends animal{
//     name="Rohu";
//     swim(){
//         console.log(`The ${this.name} is swiming`)
//     }
// }
// class Hawk extends animal{
//     name="flyier";
//     fly(){
//         console.log(`The ${this.name} is flying`)
//     }
// }
// const rabbiiee= new Rabbit();
// const Rohu= new Fish();
// const flyier= new Hawk();
// console.log(rabbiiee.alive);
// rabbiiee.eat();
// rabbiiee.sleep();
// rabbiiee.run();
// flyier.fly();
// flyier.run();    //error
// Rohu.swim();
                            //Super Key
                    // class animal{
                    //     constructor(name,age){
                    //         this.name=name;
                    //         this.age=age;
                    //     }
                    // }
                    // class rabbit extends animal{
                    //     constructor(name,age,runspeed){
                    //         super(name,age);
                    //         this.runspeed=runspeed;
                    //     }
                    // }
                    // const rabbit1=new rabbit("rabi",3,35);
                    // console.log(rabbit1.name);
                    // console.log(rabbit1.age);
                    // console.log(rabbit1.runspeed);
// class animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     move(speed){ 
//         console.log(`The ${this.name} moves at a speed of ${speed} Kmph`);
//     }
// }
// class rabbit extends animal{
//     constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed=runspeed;
//     }
//     run(){
//         console.log(`The ${this.name} can run`);
//         super.move(this.runspeed);
//     }
// }
// const rabbit1=new rabbit("rabi",3,35);
// console.log(rabbit1.name);
// console.log(rabbit1.age);
// console.log(rabbit1.runspeed);
// rabbit1.move(36);
// rabbit1.run();
                //Getters and Setters
// _ before the variable name denotes it is private
// class rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     set width(newwidth){
//         if(newwidth > 0){
//             this._width=newwidth;
//         }
//         else{
//             console.error("width must be positive number");
//         }
//     }
//     set height(newheight){
//         if(newheight > 0){
//             this._height=newheight;
//         }
//         else{
//             console.error("height must be  positive number");
//         }
//     }
//     get width(){ 
//         return `${this._width.toFixed(2)}cm`;
//     }
//     get height(){
//         return `${this._height.toFixed(2)}cm`;
//     }
//     get area(){
//         return  `${(this._width*this._height).toFixed(2)}cm^2`;
//     }
// }
// const r1=new rectangle(5,6);
// console.log(r1.width);
// console.log(r1.height);
// console.log(r1.area);
// class person{
//     constructor(fname,lname,age){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//     }
//     set fname(newfname){
//         if(typeof newfname ==="string" && newfname.length>0){
//             this._fname=newfname; 
//         }
//         else{
//             console.error("width must not be number");
//         }
//     }
//     set lname(newlname){
//         if(typeof newlname ==="string" && newlname.length>0){
//             this._lname=newlname;
//         }
//         else{
//             console.error("width must not be number");
//         }
//     }
//     set age(newage){
//         if(newage>0 && typeof newage ==="number"){
 //             this._age=newage;
//         }
//         else{
//             console.error("age must not be  non negatve number");
//         }
//     }
//     get fname(){
//         return `My fname is ${this._fname}`;
//     }
//     get lname(){
//         return ` My name is ${this._lname}`;
//     }
//     get fullname(){
//         return  ` My fullname is ${(this._fname+" "+this._lname)}`;
//     }
//     get age(){
//         return  ` My age is ${this._age}`;
//     }

// }
// const f1=new person("Nithin","Sangsi",21);
// console.log(f1.fname);
// console.log(f1.lname);
// console.log(f1.fullname);
// console.log(f1.age);



