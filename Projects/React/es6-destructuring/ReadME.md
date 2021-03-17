/*---------------------- Array ----------------------*/
const animals = [
  { name: "cat", sound: "meow", feedingRequirements:{
    food: 2 ,
    water: 3
  } },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal){
return [
animal.name,
function(){
  console.log(animal.sound);
}
]
}

export default animals; // for const
export {useAnimals}; // for function
/*---------------------------------------------------*/


/*---------------------------------------------------- */
//import animals, {useAnimals} from "./data";

// //console.log(animals);

// // Destructure an array
// const [cat,dog] = animals; // const[a,b]:- a or b must be unique
// //console.log(cat);

// const [animal, makeSound] = useAnimals(cat); // this output is an array, const[a,b]:- a = name of the first item of the array, b = value of the function 
// console.log(animal);
// makeSound();

// // Destructure an object
// const {name,sound} = cat;
// console.log(sound);

// // Destructure an object and assign a name to it
// const {name: catName,sound: catSound} = cat;
// console.log(catName);

// // Destructure an object and give it a custom value
// const {name = "Becky" ,sound = "Choo"} = cat; // if name is undefined, use "Fluffy"
// console.log(sound);

// //Extensive Destructuring
// const {name, sound, feedingRequirements :{food,water}} = cat;
// console.log(water);
/*----------------------------------------------------*/


*---------------------------Notes---------------------*/