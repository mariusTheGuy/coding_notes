// FACTORY FUNCTION
// not good, we are creating a new object with its UNIQUE TEMPLATE,
// not share with any other,
// its method will be defined in each individual object, instead of the __prototype__
/*
function createMember(name, city, career) {
  let member = {
    name: name,
    city: city,
    career: career,
  };
  member.greet = function () {
    // 'this' will be anything on the left of it.
    const { name, city, career } = this;
    console.log(
      `Welcome ${name}, from ${city}, we are in need of ${career}s here!`
    );
  };
  return member;
}

let emily = createMember("Emily", "Ohio", "teacher");
let olga = createMember("Olga", "Austin", "artist");
emily.greet === olga.greet;             // false
*/

// ===========

// 'NEW' KEYWORD + CONSTRUCTOR FUNCTION
/*
function Member(name, city) {
  (this.name = name), (this.city = city);
}
// 'new' creates a new object ans sets Member as the constructor function
//  so we can add methods not to the individual object, not to the instances
//  but to the __prototype__
 
// new Member("emily", "ohio");

// this way we add the function to the prototype
Member.prototype.greet = function () {
  let { name, city } = this;
  console.log(`Welcome ${name}, from ${city}`);
};
let emily = new Member("Emily", "Ohio");
let olga = new Member("Olga", "Austin");
console.log(emily.greet === olga.greet); // true
*/
// =========
// CLASS
/*
class Member {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  greet() {
    let { name, city } = this;
    console.log(`Welcome ${name}, from ${city}`);
  }
}
const p1 = new Member("emily", "ohio");
p1.greet();
*/

// CLASS: EXTENDS & SUPER KEYWORDS --- INHERITANCE ---
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}
class Cat extends Pet {
  // optional because it extends from Pet
  constructor(name, age, livesLeft = 7) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    console.log("Meooooww!");
  }
}
class Dog extends Pet {
  bark() {
    console.log("Woooof!");
  }
}
const cat = new Cat("Garfield", 7);
const dog = new Dog("Snoopy", 7);
cat.eat();
cat.meow();
