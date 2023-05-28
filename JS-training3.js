
// Calculator

// function add (num1,num2) {
//     return(num1 + num2);
// };

// function subtract (num1,num2) {
//     return(num1 - num2);
// };

// function devide (num1,num2) {
//     return(num1 / num2);
// };

// function multiply (num1,num2) {
//     return(num1 * num2);
// };

// function calculator (num1,num2,e2) {
//     return e2(num1,num2);
// };

// calculator(2,4,devide)


// Object.object

// const housekeeper1 = {
//     age : 29,
//     experience : 2,
//     languages : ["French","English","Spanish"]
// }


// Constructor factory

// function HousekeeperFac(name, age, height, weight) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.weight = weight;
//     this.clean = function () {
//         alert("Cleaning in progress...");
//     };
// };
// const h1 = new HousekeeperFac ("Cara",19,1.7,65);
// h1.clean()


// function listener (happenedEvent,clb) {
//     var goog = {
//         es2: "23x",
//         kmil: "2311",
//         ox3s: "2kcs0"
//     };
//     if (happenedEvent === goog.es2) {
        
//     };
// };


// function foo(i) {
//   if (i < 0) {
//     return;
//   }
//   console.log('begin: ' + i );
//   foo(i - 1);
//   console.log('end: ' + i );
// }
// foo(3);


//  function foo(i) {
//     console.log(i, 'called');
//   if (i < 0) {
//        return `${i} is returning`;
//     } else {
//        console.log('continue');
//     }
// console.log('begin:' + i);
// const value = foo(i - 1);
// console.log(value);
// console.log(i, 'returned');
// console.log('end:' + i);
// }
// foo(3);


// function outside() {
//   const x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }
// console.log(outside()(10));  //20 (instead of 10)

// Creating a listener

// function listener (happenedEvent,clb) {
//     const goog = {
//         es2: "23x",
//         kmil: "2311",
//         ox3s: "2kcs0"
//     };
//     if (happenedEvent === goog.ox3s) {
//       clb(goog);
//     };
// };
// listener ("2kcs0",function(cd4) {
//   console.log(cd4);
// });


// 