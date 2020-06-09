
const Car = {
   type: "sedan",
   color: "green",
   engine: 2.0
}

console.log(Car.type + " " + Car.color + " " + Car.engine);

const Color = {
    red: 100,
    green: 0,
    blue: 50,
}

console.log(Color.red, Color.green, Color.blue + "     Bazowe atrybuty Color");

const referenceColor = (Color.red = 50, Color.green = 50);

console.log(Color.red, Color.green, Color.blue + "     Zmodyfikowane atrybuty Color");