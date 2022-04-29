.env file: see 'yielp-campground' project: .env and index.js files
- we store all sensitive information in that file so it is not being
upload in github.
- Dotenv is a zero-dependency module that loads environment variables 
from a .env file into process.env. 
Storing configuration in the environment separate from code 
is based on The Twelve-Factor App methodology.
$> npm i dotenv

VSCode:
	command + shift + 'p' COMMAND PALLETE
    COMMAND + ",": settings
    // * top right corner there is an icon that leads to the .json file

    EMMET
    - built in VS-CODE
    https://emmet.io/
ub
    plugins:
    	Live Server 	Ritwick Dey
    	Usage: right click > 
    	// css peek
    	// color highlight
    	// bracker pair colorizer 1 or 2
    	// ES7 React/Redux/GraphQL/React-Native snippets

INSERT JS 
	a) Code inside of the script tag:
		<script type="text/javascript">
			[YOUR_SCRIPT_HERE] 
		</script>
	
	b)*Reference an external file 
	(place this <script> at the bottom in the <body> tag)
		*  it can be cached by the browser and downloaded only once
		<!-- absolute path from the root of our project -->
		<script src="/home/script.js"></script>
 		<!-- relative path to our current folder -- >
 		<script src="script.js"></script>
		<!-- full url to the jquery library --> 
		<script src="https://cdnjs.cloudflare.com/ ajax/libs/jquery/3.3.1/core.js"></script>

PRIMITIVES
	A primitive is a value is simply data that is not an Object and does not have methods.

	• string
	• number
	• boolean
	
	• NaN -> represents a value consider as number but that is not a number
	typeof NaN
	'number'
	typeof 0/0
	NaN

	• null : intentional lack of value
	typeof null
	'object'
	let loggedInUser = null;

	• undefined
	• symbol (the latest addition)

EQUALITY
 == checks for equality of values, but not equality of type
 !=

 ===
 !==

 TRUTHYNESS || FALSYNESS
 false 0 null undefined "" NaN => FALSY VALUES

VARIABLES
	var : it makes is value available globally, disregarding BLOCK scope
		for(let i=0; i<5; i++){
			let place="colmenar viejo"
		}
		console.log(place);
		--- Uncaught ReferenceError: place is not defined ---
		// but with 'var'
		for(let i=0; i<5; i++){
			var place="colmenar viejo"
		}
		console.log(place);

STRING 
	String.prototype.trimStart() 
		let str = "		this string has a lot of whitespace whitespace"
		str = str.trimStart();
		// "this string has a lot of whitespace"
		
		String.prototype.trimEnd()

OBJECT
	const car = {
		wheels: 4,
		color: "red", 
		"goes fast": true
		drive: function(){
			console.log("wroom wroom")
		}
	}

	console.log(Object.keys(car)[0]) 		// wheels
	console.log(typeof Object.keys(car)[0]) // string
	car.drive();							// wroom wroom

	// accessing properties on the Object?
		console.log(car.wheels); // 4
		console.log(car['goes fast']); // 'red'
		
		// access properties of an Object by its key (compute the value)		
		const cars = {
			ferrari: "california", 
			porsche: "911", 
			bugatti: "veyron",
		}
		// user input
		const key = "ferrari" 
		console.log(cars.key);		// undefined 
		console.log(cars['key']); 	// undefined 
		console.log(cars[key]); 	// california

	const family = {
		father: "Jonathan Kent", 
		mother: "Martha Kent", 
		son: "Clark Kent",
	}
	ACCESING KEYS AND VALUES
	Object.keys(family);	// ["father", "mother", "son"] 
	family.father;			// "Jonathan Kent"
	Object.values(family);
	// ["Jonathan Kent", "Martha Kent", "Clark Kent"]	
	Object.entries(family);
	// ["father", "Jonathan Kent"]...

	METHODS IN AN OBJECT
	let myObject ={
		square: function(num){
			return num * num;
		},
		// SHORTHAND
		cube(num){
			return num ** 3;
		}
	}
	myObject.square(2);
	myObject.cube(2);

	COPY OR CLONING AN OBJECT (CLONE)
		// https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript
		const secondCar = Object.assign({}, car) 
		car.wheels = 4;
		console.log(car);				// {color: 'red', wheels: 4}
	 	console.log(secondCar);			// {color: 'red'}

	 	*** (ES2018) way
		let person = {
			name : "Alberto", surname: "Montalesi", age: 25,
		}
		let clone = {...person}; 
		console.log(clone);

	Using 'REST' with Object
		let myObj = { a:1, b:3, c:5, d:8,} 
		// rest operator to grab everything else left in the object. 
		let { a, b, ...z } = myObj;
		console.log(a); console.log(b); console.log(z); 
		// 1
		// 3
		// {c: 5, d: 8}

	ES2020:
	Optional Chaining
		const user1 = { 
			name: 'Alberto', 
			age: 27,
			work: {
			  title: 'software developer',
			  location: 'Vietnam'
			 }
		}
		const user2 = { 
			name: 'Tom', 
			age: 27
		}

		// does the user have a work property? 
		// if yes, access the title property inside of it
		const jobTitle = user.work?.title

