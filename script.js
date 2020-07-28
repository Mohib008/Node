const fs = require("fs");


fs.readFile("./app.txt", (err, data) => {
    if(err) {
        console.log("error");
    }
    console.log("1", data.toString("utf8"));
});

const file = fs.readFileSync("./app.txt");
console.log("2", file.toString());