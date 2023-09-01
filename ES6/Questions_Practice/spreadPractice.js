//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


let vaccines = ["Penicilin", "Polio", "Covid"]
console.log(...vaccines)

let qualifications = {degree: "PhD", certification: "board certified"}
let doctor = {specialization: "Surgeon", ...qualifications}
console.log(doctor)

let vaccineObj = {name: "Pfiser", numOfDosesNeeded: 2, price: 50};

let obj2 = {...doctor, ...vaccineObj};
console.log(obj2)