FACTORY FUNCTION CONCEPT
	function factoryAgeBetween (min, max){
		return function (age){
			return age>= min && age <=max;
		}
	}
	const isChild=factoryAgeBetween(0,5);
	const isAdult=factoryAgeBetween(19,64);
	isChild(3);
	isAdult(12);

TYPEOF
	const str = "hello" 
	typeof(str);					// string
	// it's a bug from the first implementation of JavaScript. 
	typeof(null)					// object

SCOPE 
	Variable declared with the keywords 'let' or 'const' 
	are bound to the block scope where they have been declared.

THIS
	// video 260 is a good example with traditional functions
	- the value of 'this' depends directly of the execution context,
	how a function is called.
	ie.
	// returns window object if we run in from the global context
	function logThis(){
		console.log(this);
	}

	const myCar = {
		color: 'red', 
		logColor: function(){
			// 'this' here refers to myCar object.
			// with 'this' we can refer to the object itself
			// so we can access to its properties
			console.log("This content: ", this);
			console.log(this.color);
		}
	}
	myCar.logColor();			// red

	// but here, 'this' refers to the 'Window' object (top level object)
	const aColor = myCar.logColor;
	aColor();
	// actually 'window' is there, but not neccesary to type it
	window.aColor() gets the same result as aColor();



	// we use .bind to specifically tell boundGetColor that the this keyword 
	// will refer to the Object inside of the parenthesis,
	const boundGetColor = myCar.logColor.bind(myCar)
	console.log(boundGetColor())				// red
	
	// it tries to look for this.color but since it gets invoked 
	// in the global context, the value of this is the Window Object 
	// and there is no color on it, therefore we get undefined
	const unboundGetColor = myCar.logColor
	console.log(unboundGetColor())				// undefined

	-- THIS with Arrow Functions --
	<div class="box open"> 
		This is a box
	</div>
	.opening {
		background-color:red;
	}
	// grab our div with class box
	const box = document.querySelector(".box");
	// listen for a click event 
	box.addEventListener("click", function() {
		// toggle the class opening on the div 
		this.classList.toggle("opening");
		
		// setTimeout(function(){
		// // try to toggle again the class 
		// this.classList.toggle("opening"); 
		// },500);
		
		// The problem in this case is that the first this is bound 
		// to the const box but the second one, inside the setTimeout, 
		// will be set to the Window object, throwing this error: 
		Uncaught TypeError: cannot read property
		"toggle" of undefined
		
		SOLUTION
		// arrow functions inherit the value of this from the parent scope 
		// the second this will inherit from its parent, 
		// and will be set to the const box. 
		setTimeout(()=>{
		// try to toggle again the class
			this.classList.toggle("opening"); 
		},500);
	}); 

FUNCTIONS vs ARROW F. 
	ARGUMENTS OBJECT 
	The arguments object is an array-like object that we can access 
	from inside functions and contains the values 
	of the arguments passed to that function.
	ie.
	function example(){ 
		console.log(arguments[0])
	}
	example(1,2,3); // 1

	but if we use an arrow function instead
	we'll need an spread operator, otherwise we'll get 
	 'ReferenceError: arguments is not defined' error

	const example = (...args)=>{ 
		console.log(args[0])
	}
	example(1,2,3); // 1

FUNCTIONS: 
	DEFAULT VALUE
	function multiplier(a, b=9){
		console.log(a*b);
	}
	multiplier(1000000);

	DEFAULT VALUE (destructuring improvement)
	// We made the argument of our function an Object. 
	// When calling the function, we don’t even have to worry 
	// about the order of the parameters
	function calculatePrice({
		total = 0,
		tax = 0.1,
		tip = 0.05} = {}){
			return total + (total * tax) + (total * tip);
	}
	const bill = calculatePrice({ tip: 0.15, total:150 });
	// By writing = {} we default our argument to an Object 
	// and no matter what argument we pass in the function, 
	// it will be an Object:
	calculatePrice({});			// 0
	calculatePrice();			// 0 
	calculatePrice(undefined) 	// 0

-- Tagged Template literals --
https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761

DESTRUCTURING 
	// An Object
		const person = {
		 	first: "Alberto",
		 	last: "Montalesi"
		}
		const { first, last } = person;

		// We can also rename as the following:
		const { first:name, last:surname } = person;

	// An Array
		const person = ["Alberto","Montalesi",25];
	 	const [name,surname,age] = person;


	// SPREAD OPERATOR
		const veggie = ["tomato","cucumber","beans"];
		const meat = ["pork","beef","chicken"];
		const menu = [...veggie, "pasta", ...meat];
		console.log(menu);

		*** Copy arrays
		const veggie = ["tomato","cucumber","beans"];
		const newVeggie = [...veggie];

		*** using it within a function
		const name = ["Alberto", "Montalesi"];

		function greet(first, last) { 
			console.log(`Hello ${first} ${last}`);
		}
		greet(...name);

	// REST operator
	 	const person = ["Alberto", "Montalesi", "pizza", "ice cream", "cheese cake"];
		const [name,surname,...food] = person ;
		console.log(food);		
		// Array [ "pizza", "ice cream", "cheese cake" ]

	// Object: Deconstructing variables into keys and values
		const person = { 
			name: "Alberto",
			greet(){
				console.log("Hello"); 
			},
		}

	// Dynamically define properties of an Object
		const name = "myname";
		const person = {
			[name]:"Alberto", 
		};
		console.log(person.myname); // Alberto

