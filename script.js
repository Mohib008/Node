const fs = require("fs");


fs.readFile("./app.txt", (err, data) => {
    if(err) {
        console.log("error");
    }
    console.log("Async", data.toString("utf8"));
});

const file = fs.readFileSync("./app.txt");
console.log("Sync", file.toString());