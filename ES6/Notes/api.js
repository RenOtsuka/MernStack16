// http(s) ==> hypertext type protocol (secure)
// html => hypertext markup lang.

// http is stateless (doesn't remember from the prev page)
//either save info on browser or on server

//if we save on server, we can access it from anywhere

// user - 
// https://www.arit.userbase,cin/api/user/searches - {items} - post
// https://www.arit.userbase,cin/api/get/searches/userid - get

// saving info on ui/screen - respresentation


// REST - representational state transfer protocol
// Specifications -
// Uses http
// Definitive verbs/methods - get/post/patch/delete
// Stateless

// Http verbs - 
// create - post
// update - put/patch
// read - get
// delete - delete



// Put/Patch

let User = {
  Name: "Van",
  Age: 20,
  Address: "Moon",
  UserId: "123456"
}

// change name - Van Duc Phan

// put - need to create complete object (full replacement)
let UserUpdated = {
  Name: "Van Duc Phan",
  Age: 20,
  Address: "Moon",
  UserId: "123456"
}

// patch - need to create object w/ data that needs to be changed (partial replacement)
let UserUpdatedPatch = {
  Name: "Van Duc Phan",
  UserId: "123456"
}
