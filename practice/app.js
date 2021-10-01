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
fs.mkdir(mkdirPath1, (e) => {
    console.log(e);
});
fs.mkdir(mkdirPath2, (e) => {
    console.log(e);
});
fs.mkdir(mkdirPath3, (e) => {
    console.log(e);
});
fs.mkdir(mkdirPath4, (e) => {
    console.log(e);
});
const createFile = () => {
    for (let i = 0; i < users.length; i++) {
        const fileContents = (dirPath) => {
            fs.writeFile(`${dirPath}/${users[i].name}.txt`, `{name:${users[i].name}, gender:${users[i].gender}, age:${users[i].age}}`, (err) => {
                console.log(err);
            })
        }
        if (users[i].age > 20 && users[i].gender === "female") {
            fileContents(mkdirPath3);
        }
        if (users[i].age < 20 && users[i].gender === "female") {
            fileContents(mkdirPath4);
        }
        if (users[i].age > 20 && users[i].gender === "male") {
            fileContents(mkdirPath1);
        }
        if (users[i].age < 20 && users[i].gender === "male") {
            fileContents(mkdirPath2);
        }
    }
};
createFile();