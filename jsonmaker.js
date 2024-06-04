const csvToJSON = require("./csvtojson.js");
const fs = require("fs");

const csvflie = fs.readFileSync("./Data.csv");

const stringcsv = csvflie.toString();

const jsoncsv = csvToJSON(stringcsv);

const stringjsoncsv = JSON.stringify(jsoncsv);

fs.writeFileSync("Data.json", stringjsoncsv);
