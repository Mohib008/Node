const fs = require("fs");


// Async

fs.readFile("./app.txt", (err, data) => {
    if(err) {
        console.log("error");
    }
    console.log("Async", data.toString("utf8"));
});

// Sync

const file = fs.readFileSync("./app.txt");
console.log("Sync", file.toString());


//Append

/*fs.appendFile("./app.txt", " This is good!! like the way it is working", err => {
    if(err) {
        console.log("Not found, Someting worng!");
    }
});*/


// Write 

/*fs.writeFile("W.txt", " heppy to Create or write a new file!", err=> {
    if(err){
        console.log("Error, Something gose wrong!");
    }
});*/

// Delete

fs.unlink("./W.txt", err=> {
    if(err){
        console.log(err);
    }
    console.log("Inception");
})