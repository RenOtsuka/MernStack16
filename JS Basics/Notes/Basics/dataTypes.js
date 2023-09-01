//Data Types are storage type to store various types of data like int, char, string ,etc

// 6 types:
/*
-String 
-Number
-Boolean
-Undefined
-Null
-Object

in ES6 we can have Symbol data type
*/

var checkDataType = 1.256 //decimal double
console.log("Data type is - " + typeof(checkDataType))

checkDataType = 1256 //int
console.log("Data type is - " + typeof(checkDataType))

checkDataType = "Ryan" //string
console.log("Data type is - " + typeof(checkDataType))

checkDataType = true //bool
console.log("Data type is - " + typeof(checkDataType))

checkDataType = undefined //valid data type
console.log("Data type is - " + typeof(checkDataType))

checkDataType = null // of type 'Object' as it's default datatype 
console.log("Data type is - " + typeof(checkDataType))

checkDataType = {} //object
console.log("Data type is - " + typeof(checkDataType))

checkDataType = {
  name: "Arit",
  session: "MernStack"
}
console.log("Data type is - " + typeof(checkDataType))
console.log("Data is - ", checkDataType)