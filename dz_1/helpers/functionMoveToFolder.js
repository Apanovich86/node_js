const fs = require('fs');
const path = require('path');

const moveToCorrectFolder = (firstPath, secondPath, gender) => {
    fs.readdir(firstPath, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        data.forEach(file => {
            fs.readFile(path.join(firstPath, file), (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                const person = JSON.parse(data);

                if (person.gender === gender) {
                    fs.rename(path.join(firstPath, file), path.join(secondPath, file), (err) => {
                        console.log(err);
                    })
                }
            })
        })
    })
}

module.exports = {
    moveToCorrectFolder
}
