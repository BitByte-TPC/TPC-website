// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const path = __dirname + "/../package.json";
let rawdata = fs.readFileSync(path);
let data = JSON.parse(rawdata);
data.homepage = "https://iiitdmj.ac.in/webix.iiitdmj.ac.in/";
fs.writeFileSync(path, JSON.stringify(data));
