const fs = require("fs");


// Async

/*fs.readFile("./app.txt", (err, data) => {
    if(err) {
        console.log("error");
    }
    console.log("Async", data.toString("utf8"));
});*/

// Sync

/*const file = fs.readFileSync("./app.txt");
console.log("Sync", file.toString());*/


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

/*fs.unlink("./W.txt", err=> {
    if(err){
        console.log(err);
    }
    console.log("Inception");
})*/
question1 = () => {
    fs.readFile("./sunta.txt", (err, data)=> {
        console.time("Q1 = Sunta-time");
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
           if(currentValue === "(") {
               return acc += 1
           } else if (currentValue === ")") {
               return acc -=1
           }
        }, 0)
        console.timeEnd("Q1 = Sunta-time");
        console.log("floor: ", answer);
    })
}

question1();

 question2 = () => {
    fs.readFile("./sunta.txt", (err, data)=> {
        console.time("Q2 = Sunta-time");
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const aswer = directionsArray.some((currentItem)=> {
            if(currentItem === "(") {
                accumulator += 1
            } else if (currentItem === ")") {
                accumulator -= 1
            }
            counter ++
            return accumulator < 0;
        });
        console.timeEnd("Q2 = Sunta-time");
        console.log("Basement Entered at: ", counter);
    });
};

question2();