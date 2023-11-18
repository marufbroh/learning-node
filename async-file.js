const fs = require("fs");


// reading text asynchronously

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
    if(err){
        throw Error("Error to read text")
    }
    console.log(data);
    // writing text asynchronously
    fs.writeFile("./texts/read2.txt", data, "utf-8", (err) => {
        if(err){
            throw Error("Problem with data write")
        }

    })
})