const fs = require('fs');
const path = require('path');

const mkdirPath1 = path.join(__dirname, 'manOlder20');
const mkdirPath2 = path.join(__dirname, 'manYounger20');
const mkdirPath3 = path.join(__dirname, 'womanOlder20');
const mkdirPath4 = path.join(__dirname, 'womanYounger20');

const users = [
    {name: 'Olya', gender: 'female', age: 35},
    {name: 'Daria', gender: 'female', age: 19},
    {name: 'Ivan', gender: 'male', age: 25},
    {name: 'Ruslan', gender: 'male', age: 17},
    {name: 'Maria', gender: 'female', age: 30},
    {name: 'Tolik', gender: 'male', age: 18},
    {name: 'Svitlana', gender: 'female', age: 16},
    {name: 'Oleg', gender: 'male', age: 21}
];

function createFolders() {
    fs.mkdir(mkdirPath1, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        fs.mkdir(mkdirPath2, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            fs.mkdir(mkdirPath3, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                fs.mkdir(mkdirPath4, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    createFiles(users);
                })
            })
        })
    })
}

function createFiles(users) {
    users.forEach(user => {
        const fileContents = (dirPath) => {
            fs.writeFile(`${dirPath}/${user.name}.txt`, `{name:${user.name}, gender:${user.gender}, age:${user.age}}`, (err) => {
                console.log(err);
            })
        }
        if (user.age > 20 && user.gender === "female") {
            fileContents(mkdirPath3);
        }
        if (user.age < 20 && user.gender === "female") {
            fileContents(mkdirPath4);
        }
        if (user.age > 20 && user.gender === "male") {
            fileContents(mkdirPath1);
        }
        if (user.age < 20 && user.gender === "male") {
            fileContents(mkdirPath2);
        }
    })
}

createFolders();
