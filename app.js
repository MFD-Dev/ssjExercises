// Level 4 - Unit 5 "this" keyword

// So that’s it. The this keyword just refers to the object that a function belongs to.

// var car = {
// 	speed: 30,
// 	drive: function(){
// 		var speed = this.speed;
// 		console.log("I'm driving at " + speed + " mph");
// 	}
// };

// car.drive();

// var car = {
//     speed: 30,
//     drive: function() {
//         var speed = this.speed;
//         console.log("I'm driving at " + speed + " mph"); 
//     },
//     driveFaster: function() {
//         this.speed += 10;
//         this.drive();
//     }
// }

// car.drive();

// car.driveFaster();


// What happens if you use this in a function that doesn’t belong to an object?

// Good question!

// If a function doesn’t belong to any object you’ve defined, then it belongs to the window by default.

// Therefore, if you use the this keyword in a function that’s not inside any object, then the value of this will be window.

// document.getElementById('mydiv').onclick = function () {
//     this.style.color = 'red';
// }


// What does the onclick method belong to? It belongs to your div: document.getElementById('mytext').

// Therefore, this simply gives you your div.

// This is very convenient in situations when you need to refer to the thing that was clicked.




// 1.    Create an object called shoe.

//     The object should have a property called size initially set to 5.

//     Create two methods: bigger and smaller that increase or decrease the size of the shoe by 1, respectively.

//     Remember to use the this keyword!

//     When you’re comfortable, repeat it once more without looking at an example.

var shoe = {
    size: 5,
    bigger: function() {
        var size = this.size += 1;
        console.log('I wear ' + bigger)
    },
    smaller: function() {
        this.size -= 1;
    }
}
// console.log(shoe.bigger)

// 2.    Create a div whose background turns green when you click on the div.

//     Remember to use the this keyword.

//     When you’re comfortable, repeat it once more without looking at an example.

document.getElementById('mydiv').onclick = function () {
    this.style.color = 'red';
}


// document.getElementById('btn').onclick = function () {
//     this.style.color = 'red';
//     document.getElementById('output').onkeypress = function () {
//         this.style.backgroundColor = 'blue';
//     }
// }











////////////////////////////////////////
// Level 4 - Unit 4
// Objects: Handle data neatly and conveniently


// 1. Creating an object:
// Type the following code 3 times. Then type it again until you don’t need to look at an example.
// var hat = {size: 3, color: 'green'}
// var hat = {size: 3, color: 'green'};
// var hat = {size: 3, color: 'green'};
// var hat = {size: 3, color: 'green'};

// 2. Getting an object property in two different ways:
// Type the following 3 times. Then type it again until you don’t need to look at an example.
// hat.size
// hat['size']

// hat.size
// hat.['size']
// hat.size
// hat.['size'];
// hat.size;
// hat.['size'];

// 3. Create an object called car with three properties: color, size, and engine.
// Show the car’s color in a div. Then try the other properties.
// var car = {
//     color: 'black',
//     size: 'medium',
//     engine: 'V8'
// };
//  console.log(car.color)
//  document.getElementById('mydiv').innerHTML = car.color;

// var mydiv = document.getElementById('mydiv')
// var car = {
//     color: 'black',
//     size: 'medium',
//     engine: 'V8'
// };

//  document.getElementById('btn').onclick = function () {
//     document.getElementById('mydiv').innerHTML = car.color;
//  }

// 4. Create an object called car with the following properties and methods:
//     color: Use any color.
//     size: Use any size.
//     drive: This should be a method that shows the message “I’m driving!” inside an HTML span.

// Show the color and size in a div. Then run the car.drive() method.

// Repeat this exercise one more time without peeking at an example. If you need to peek, that’s okay, but when you’re done, restart the example until you can do it without peeking.

// var mydiv = document.getElementById('mydiv');

// var car = {
//     color: 'black',
//     size: 'V8',
//     drive: function(message) {
//         document.getElementById('display').innerHTML = "I'm driving!";
//         // console.log('I\'m driving!');
//     }
// };

// document.getElementById('btn').onclick = function () {
//     mydiv.innerHTML = car.color;
  
// }

// const myArray = Object.values(car);
// document.getElementById('mydiv').innerHTML = myArray[0-1]




// 5. 

// Create an object called person with a property called favoriteColor and a method called greet.

// The greet method should take in a parameter called name, and it should show a greeting inside a div.

// The greeting should be something like, "Hello [name]!"

// If you’ve done it correctly…

// You should be able to run person.greet('Bob') and see “Hello Bob!” in a div.

// Once you’re comfortable with this code, try it again until you can do it without peeking at an example.

// var person = {
//     favoriteColor: 'yellow',
//     greet: function (name) {
//         document.getElementById('mydiv').innerHTML = "Hello " + name + "!";
//     }
// }
// person.greet('Billy');
// ///////////

// var shirt = {
//     size: 'medium',
//     color: 'red',
//     sleevelength: 6
// };

// // Objects: Handle data neatly and conveniently
// console.log(shirt.size);
// console.log(shirt['size']);

// // You’ll want to use the bracket notation if you need to use a variable or non-standard text characters in the property name.
// var language = 'English';
// var greeting = {
//     English: 'hi',
//     Spanish: 'hola'
// };

// console.log(greeting[language]);

// As you work with more data, you’ll be able to appreciate using an object like this instead of having a long set of if statements (if English … , if Spanish … , if French … , etc).


