//# FILTER QUESTION

//que 1.
// function filter_array_values(arr) {
//     arr = arr.filter(isEligible);
//     return arr;
//   }
  
//   function isEligible(value) {
//     if(value !== false || value !== null || value !== 0 || value !== "") {
//       return value;
//     }
//   }
  
//   console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

// ques 2.

// const arr = [2, 3, 6, 8, 10, 4, 5];

// // filter odd value
// const output = arr.filter(function isOdd(x){
//     return x % 2;  //odd number
//     //return x % 2 == 0;  // Even number
// })
// console.log(output);


// que 3.

//const arr = [2, 3, 6, 8, 10, 4, 5];
//const output = arr.filter(function (item){
//const output = arr.filter((item) => item > 4) // using ARROW function
    //return item > 4;
//})
//console.log(output);


////
//Use the filter() Method in JavaScript
//Q-1
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// var result = words.filter(word => word.length > 6);

// console.log(result);
// //Q-2
// var creatures = [
//     {name: "Shark", habitat: "Ocean"},
//     {name: "Whale", habitat: "Ocean"},
//     {name: "Lion", habitat: "Savanna"},
//     {name: "Monkey", habitat: "Jungle"}
//   ];
//   var aquaticCreatures =  creatures.filter(function(creature) {
//     return creature.habitat == "Ocean";
//   });
//   //Q-3
//   console.log(aquaticCreatures);
//   var numbers = [1, 3, 6, 8, 11]
//   var greaterThanSeven = numbers.filter(function(number) {
//     return number >5;
//   });
  
//   console.log(greaterThanSeven);
//   //Q-4
// //   var products = [{stock: 100, price: 20}, 
// //     {stock: 50, price: 180}, 
// //     {stock: 1000, price: 250}];
// //  var shortlistedProducts = products.filter(filter);
// //  console.log(shortlistedProducts);

//  var marks=[50,40,45,37,20];  
  
// function check(value)  
// {  
//   return value>30;    
// }  
  
// document.writeln(marks.filter(check)); 
// console.log(marks.filter(check));
// //Q-5
// function test(element, index, array) {  
//     return element>=25;  
//   }  
//   document.writeln([21,32,21,43].filter(test));
// console.log([21,32,21,43].filter(test));
// //Q-6
// var numbers = [-22,-19,-16, -6, -10, 0, 1, 3, 5, 12, 15];

// var positive_array = numbers.filter(function(value) 
// {
//     return value >= 0;
//  });

// console.log(positive_array);
// //Q-7
// let freelancers = [{name: "Sunny", skill: "JavaScript"},{name: "Bitu", skill: "Python"},
// {name: "Sonu", skill:"JavaScript"}];

// let javascript_freelancers = freelancers.filter(function(freelancer) 
// {
//     return freelancer.skill == "JavaScript";
//  });

// console.log(javascript_freelancers);
// //Q-8
// var ages = [32, 33, 16, 40];

// ages.filter(checkAdult)    

// function checkAdult(age)
// {
//   return age >= 18;
// }
// console.log(ages.filter(checkAdult));
//   //Q-9
//   var students = [
//     {
//       name: 'Sonuj',
//       score: 50
//     },
//     {
//       name: 'Bitu',
//       score: 45
//     },
//     {
//       name: 'Ram',
//       score: 35
//     },
//     {
//       name: 'Mohan',
//       score: 60
//     }
//   ]
//   var studentsThatPassed = students.filter(function(student)
//   {
//     return student.score >= 50
//   })
//   console.log(studentsThatPassed);
//   //Q-10
// var places = ['Africa', 'Asia', 'Europe', 'Australia'];

// var overIndex = places.filter(function(place, index){
//   return index > 1;
// })

// console.log(overIndex);

////////////////////////////////////////---->>>>> MAP(method)

//Using map() method in JavaScript
//Q-1
// var array1 = [1,2, 4, 8, 12]
// var map1 = array1.map(x => x * 2);

// console.log(map1);
// //Q-2
//  var kvArray = [{key: 1, value: 10},
//     {key: 2, value: 20},
//     {key: 3, value: 30}]

// var reformattedArray = kvArray.map(obj => {
// var rObj = {}
// rObj[obj.key] = obj.value
// return rObj
// });
// console.log( reformattedArray);
// //Q-3
// var numbers = [3,6,8 ]
// var doubles = numbers.map(function(num)
//  {
//   return num * 2
// });
// console.log(doubles);
// //Q-4
// let map = Array.prototype.map
// let a = map.call('Hello World', function(x)
//  {
//   return x.charCodeAt(0)
// });
// console.log(a);
// //Q-5
// var numbers = [1, 2, 3, 4, 5]
// var filteredNumbers = numbers.map(function(num, index) {
//   if (index < 3) {
//      return num
//   }
// })
// console.log(filteredNumbers);

// Reduce--->>>


// const number = [15, 5, 2, 1, 4];
// const sum = number.reduce(myfunction);

// function myfunction(total, value){
//     return total+value
// }
// console.log(sum);

// Arrow Function ---->>>>>>>>>>>>>>>>>>>>.
// 1.->>

// const materials = ['Hydrogen','Helium','Lithium', 'Beryllium'];
  
// console.log(materials.map(material => material.length));

// 2.-->>>

const stringLength = str => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")
  
