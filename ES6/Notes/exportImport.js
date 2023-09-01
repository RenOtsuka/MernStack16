//user.js

export default class User{}; //only 1 default export is allowed in one file
// export default function User{}; not allowed

// named exports can be many from the file
export const userAge = 22; //named export from user
export const userAddress = "Earth";//named export from user



//person.js
// export const userAge = 31;



// account.js - need to import user data
import User from "./user" //user is default import so no need to use {}

import {userAge, userAddress} from "./user" //named import

//in case of dupe imports we can alias while importing
import {userAge as personAge} from "./person" //named import

// named and default can be imported together
import User, {userAge, userAddress} from "./user"


//constants.js
export const pie = 22;
export const eta = 23;
export const zeta = 24;

//wild card import using *
import * as constants from "./constants"

//using wildcards
constants.pie
constants.eta
constants.zeta