// What is an object key?
// If you hear anyone talking about keys in an object, a key is just another word for a 
// property name.
// var obj = { key : 'value' };
// Now you know what it means, so you won’t get confused if you hear it.

// Benefits of objects
//     Objects are a clear and organized way to store information.
//     Objects allow you to use up fewer variable names.

// var settings = { size: 'big', version: 2, color: 'oranges'};
// // versus
// var size = 'big';
// var version = 2;
// var color = 'orange';

// A function inside a object is a Method.

// var bird = { 
//     color: 'blue',
//     face: 'so majestic',
//     fly: function () {
//         console.log('I\'m flying!')
//         // console.log("I'm flying!")
//     }
// };

// bird.fly();

// var person = {
//     name: 'Luigi',
//     greet: function (otherPerson) {
//         console.log('Hello ' + otherPerson);
//     },
//     favoriteColor: 'green'
// };

// person.greet('Bowser');


//////////////////////////////////////////////////////////////////////////////////
// Level 4 - Unit 3

// 1.    Create an array with whatever you want to put in it.

//     Using push and pop, add and remove things from the end of that array, and show the resulting array on screen.

//     Try push and pop each 3 times.

// 2.    Create an array with whatever you want to put in it.

//     Using unshift and shift, add and remove things from the beginning of that array, and show the resulting array on screen.

//     Try unshift and shift each 3 times.

//  3.   Using any references you’d like, figure out how to reverse the order of the things in an array.

//     Create an array, reverse it, and show it in a div or span.


// var newNames = ['Ace', 'King', 'Queen']

// newNames.unshift('Kermit')

// console.log(newNames)

// newNames.shift();

// console.log(newNames)

// newNames.shift();

// console.log(newNames)

// newNames.unshift('Hello', 'There');

// console.log(newNames)

// newNames.push('Kermit');

// console.log(newNames)



// var names = ['Optimus', 'Buzz', 'Elmo' ];
// console.log('names before the push: ' + names);

// names.push('Kermit');
// console.log('names after the push: ' + names);

// names.pop();
// console.log('names ater the pop: ' + names);


// var names = ['Optimus', 'Buzz', 'Elmo' ];

// names.unshift('Kermit');
// console.log('names after unshift:  ' + names);

// names.shift();
// console.log('names after shift: ' + names);


// Tip: pop and shift tell you what they removed from the array
// One useful feature of pop and shift is that their returned value tells you what they just removed from the array.

// var deck = [ 'Ace', 'Queen', 'Joker']
// console.log('deck of cards before the pop: ' + deck);

// var pickedCard = deck.pop();

// console.log('deck of cards after the pop: ' + deck);
// console.log('picked cared is: '+ pickedCard)


// var items = ['a', 'b', 'c']

// var newItems = [' clothes' , ' milk', ' honey']
// var mydiv = document.getElementById('mydiv');


// document.getElementById('mydiv').innerHTML = newItems;

// var items = [' summer', ' honey'];

// document.getElementById('mydiv').innerHTML = items.length

// items[0] = ' spring';
// items[1] = ' fall'
// console.log(items)

// document.getElementById('mydiv').innerHTML = items; 
// console.log(;// 
//     dodocument.getElementById('mydiv').in.innerHTML = newItems[]i;'What is


// var newItems = [' show', ' me', ' the bread'];

// for (var i = 0; i < newItems.length; i++) {
//     // console.log(newItems[i])
//     document.getElementById('mydiv').innerHTML = 'What is ' + newItems[i];
//     console.log(newItems[i])
// }

// var mydiv = document.getElementById('mydiv')
// var yellow = document.getElementById('mydiv').style.backgroundColor = 'yellow';
// var blue = document.getElementById('mydiv').style.backgroundColor = 'blue';
// function yellow() {
//     var yellow = document.getElementById('mydiv').style.backgroundColor = 'yellow';
// }
// function blue() {
//     var yellow = document.getElementById('mydiv').style.backgroundColor = 'blue';
// }
// document.getElementById('btn').onclick = function () {
//     yellow() 

// }
// document.getElementById('btn2').onclick = function () {
//     blue();
// }


// function loop(name) {
//     for(var i = 0; i < newItems.length; i++) {
//         mydiv.innerHTML = 'What is ' + newItems[i];
//     }
// }
// document.getElementById('btn').onclick = function () {
//     loop(newItems)
// }
// var name = ['show', 'me', 'the bread'];
// function loop(name) {
//     for(var i = 0; i < name.length; i++) {
//         mydiv.innerHTML = 'What is ' + name[i];
//     }
// }
// document.getElementById('btn').onclick = function () {
//     loop(name)
// }




// var names = ['Bowser', 'Ganon', 'Schebulock'];

// for(var i = 0; i < names.length; i++) {
//     console.log('Hello there ' + names[i]);
// }





// var names  = ['Bowser', 'Ganon', 'Schebulock'];
// // console.log(names[2]);

// // console.log(names.length);

// names[6] = 'Bob';
// console.log(names[1]);
// console.log(names.length)


// var x = 'this is x';

// var stuff = [
//     'strings work',
//     12,
//     x,
//     ['inner array item 1', 'inner array item 2'],
//     'last item'
// ];

// console.log( stuff[0]); 
// console.log(stuff[3]);

// var stuff = [
//     'first item',
//     function () {
//         alert('hi')
//     },
//     'last item'
// ];

// console.log(stuff[0]);
// console.log(stuff[1]);

// stuff[1]();