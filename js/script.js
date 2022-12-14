"use strict"





//Задача № 1
function showName(){
   console.log( "Василь");
}
setTimeout(showName, 0);
console.log('Микола');
//Задача № 2
showMessage();
function showMessage(){
   console.log('Повідомлення');
};
//Задача № 3
//showMessage();
//let showMessage = function(){
//   console.log('Повідомлення');
//}
//Задача № 4
if (2 > 1){
   function showMessage(){
      console.log('Повідомлення');
   }
}
showMessage();
























//Задача №1
 let arr = ["Nastia", "Veka", "ola"];
 let newArr = arr;
 newArr.push('Petro');
 console.log(arr.length);
 console.log(arr);

//Задача №2
let users = ['Iван', 'Іштван'];
users.push('Оля');
let firstName = 'Іштван';
let twoName = 'Петро';
users.forEach((arrName, index)=> {
   if(arrName === firstName){
      users.splice( index, 1, twoName )
   }
});
console.log(users)
users.shift();
console.log(users)
users.unshift('Марія', 'Павло');
console.log(users)



//Задача №3

let arrSpl = ['Іван','Іштван', "Ola"];
let arrRemove = arrSpl.splice(1, 1);
console.log(arrRemove)

//Задача №4
let str = 'Іван,Іштван,Ola'
let arrStr = str.split(',');
console.log(arrStr);

//Задача №5
let arrTwo = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function(previoVale, item, index, array){
  console.log(previoVale);
})






const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);



//Задача №1
//const elementData  = document.querySelector('[data-say-hi]');
//console.log(elementData.dataset.sayHi);

////Задача №2
//const listLi = document.querySelectorAll('.list > li');
//console.log(listLi[1]);


////Задача №3
//const like = document.querySelectorAll('.like');
//console.log(like);


//////Задача №4
//const list = document.querySelector('.listTexst');
//list.insertAdjacentHTML(
//	'beforeend', 
//	`<li>Текст</li>`
//);
//console.log(list)




//}
const block = document.querySelector('.size-page__answers');


//Задача №1
const elementClientWidht = htmlElement.clientWidth;
console.log(elementClientWidht);
const windowWhidht = window.window.innerWidth;
console.log(windowWhidht);
const widhtScroll = elementClientWidht - windowWhidht;
console.log(widhtScroll);

//Задача №2
function scrollTop(){
  window.scrollTo({
    top: 100,
    left:0,
    behavior: "smooth"
  });
}
setTimeout(scrollTop, 1000);
//Задача №3
const blockOne = document.querySelector('.element--green');
const blockTwo = document.querySelector('.element--blue');
const blockThree = document.querySelector('.element--red');
const getBlockOne = blockOne.getBoundingClientRect();
const getBlockTwo = blockTwo.getBoundingClientRect();
const getBlocThree = blockThree.getBoundingClientRect();
console.log(getBlockOne);
console.log(getBlockTwo);
console.log(getBlocThree);


