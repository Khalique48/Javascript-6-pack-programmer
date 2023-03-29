// console.log(60 % 7)
// console.log(15 != 15);
// console.log(12 !== "12");
// let iceCream = Number(prompt("Type a number"));

// if(iceCream === 10){
//     console.log("Ice-Cream is Blue Lagoon");

// }
// else if (iceCream===30){
// console.log("Ice-Cream is cone");
// }

// switch (iceCream) {
//     case 10:
//     console.log("Ice-Cream is Blue Lagoon");
//         break;
//     case 30:
//     console.log("Ice-Cream is Blue cone");
//     default:
//         console.log("Ice-Cream is Random");
//         break;
// }
// for (let i = 0; i < 10; i = i + +) {
//     console.log(Math.random());
//     console.log("hii");
//     console.log("hello");
//     console.log("Fuck off");
//     console.log("hehehe");
//     console.log("good");

// }
// do {
//     console.log("hello");
//     ++i;
//  } while(i<10);

// let arr = [1,2,3,,5,6,7,8,9,10];
// arr.includes(4)
// console.log(arr);
// console.log(arr.includes(4));
// const arr = [];

//     arr.push (20)
//     arr.push (20)
//     arr.push (0)
//     arr.push (20)
//     arr.push (20)
//     arr[1] = 123
//     console.log(arr);
// let a = 23;
// let b = 24;
// let c = 25;
// let d = 26;


// let result = (23*10+b*10+c*10)/10;
// console.log(result);
// let result2 = (45*10+45*10+45*10)/10;
// console.log(result2);

// const myfunc = function printTheValue (a=0, b=0, c = 0){
    
//     let result = (a * 10 + b * 10 + c * 10)/10;
//      return  result;    
// };

// function intro (name= "Sample", Channel = "Youtube"){
//     console.log(`hi my name is ${name}.Asap recent work please Subscribe my channel, What are You Waiting for? My Channel Name is ${Channel}`);

//     console.log(`My income is ${myfunc(1,1,1)}`);
// };

/*dom Manipulation*/

// function totalOfArray (arr=[]){
//    let total = 0;
//    for(let i = 0; i<arr.length; i++){
//     total = total + arr[i];
//     console.log(arr[i]);

//    }
//    return total;
// }

// let a = 20;
// {
//     var b = 30;
//     console.log(a);
// }
// console.log(a);
// console.log(b);


// const arr = document.body.children;
// const newArr = Array.from (arr);

// for (let i = 0; i<newArr.length; i++){
//     console.log(newArr[i]);
// }

// const thisOne = document.getElementsByTagName("span");

// thisOne[0].style.backgroundColor = "navy";
// thisOne[0].style.Color = "#fff";
// thisOne[0].style.font = "100 1.5rem 'Roboto'";


// const myBtn = document.getElementById("myBtn");

// myBtn.style.backgroundColor = "blue";
// myBtn.style.color =" #fff";
// myBtn.style.border = "none";
// myBtn.style.padding = "2vmax 4vmax";
// myBtn.style.cursor = "pointer";

// const btn = document.querySelector(".okay")
// btn.innerText= "none"

// console.log(myBtn.setAttribute("class","thisisBtn"));

// const myBtns = document.querySelectorAll("button");
// myBtns[1].onclick = deleteHeading
// myBtn.onclick = bringMeHeading



// function bringMeHeading() {
//     const h2 = document.createElement("h2");
//     h2.innerText = "asds";
//     document.body.prepend(h2)
// }
// function deleteHeading() {
//     const h2 = document.querySelector("h2");
//     h2.remove();
   
// }



//   console.log(thisOne);

/*callBack Function*/


// const myFunc =  (a, b) => {
//     console.log(a * b);
// };

// myFunc(5,5);

// const arr = [3, 4, 6, 8, 10];



// const result = arr.find((value,index) => {

//     if (value > 4){
//      return value;
//     }

 
// });

// const result = arr.find((value, Index) => {

//     if (value < 4){
//         return value;
//     }
// });

// const result = arr.every((value, Index) => {

//     return value < 3;
// });


// const result = arr.every((value, index) => {
    
//     return value <= 3;
// });

// for (let value of arr) {
//     value += 3;
//     console.log(value);
// }
// console.log(arr);

// let totalSum = 0;
// const result = arr.map((value, index) => {
// return(value + 20);


// });
// console.log(result);
// console.log(arr);

// const result = arr.reduce((prev,value,index,) => {
   
//     return prev + value;
   

// });
// console.log(result);

/*para generator project */
// const input = document.getElementById("numOfwords");

// const container = document.querySelector(".container")


// const generateWord = (n) =>{
//   let text = "";
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  
//   for (let i = 0; i <n; ++i){
//     const random = ( Math.random()*(letters.length - 1)).toFixed(0)
//     text += letters[random];
//     console.log(random);
//   }
//   return text;
// };

// console.log(generateWord(5));

// let numOfwords;
// const generatePara = () => {
//   numOfwords =  Number(input.value);

//   const para = document.createElement("p")

//   let data = "";

//   // console.log(generateWord((Math.random()*15).toFixed(0)));
//   for (let i = 0; i< numOfwords; i++){

//     const randomNumber = (Math.random() * 15).toFixed(0);
//     data += generateWord(randomNumber);
//     data += " ";
//   }
//   console.log(data);
//   para.innerText = data;
//   para.setAttribute("class", "paras");

//   container.append(para)
// };




// /* Get Color project*/

// const zodiac = document.getElementById("zodiac");

// const body = document.body;

// const changeBackground = () =>{
// switch (zodiac.value) {
//   case "aries":
//         body.style.backgroundColor = "#fc0303";
//     break;
//     case "tarus":
//         body.style.backgroundColor = "#03fc6f";
//     break;
//     case "gemini":
//         body.style.backgroundColor = "#fce514";
//     break;
//     case "cancer":
//         body.style.backgroundColor = "#fffcf7";
//     break;
//     case "leo":
//         body.style.backgroundColor = "#994ead";
//     break;
//     case "virgo":
//         body.style.backgroundColor = "#eb8d57";
//     break;
//     case "libra":
//         body.style.backgroundColor = "#579eeb";
//     break;
//     case "scorpio":
//         body.style.backgroundColor = "#fc88d8";
//     break;
//     case "sagittarius":
//         body.style.backgroundColor = "#FFC0CB";
//     break;
//     case "aquarius":
//         body.style.backgroundColor = "#FF1493";
//     break;
//     case "capricon":
//         body.style.backgroundColor = "#245ED2";
//     break;
//     case "pisces":
//         body.style.backgroundColor = "#24D298";
//     break;

//    default:
//     break 
// }
  
// };

const addName = () => {
  let text = document.getElementById("name").value
  console.log(text)
  const container = document.getElementsByClassName('container')[0]
  container.innerHTML += `<div class="tag">
  Hey, I am ${text}
</div>`
}