


var user = {name:"Thahn Le", age: 21, session:"JS", 
  getDetails: function(){
    console.log(`${this.age} ${this.session}`)

    // var _this = this; //copy into other obj and then using it inside setTimeout

    // setTimeout(function(){
    //   console.log("Inside set timeout")
    //   console.log(`${_this.age} ${_this.session}`) //undef in setTimeout
    // },2000)

    //use bind method
    setTimeout(function(){
      console.log("Inside set timeout")
      console.log(`${this.age} ${this.session}`) //undef in setTimeout unless use bind
    }.bind(user),2000)


  }
}

user.getDetails() //getDetails is exec. over user so context/scope is user but it changes inside setTimeout


//an example on UI, by doing DOM manipulation

//html example
{/* <button id="newBtnBind">Practice Div</button> */}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Mueen"
// }

// btn.removeEventListener("click",this.onclick)


//second example

//<button id=​"newBtnBind">​Practice Bind​</button>​
//var selectBtn = document.getElementById("newBtnBind")
//var info = {"Event" : "Click", "Topic" : "Bind"}

//var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
//selectBtn.addEventListener("click", clickFunc.bind(info), false)

//var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
//selectBtn.addEventListener("click", clickFunc.bind(info2), false)