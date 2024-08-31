const accountId = 144553;
let accountEmail = "saad@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 2; //not allowed

accountEmail = "hc@gmail.com"
accountPassword = "21212121"
accountCity = "islamabad"

/*  
Prefer Not To Use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
