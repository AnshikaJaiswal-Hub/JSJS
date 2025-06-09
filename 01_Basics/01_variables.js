const accountId = 144553
let accountEmail = "anshi@gmail.com"
var accountPassword = "12345" //don't use var anymore - > because var is scoped to the entire function, not the block {} , Can Be Redeclared
accountCity = "Jaipur"
let accountState
// accountId = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "23456"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity, accountState])


