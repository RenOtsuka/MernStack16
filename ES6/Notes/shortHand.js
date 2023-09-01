// if the name of the key is the same as the var. we're getting then we can just use one

let cat = 'Miaow';
let dog = 'Woof';
let lion = 'Roar';

let animalSound = {
  cat:cat,
  dog:dog,
  lion:lion
}

console.log("Animal Sounds are " + JSON.stringify(animalSound))

let animalSoundES6 = {
  cat,
  dog,
  lion
}

console.log("Animal Sounds Using Short Hand ",animalSoundES6)

module.exports = animalSoundES6;