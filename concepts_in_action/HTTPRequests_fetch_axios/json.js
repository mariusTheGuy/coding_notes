const hero = `{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      }]}`;
let parsedData = JSON.parse(hero);
console.log(parsedData);

// TO JSON
const dog = { breed: "lab", color: "brown", name: undefined };
let toJson = JSON.stringify(dog);
console.log(toJson);
// Returns
// {"breed":"lab","color":"brown"}
// NOTICE THAT 'undefined' is not a valid JSON value
