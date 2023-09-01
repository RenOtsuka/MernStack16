//normal iterators don't presevere immutability (for loops etc.)

// new iterators: filter, map, reduce, some
//helps extract info and preserve immutability

let personList = [
  {id: 1, name: "John", savedby: "Captain America"},
  {id: 2, name: "Alice", savedby: "Iron Man"},
  {id: 3, name: "Roger", savedby: "Captain America"},
  {id: 4, name: "Adam", savedby: "Iron Man"},
  {id: 5, name: "Alex", savedby: "Spider Man"},
  {id: 6, name: "Robin", savedby: "Batman"},
]

//1. get list of persons by Ironman
let personsSavedByIronMan = personList.filter((person) => person.savedby === "Iron Man")

// console.log(personsSavedByIronMan)
// console.log(personList)


// 2. get the name of the persons saved by CA, append Mr. before their name
// let personsSavedByCA = personList.map((person) => person.savedby == "Captain America" ? ` Mr. ${person.name}` : "").filter( p => p != "")

let personsSavedByCA = personList.map((person) => {
  if( person.savedby == "Captain America" ){
    return {"Lucky Person": `Mr. ${person.name}`}
  }
  else{
    return ""
  }

}).filter( p => p != "")


console.log(personsSavedByCA)
console.log(personList)


// 3. if there is someone saved by batman or thor
let batman = personList.some((person) => person.savedby == "Batman")
// console.log(batman)

let thor = personList.some((person) => person.savedby == "Thor")
// console.log(thor)


// 4. get count of uniquely saved persons by each superhero

let uniqueSavedPersons = personList.reduce((prev, curr, index, arr) => {

  prev[curr.savedby] = prev[curr.savedby] ? prev[curr.savedby] + 1 : 1;

  return prev

}, new Set())

// console.log(uniqueSavedPersons)

// Question:


let persons = [
  {id : 1, name : "John", tags : "javascript"},
  {id : 2, name : "Alice", tags : "javascript"},
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];


//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present

let jsTag = persons.filter((person) => person.tags == "javascript")
// console.log(jsTag)

let java = persons.map((person) => {
  if(person.tags == "javascript"){
    return {
      "Developer": `${person.name} programmer`
    }
  }
  else{
    return ""
  }
}).filter(p => p != "")
// console.log(java)

let python = persons.some((person) => person.tags == "python")
// console.log(python)

let countTags = persons.reduce((prev, curr, index, arr) => {
  prev[curr.tags] = prev[curr.tags] ? prev[curr.tags] + 1 : 1;

  return prev
},  new Set())

console.log(countTags)