SWAPPING Variables
	let hungry = "yes";
	let full = "no";
	[hungry, full] = [full, hungry]; 
	console.log(hungry,full);

LOOPS
	-- Difference between 'for of' and 'for in' --
		let list = [4, 5, 6];
		// for...in returns a list of keys
		for (let i in list) {
			console.log(i); // "0", "1", "2", 
		}
		// for ...of returns the values 
		for (let i of list) {
			console.log(i); // "4", "5", "6" 
		}
 	
 	An Object
 		// * Object.keys Object.values Object.entries
 		with 'for of'
		 	const car = { 
		 		maker: "BMW",
				color: "red", 
				year : "2010",
			}
			for (const prop of Object.keys(car)){
				const value = car[prop]; 
				console.log(prop,value);
			}
 		with 'for in'
 			for (const prop in car){
				console.log(prop,car[prop]);
			}

ARRAY
	'Array.from'
		<div class="fruits">
		    <p> Apple </p>
		    <p> Banana </p>
		    <p> Orange </p>
		</div>
		<script type="text/javascript">
	    	const fruits = document.querySelectorAll(".fruits p");
		</script>

		// fruits is a 'nodelist' (an array-like collection) 
		// containing our three p tags
												// NodeList(3) [p, p, p]

		// now we convert it in an Array
		const fruitArray = Array.from(fruits);
		console.log(fruitArray);				// [p,p,p]
		//since now we are dealing with an array we can use map
		const fruitNames = fruitArray.map( fruit => fruit.textContent);

		*** Array.from() also takes a second argument, a map function 
		so we can write:
		const fruits = document.querySelectorAll(".fruits p");
		const fruitArray = Array.from(fruits, fruit => {
			console.log(fruit);
			return fruit.textContent;
		}
		// we only want to grab the content not	the whole tag
		});
		console.log(fruitArray);
		// ["Apple", "Banana", "Orange"]

	'Array.of'
		const digits = Array.of(1,2,3,4,5);
		console.log(digits);

	'.find', '.findindex', '.some', ".every"

	INCLUDES
		let array = [1,2,4,5]; 
		array.includes(2); // true

		let array = [1,3,5,7,9,11]; 
		array.includes(3,1);
		// find the number 3 starting from array index 1

	Array.prototype.flatMap()
	Array.prototype.flatMap()

	// transforms a list of key- value pairs into an object.
	const keyValueArray = [ ['key1', 'value1'], ['key2', 'value2']] 
	const obj = Object.fromEntries(keyValueArray) 
	// {key1: "value1", key2: "value2"}

	ARRAY that recieves A FUNCTION
		'forEach'
		let names=["clara","lidia"]
		names.forEach(name=> console.log(name.toUpperCase()));

		'map' : returns a new array, it does not modify the original
		let names=["clara","lidia"]
		let upper_names = names.map(name=> {
			return name.toUpperCase()
		});
		console.log(upper_names);

		'filter' : we pass a callback function that returns a boolean value
		let nums = [0,1,2,3,4,5,6,7,8,9];
		const evens = nums.filter(num=> num%2 === 0);
		console.log(evens);

		'some' and 'every' : they return true or false 
		let scores=[34,67,45,78,99];
		scores.some(score => score>70);
		scores.every(score => score>70);

		'reduce' it takes an array and reduces it into a single value
		[12,45,3].reduce((accumulator, currentValue)=> {
			return accumulator + currentValue
		}); 	// sum: 60

		[12,45,3].reduce((accumulator, currentValue)=> {
			return accumulator > currentValue ? accumulator : currentValue;
		});		// maximun: 45

		// we can set an initial value for the accumulator
		[12,45,3].reduce((accumulator, currentValue)=> {
			return accumulator + currentValue
		},40);	// sum: 100

STRING 
	"hello".padStart(6); 	// " hello" 
	"hello".padEnd(6); 		// "hello "

