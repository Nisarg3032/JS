const accountId = 144553
let accountEmail = "nisarg@google.com"
var accountPassword = "12345"
accountCity = "Daman"
let accountState;

// accountId = 2 //not allowed


accountEmail = "nisarg@nisarg.com"
accountPassword = "12354"
accountCity = "Chennai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])