const fs = require("fs");


fs.readFile("./app.txt", (err, data) => {
    if(err) {
        console.log("error");
    }
    console.log("Async", data.toString("utf8"));
});

const file = fs.readFileSync("./app.txt");
console.log("Sync", file.toString());

fs.appendFile("./app.txt", " This is good!! like the way it is working", err => {
    if(err) {
        console.log("Not found, Someting worng!");
    }
});