CLASSES
	* prototypal inheritance *
	function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const alberto = new Person("Alberto", 26);

    Person.prototype.greet = function () {
        console.log("Hello, my name is " + this.name);
    }
    alberto.greet();                   	// Hello, my name is Alberto
    caroline.greet();                   // Hello, my name is Caroline
    // We added a new method to the prototype in order to make it accessible 
    // to all the new instances of Person that we created.

    -- Two ways of creating a class:
    // class declaration
    	class Person {}
	// class expression
		const person = class Person {}

	// classes are just a syntactic sugar, 
	// a nicer way of doing inheritance.
	class Person { 
		constructor(name,age){
			this.name = name;
			this.age = age; 
		}
		greet(){
			console.log(`Hello, my name is ${this.name} 
				and I am ${this.age} years old` );
		} // no commas in between methods
		farewell(){
			console.log("goodbye friend");
		}
	}

	// Extending a class
	class Adult extends Person { 
		constructor(name,age,work){
		super(name,age);
		this.work = work; 
	}

TRY AND CATCH
	try{
		console.log(undeclaredVar.toUpperCase());
	}catch(e){
		console.log(e);
		console.log("Err.!");
	}

ARROW FUNCTIONS
	// implicit return ie.(not available in a regular function)
	// only works in cases in which there is only a single expression
	// it can use '()' or ommit them
	const multiplier = money => (money * 0.89);
	const multiplier = money => money * 0.89;
	let exchange=multiplier(300);


PROMISES
	// A Promise is an object representing the eventual completion 
	// or failure of an asynchronous operation.
	// This is how you create your own promise, 
	// resolve and reject will be called once the promise is finished.

	const myPromise = new Promise((resolve, reject) => {
		// your code goes here 
	});

	This is a very simple promise to fetch a user from GitHub 
	and print it to the console.
	// fetch a user from github 
	fetch('api.github.com/user/ AlbertoMontalesi')
	.then( res => {
	// return the data in json format
		return res.json(); })
	.then(res => {
	// if everything went well, print the data
		console.log(res); })
	.catch( err => {
	// or print the error
		console.log(err); 
	})

	// Another promise example 
	function walk(amount) {
		return new Promise((resolve,reject) => {
			if (amount < 500) {
				reject ("the value is too small");
			}
			setTimeout(
				() => resolve(`you walked for ${amount}ms`),amount);
			}); 
	}
	walk(1000).then(res
		console.log(res);
		return walk(500); })
	.then(res => {
		console.log(res);
		return walk(700); })
	...

	ASYNC / AWAIT 
	Lets see how we can rewrite this Promise 
	with the new async/await syntax.
	// create an async function 
	async function go() {
	// use the keyword `await` to wait for the response
		const res = await walk(500); 
		console.log(res);
		const res2 = await 
		console.log(res2); ... 
	}
	go()

	ASYNC / AWAIT :	ERROR HANDLING
	async function asyncFunc() { 
		try {
			let response = await fetch('http:your-url');
		} catch(err) {
			console.log(err); 
		}
	} 
	asyncFunc()

	* If we do not use 'try' and 'catch' we can still grab the error:
	asyncFunc().catch(console.log); 

SETTIMEOUT
	console.log("Hello!");
	setTimeout(()=> {console.log("...You still there?...")}, 3000);
	console.log("I'm printed before the content of the setTimeout!");

SETINTERVAL
	// it returns an iterable id
	const id = setInterval(()=> {
		console.log(Math.floor(Math.random() * 6)+1); 
	}, 1000);
	// we use that id to stop the interval
	clearInterval(id);

Asynchronous Iteration

GENERATORS

PROXY

