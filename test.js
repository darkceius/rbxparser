var { parseModel } = require(`./RBXParser`)
var { readFileSync, existsSync } = require(`fs`)
if (!existsSync("Test.rbxm")){
    throw (new Error("Can't find Test.rbxm"))
}
var root = parseModel(readFileSync("Test.rbxm"))
var main = root[0]
console.log(main.getProperty("Name"))
console.log(main.getChildren()) // or main.Children
//console.log(main)