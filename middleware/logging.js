import fs from "fs/promises"

//const fs = require('fs'); //ReferenceError: require is not defined in ES module scope, you can use import instead
async function logging(req, res, next) {
console.log(
`IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
);
try{
const text = `\nIP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`
await fs.writeFile("logs.txt",text);
}catch{
await fs.writeFile("logs.txt",`\nLogging Error on IP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`);
}
next();
}

export default logging;