SET
	A Set is an Object where we can store unique values of any type.
		// create our set
		const family = new Set();
		// add values to it 
		family.add("Dad"); 
		console.log(family);		// Set [ "Dad" ]

		family.size;

		family.values();
		// SetIterator {"Dad", "Mom", "Son", "Pet"} 
		family.delete("Pet");
		family.clear(); 

		//Iterate over a set
			// using `.next()`
			const iterator = family.values(); 
			iterator.next();

			// using a `for of` loop
			for(const person of family) {
			console.log(person);

		// Remove duplicates from an array
		const myArray = ["dad", "mom", "son", "dad", "mom", "daughter"];
		const set = new Set(myArray); 	
		console.log(set);
		// Set [ "dad", "mom", "son", "daughter" ] 
		// transform the `Set` into an Array
		const uniqueArray = Array.from(set); 
		console.log(uniqueArray);
		// Array [ "dad", "mom", "son", "daughter" ]
		// write the same but in a single line 
		const uniqueArray = Array.from(new Set(myArray));

WEAKSET
	// is similar to a Set but it can only contain Objects.
	let dad = {name: "Daddy", age: 50}; 
	let mom = {name: "Mummy", age: 45};

	const family = new WeakSet([dad,mom]); 
	for(const person of family){
	 	console.log(person);
	}	// TypeError: family is not iterable

MAP 
	// similar to a Set, but they have key/value pairs.
	const family = new Map(); 
	family.set("Dad", 40); 
	family.set("Mom", 50); 
	family.set("Son", 20); 
	family;
	// Map { Dad → 40, Mom → 50, Son → 20 }
	
	family.forEach((val,key) => console.log(key,val));
	// Dad 40...

	for(const [key,val] of family){
		console.log(key,val); 
	}
	// Dad 40...

WEAKMAP

--- HTML ---
form > 'name' attribute
		<input name="q" type="text" value="badosa">

		// name="campground[title]"
		// this notation is a nice way to organize data mean to be sent
		 <input type="text" id="title" name="campground[title]"...
         <input type="text" id="location" name="campground[location]"...
         * we'll get this object: 
		if we submit the form we get this object:
		{"campground":{"title":"Rocky Walls","location":"Ohio"}}

		'q' is the variable we create with the 'name' attribute
		https://www.google.com/search?q=badosa&oq=badosa&aqs=chro...

Regular expressions (data validation/constraint)
	HTML attribute: pattern
	https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern

--- CSS ---
	REFERENCE
	https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

	Reset CSS
	https://meyerweb.com/eric/tools/css/reset/

	free images
	https://unsplash.com/

	Fonts
	https://fonts.google.com/

	INCLUDING CSS
	- inline
	- <style>
	- external file
	  <link rel="stylesheet" href="css/index.css" />

	USEFUL links TO SET PROPERTIES
	Text Shadow
	https://html-css-js.com/css/generator/text-shadow/
	Box Shadow
	http://www.corelangs.com/css/box/shadow.html

	CSS values and units
	https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

	COLOR
	https://developer.mozilla.org/en-US/docs/Web/CSS/color
	https://coolors.co/

	FONTS
		built in fonts by browser
		https://www.cssfontstack.com 

	SELECTORS
		*{
			color: lime;
		}
		// descendat selector
		li a {
			color: teal;
		}
		// adjacent selector
		h1 + p{
			color: red;
		}
		// direct child
		div > li{
			color: blue;
		}
		// matches elements of a given type (tag name), 
		// based on their position among a group of siblings.
			input[type="text"]:nth-of-type(2){
				border:2px solid red;
			}
			* if we add an 'n'-> ie '2n' we will matches every even number

			// 1st section and first h1 of the 1st section
			section:first-of-type h1:nth-of-type(1){
				...
			}

			section:first-of-type === section:nth-of-type(1)


		// attribute selector
		input[type="text"]{
			border:2px solid red;
		}

		a[href*="google"]{
			color: green;
		}

		section[class="post"]{
			border:2px solid red;

		}
		or
		section.post{
			border:2px solid red;
		}

		// an element which has this 2 classes
		.pricing-button.is-featured{
			...
		}

		// pseudo classes
		https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
		a:hover{
			color: lime;
		}
		.pricing-plan:last-child {
  			border-bottom: none;
		}

		// pseudo elements
		h2::first-letter{
			color: blue;
		}

		// SPECIFICITY
		Specificity Calculator
		https://specificity.keegan.st/
		1. inline styles 	2. ID 	3. CLASS 	4. ELEMENTS
		'!important' wins all of them
		button{
			color: blue !important;
		}

	BOX MODEL
		-> 'width' and 'height' control inner content
		-> border
		// the border is within 'width' and 'height' boundaries
		box-sizing: border-box;	

		display:
			inline	
			block
			inline-block === inline + 
					width, height, margin and padding will be respected

		// top, bottom, left and right are affected
		https://developer.mozilla.org/en-US/docs/Web/CSS/position
		position: 
			static 		// default

		transition
		https://developer.mozilla.org/en-US/docs/Web/CSS/transition
		https://easings.net

		margin: 20px auto; 
		// top and buttom 20 px and the element gets center in the main axis
		margin: 0 auto;

		transform
		https://developer.mozilla.org/en-US/docs/Web/CSS/transform

	FLEX BOX
		align-content: space between the colums or the rows
		*you will need 'flex: wrap' to take effect
		
		align-self: aligns item in the cross axis

		main axis
			justify-content
		cross axis
			align-items

		flex sizing properties
			flex-basis	
				affects the main axis
				initial size
			flex-grow
				amount of space will take if available space

			// grow shrink and basics
			https://developer.mozilla.org/en-US/docs/Web/CSS/flex
			flex

		MEDIA QUERIES
			@media (min-width: 800px){
				...
			}
			@media (orientation: landscape){
				...
			}

	>> BOOTSTRAP <<
		including it:
			https://getbootstrap.com/docs/5.1/getting-started/introduction/
			-> you can download it on our machine (best for production)
			-> you can use CDN to download it on the fly

			GRID System (Responsive layout)

	>> BULMA <<
		https://bulma.io/documentation/overview/start/

DOM MANIPULATION
	// list the entire DOM object
	console.dir(document)
	const h1 =document.querySelector('h1');
	// list the entire 'h1' object
	console.dir(h1)

	DOM QUERIES	

		// getElementById
		document.getElementById(id_name)
		// getElementsByTagName
		document.getElementsByTagName('img')
			- it returns and HTML collection, 
			- is iterable but is not an array
			- The HTML collection is compound of 'elements'
		// getElementsByClassName
		document.getElementsByClassName('class_name')

		// using an id
		document.querySelector('#id_name')
		// using a tag
		// return 1st match of a 'p' element 
		// or 'null' if it does not exists
		document.querySelector('p')			
		// using a class
		document.querySelector('.class_name')	
		// 2nd element of the class selected
		document.querySelector('.class_name:nth-of-type(2)')
		// first anchor tag wich attribute 'title' is "Java"
		document.querySelector('a[title]="Java"')

		// returns an HTML collection
		document.querySelectorAll('p')	
		// descendent selector: select all anchor tags within a 'p' tag
		document.querySelectorAll('p a')			

	MANIPULATION
		const h1 =document.querySelector('h1');

		innerText
			- the visible text
			- It treats everything as text
			h1.innerText('<i>Hello!</i>')
			// <i>Hello!</i>

		textContent 
			- It is all the text, included hiddend content
		innerHTML
			- we get the text and their HTML tags,
			so we can update its html content as well 
			h1.innerHTML('<i>Hello!</i>')
			// Hello!     *the h1 content will adopt italic style


		we can access to the properties of an element in 2 ways:
		- '.' notation
		- .getProperty .setProperty

	CHANGING STYLES
		const h1 = document.querySelector('h1');
		h1.style.color;	
		// It will not contain information from our .css style sheet
		// Only inline style
		// We can retrieve that info like this if you ever need it
		window.getComputedStyle(h1).color

		// add a class
		h1.setAttribute('class', 'main_header');
		   getAttribute	
		// better use 'classList' 
		// because this way we can add more than one class
		h1.classList.add('main_header');
					.remove
					.contains
					.toggle

		to move up to a parent element
		h1.parentElement

		div.childElementCount
			children 				// HTML collection

		// issue. video 250
		const img = document.querySelector('img')
		// should return '#Text' (is a white space) but returns null
		'?' img.nextSibling 	
		// should return the next sibling element if there is one, 
		// it can be another 'img', a 'p' ...
		// but returns null
		'?' img.nextElementSibling 

	CREATING ELEMENTS
		const p =document.createElement('p');
		p.innerText = "I'm a 'p'!";
		document.body.appendChild(p);
		// adds content to the end
		p.append(" this is easier!")	// "I'm a 'p'! this is easier!"
		p.prepend("What? ")

		// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
		.insertAdjacentElement

		.after 	// I think this one is easier than 'insertAdjacentElement'
		.before

		// remove element:
		// you new to go up one level (parent) 
		// and from there remove the selected element
		ie. 
		const div = document.querySelector('div');
		div.parentElement.removeChild(div);
		// easier
		div.remove();

	EVENTS 
		3 ways to link
		1. 
		<button onclick="alert('clicked!')">

		2. 
		const mybttn = document.querySelector("#mybttn");
		mybttn.onclick = () => {
		  alert("Yeah!");
		};

		3.
		mybttn.addEventListener("click", () => {
		  alert("Yeah!");
		}); 
		// one advantage is that you can add more than one callback
		// Both will run
		mybttn.addEventListener("click", () => {
		  alert("Yeah!");
		}); 
		mybttn.addEventListener("click", () => {
		  alert("Long Horns!!!!");
		}); 
		// another advantage is that you can pass and 'options' object
		mybttn.addEventListener("click"mybttn.addEventListener(
		  "click",
		  () => {
		    alert("Yeah!");
		  },
		  { once: true }
		);
		// and you can even remove them
	EVENT OBJECT
		// video 261: probably outdated 
		// https://javascript.info/pointer-events
		mybttn.addEventListener("click", (evt) => {
		  console.log(evt);
		});
		// prints: PointerEvent{isTrusted...

	    <input type="text" name="" id="">
	    ...
		const input = document
		  .querySelector("input")
		  .addEventListener("keydown", (e) => {
		    console.log(e);
		    console.log(e.key);
    		console.log(e.code);	
		});
		// pressing 'a' prints: 
		// KeyboardEvent{isTrusted: true, key: 'a'... 
		// Shift
		// ShiftLeft  

		FORM
			// accesing form values ie.
			<form action="/dogs">
		        <input type="text" name="user" placeholder="user name">
		        <input type="text" name="tweet" placeholder="tweet">
		        <button>Submit</button>
		    </form>
		    // ...
			const myform = document.querySelector("form");
			myform.addEventListener("submit", (e) => {
			  e.preventDefault();
			  const user = myform.elements.user.value;
			  const tweet = myform.elements.tweet.value;
			  console.log(user, tweet);
			});

		INPUT
			'change' event: it fires any time the content changes 
			when you leave the input tag
			'input' event: it fires any time the content changes 
			while being in inside input tag

		EVENT BUBLING
			<section onclick="console.log('Section!')">
		        <p onclick="console.log('Paragraph!')">
		            <button onclick="console.log('Button!')"></button>
		        </p>
		    </section>		 	// Button! Paragraph! Section!
		    // to prevent propagation
		    const nobubling = document.querySelector("#nobubling");
			nobubling.addEventListener("click", (e) => {
			  console.log("Button!");
			  e.stopPropagation();
			});

		EVENT DELEGATION
			// the parent, 'ul' in this case, will hear for the 'click'
			// event and with the property 'target', 
			// we get the 'li' element inside the 'ul'
			// that has been clicked
			<form action="/dogs">
		        <input type="text" name="tweet" placeholder="tweet">
		        <button>Submit</button>
		    </form>
		    <ul>
		        <li>hardcoded tweet</li>
		    </ul>
			const ul = document.querySelector("ul");
			ul.addEventListener("click", (e) => {
			  // if you want to make sure that an 'li' was clicked,
			  // do this check
			  //   console.dir(e.target); // ... nodeName: "LI" ...
			  e.target.nodeName === "LI" && e.target.remove();
			});

			const myform = document.querySelector("form");
			myform.addEventListener("submit", (e) => {
			  e.preventDefault();
			  const tweet = myform.elements.tweet;
			  addTweet(tweet.value);
			  tweet.value = "";
			});

			function addTweet(tweet) {
			  const li = document.createElement("li");
			  li.innerText = tweet;
			  ul.append(li);
			}

ASYNC 
	THE CALL STACK
		- LIFO concept: last function called in 
		will be the first function out 

		http://latentflip.com/loupe/
		// great resource to visualize 
			- Call stack
			- Call back queue
			- Web Api
		// when we execute our code


	WEB API
		- Browser has some built in web apis (functions)
		 that address the issue that JS is single thread async 
		ie. setTimeout 


	PROMISES (callbackHell.js has a nice example)
		- is an object representing the eventual completion
		or failure of an Asynchronous operation
		- is a returned object to which you attach callbacks, instead
		of passing callbacks into a function

		ASYNC FUNCTIONS
			- build on top of PROMISES, cleaner syntax
			- They always return a promise
			- If it returns a value: 		the promise will be resolved
			- If it throws an exception: 	the promise will be rejected
		AWAIT
			- We can only use 'await' inside of functions 
			declared with 'async'
			- await will pause the execution of the 
			function, waiting for a promisie to be resolve

AJAX
	- Asynchronous Javascript And XML (much more common JSON than XML)
	-> making requests 'behind the scene' from a web app seamlessly

	API aplication programming interface
		Web API: 
			-> it exposes some end points (urls) 
			which contains information mean to be consumed
			-> JSON: Javascript Object Notation 
			// https://jsonformatter.curiousconcept.com/
			we only want the data (.json format), not the js, css, html.. of a page
				- It is a format for sending data
	HTTP REQUESTS
		* Install Postman
		TYPES
		-> XML Http Requests (not used nowadays)
		-> Fetch: 
		-> Axios library:

PROTOTYPE 
	ie. with the Array object
		'__proto__' 
		a property that references the Array prototype in this case
		a template object with a bunch of methods and properties

		> Array.prototype

	-> You can add methods to the prototype of an object 
	String.prototype.grumpus = ()=>console.log("leave me alone!");
	"jj".grumpus();				//leave me alone!

=========
NODE ====
=========
- Runs outside of the browser 
- we can create web servers, command line tools, native apps...
- Install it locally
	* with nvm you can have multple node version install

	// RUN CONSOLE (node Repl)
	>node

	// LOADING A FILE IN THE REPL
	>.load index.js

	-'global'same concept as Window Object in the browser
	>global

	// Big object associated with the global scope with a bunch of methods
	process 
		// '/Users/marius/Desktop/code_notes/concepts_in_action/node'
		>process.cwd()
		
		>process.argv()

	MODULES AND NPM
	- node packages manager repository

	PROJECT
		- creation with package.json file
		>npm init

	EXPRESS 
		ie. http://localhost:3000/products/

		ROUTING 
		QUERY STRINGS
		NODEMON
		TEMPLATING, 
			// Install VSCode extension: 'EJS language support'
			EJS (embedded JS), to add logic to our html
			but templates are principal mean to display information,
			not to contain business logic
			there are others options too: numjucks, pug, handlebars...

			SERVING STATIC ASSETS 
			(files like .css .js that we want to include in the response)
			PARTIALS (including templates in other templates)

		HTTP REQUESTS
			GET
				- To retrieve data
				- the information is send in the query string
				of the URL as params.
				- Only text data can be sent
			POST 
				- We can use POSTMAN > BODY
				- the information, the payload, 
				is send in the request body.
				- we can send any type of data and size

			PATCH
			 	- update data

		REST - RESTFUL
			- Set of guidelines for how a client - server
			should communicate and perform CRUD operations

		SHOW ROUTE
		 	- Show info about a resource
		 	- We use a single identifier for each resource

		EXPRESS ROUTER (routerDemo project)
			// https://expressjs.com/en/4x/api.html#res.cookie
			- we can split out routes into separate files.
			- we can add middlewares that only applies to an
			specific router
COOKIES
	- it stores bits of information in the browser of the user
	(preferences, shopping cart...)
	- allow us to make HTTP stateful

	- we need 'cookie-parser' installed from npm to deal with cookies
	and signing them.
	- Developer Tools > Application > Cookies
	- SIGNING COOKIES: 
	making sure the original data that we sent to the browser 
	is still the same data sent back to us (integrity), 
	it is not about hidding the data.
	HMAC
	- has-based message authentication code
	- it uses 'cookie-signature' package
	npm i cookie-signature
	// https://www.freeformatter.com/hmac-generator.html

SESSION
	- to distinguish between different users and browsers
	abount an ongoing session.
 	- It stores the data in the server side using a 'session id'
 	this 'id' is sent to the browser as a cookie
 	and the browser sent that cookie back to keep the link
 	- cookies are stored in the browser (limited size and less safe)
 	- EXPRESS 
 	npm i express-session
 	FLASH
 	- A place in the session where we can 'flash' an specific message
 	to the user of a particular session.
 	- shows up one time and then goes away. 
 	npm i connect-flash

AUTHENTICATION 
	- It is about to verify who a particular user is
	AUTHORIZATION
	- It is about to verify what a specific user has access to
	WITH EXPRESS 

	- We do not store the pw, 
	we do store the 'hash' version of the pw
	- Salt, additional step to strength our pw (super necessary)
	is a random value added to the pw before we hash it.
	BCRYPT: HASH Function
	npm i bcrypt 			we will use this one
	npm i bcryptjs

	PASSPORT
	https://www.passportjs.org/
	- library to enforce authentication in NODE apps
	- it supports local, google, twitter ... login 'strategies'
		in our yelpcamp example: we install these 3 packages
		'passport' allow us to plugin multiple 'strategies'
		'passport-local' 
		Passport strategy for authenticating with a username and password.
		'passport-local-mongoose'
		it adds some methods to the model.
		$ npm i passport passport-local passport-local-mongoose

MONGO
	- No SQL DB, document oriented DB, no schema, no tables
	- MEAN MERN mongo db, express, angular or react & node
	- it's basically a server we'll be runnin in the background
	INSTALLATION
		https://docs.mongodb.com/manual/
		https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

		1. you need to have install 'homebrew' which helps you
		to install many kind of developer tools 
		* check if you have 'homebrew' already installed and 
		mongo
		>brew list 	List installed

	- MONGO DB SHELL (like a REPL but very powerful)
		>mongo				// MongoDB shell version v4.4.5
		>help
		>db 				// list the default db in used
		>show dbs
		>show collections
		>use animalShelter	// Create DB or select DB

	- BSON
		// https://www.mongodb.com/json-and-bson
		- mongo stores in BSON (binary), 
		a more compact version of JSON (text) 
		which accpets more data types as well

	CRUD
		DOCUMENTS go into  COLLECTIONS
		CREATE, INSERT
		> db.dogs.insert({name: "milu", age: 9, color: "white", catFriendly: true})
		READ, FIND
			//Show documents of a collection
			>db.[collectionName].find()	
								.findOne()
			//Show documents based on one or more properties
			>db.dogs.find({color: "white"})	
		UPDATE
		$set operator
		db.dogs.updateOne({name: "milu"}, {$set:{color:"1st snow"}})
			   .updateMany
			   .update
		$currentDate operator
		db.dogs.updateOne(
			   // .replace
			{name: "milu"}, 
			{$set:
				{color:"pure white"}, 
				$currentDate: {lastChanged: true}
			})
			// ... "lastChanged" : ISODate("2022-01-23T20:52:14.975Z")
		DELETE
			// delete record
			>db.dogs.deleteOne({color: "white"})	
			// delete collection
				    .deleteMany({})		
			// delete DB
			>use [db_name]
			>db.dropDatabase()

	ADDITIONAL MONGO OPERATORS
		// case nested object
		{
		  name: "milu",
		  trainingDetails: {
		    trainedBy: "Haddock",
		    year: 1938,
		    location: "Corcega",
		  },
		}
		{
		  name: "coke",
		  trainingDetails: {
		    trainedBy: "gabriel",
		    year: 1990,
		    location: "c viejo",
		  },
		}
		>db.dogs.find({'trainingDetails.year': 1938})
		// greater than
		>db.dogs.find({'trainingDetails.year': {$gt:1938}})
		// operators list
		https://docs.mongodb.com/manual/ 
			reference>operators>Query and Projection Operators

	MONGO RELATIONSHIPS
		6 Rules of Thumb for MongoDB Schema 
		https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3
		- We can denormalized (duplicate data among several models, 
			not recommended in SQL DB though)


MONGOOSE
	- connects 'node' with 'mongo' 
	- helps to model out and define a schema, 
	validate data and built queries using JS
	- ORM(Object Relational Mapper)/ODM(Object Documents Mapper)
		CONNECTION
			https://mongoosejs.com/
			We can connect 'mongo' with 'node' without 'mongoose'
			https://docs.mongodb.com/drivers/
			But we're going to use 'mongoose'(An Object Documents Mapper)

	CLOSING DB CONNECTION
	mongoose.connection.close();

	DEFINING A MODEL
		- model === js class that represents information in a 'mongo'db
		- to define a 'model' we need to define a 'schema'
			Each schema maps to a MongoDB collection 
			and defines the shape of the documents 
			within that collection.

	MONGOOSE CRUD

	SCHEMA CONSTRAINTS

	MODEL: INSTANCE AND STATIC METHODS
		custom methods

	MONGOOSE MIDDLEWARE
		- run some code just before/after a 'moongose' operation
		takes place.
		.pre
		.pos 

	MONGOOSE VIRTUALS
		add properties to the schema, getters and setters,
		but not in the DB

INTEGRATING MONGO | MONGOOSE WITH EXPRESS
	FILTERING

MIDDLEWARE IN EXPRESS
	https://expressjs.com/en/guide/writing-middleware.html
	https://expressjs.com/en/5x/api.html
	- Order matters, routes are consider 'express middlewares' as well
	- functions that run during the request/response lifecycle
	CUSTOM MIDDLEWARES

ERROR HANDLING in EXPRESS & MONGOOSE
	- 'express' has a built in error handler
	we can see it in action writing this statement:
	throw new Error("La cagaste burlancuster.")
	- we can write our own erro handlers (it is a middleware):



TERMINAL > SHELL 
			zsh (mac default)
			bash 

			$>cd / root directory, to build an absolute path
			$>cd ~ home directory

			$>man [command name] // to gen info
			ie. man ls
			ls -l				 // ls long format
			ls -a				 // hidden files
			rm 
			rmdir -rf 			 // recursive force(no asking)

MORE LINKS
		https://unicode.org/charts/
	Specifications
        https://spec.whatwg.org/
        https://html.spec.whatwg.org/multipage/
    HTML Entities
        https://www.w3schools.com/html/html_entities.asp

ERRORS 
	'Cannot read property 'reviews' of null'
	yelpcamp v05_routes > routes > reviews.js
	when using 'express router', you need to set it this way 
	to avoid the issue:
	const router = express.Router({ mergeParams: true });

STYLE LINKS:
https://materialui.co/colors/
