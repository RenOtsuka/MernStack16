//Template Literals are used to help us create html structure as well as string concatenation on the fly
// use tick - to open close template ` <==content(html, string)===> `
//for dynamic variables we use ${ variableName }

let AnimalSoundsES6 = require('./shortHand')
let dynVal = 25000

let myNormalString ="Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum "+dynVal+" Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "<h1>Header<h1>"+
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum \n" +
                    JSON.stringify(AnimalSoundsES6);

console.log(myNormalString);


let templateLit = `
Lorem Lipsum Lorem Lipsum Lorem Lipsum
Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
Lorem Lipsum Lorem Lipsum Lorem Lipsum
                
Lorem Lipsum Lorem Lipsum Lorem Lipsum
                                                            <h1>Header<h1>
Lorem Lipsum Lorem Lipsum Lorem Lipsum
${JSON.stringify(AnimalSoundsES6)}
                    `
console.log(templateLit);

//Question: create Your introduction as ShortHand in one file and export that, import the same in template literal file and show that

let introduction = require('./shortHandIntroduction')

console.log(` ${JSON.stringify(introduction)}`)