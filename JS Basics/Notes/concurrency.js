// Hotel/Restaurant Activity

// Arit, David, Lemar

//Rest1 (resource blocking sys)

//Takes order one at a time
// Arit - 5 mins (waiter) => kitchen, wait for order to be prepared
// David - 10 mins (waiter) => kitchen, wait for order to be prepared
// Lemar - 15 mins (waiter) => kitchen, wait for order to be prepared

// Total time 5 + 10 + 15 => 30 mins


//Rest2 (resource non-blocking sys)

// *Takes order at the same time*
// Arit - 5 mins (waiter) => kitchen, (get token - 1) + 5
// David - 10 mins (waiter) => kitchen, (get token - 2) + 5
// Lemar - 15 mins (waiter) => kitchen, (get token - 2) + 5 //takes max time

// Total time - (5) + (10) + (15) => 15 mins