const path = require('path');
const boysFolder = path.join(__dirname, 'boys');
const girlsFolder = path.join(__dirname, 'girls');

const builder = require("./helpers/functionMoveToFolder");

builder.moveToCorrectFolder(girlsFolder, boysFolder, "male");
builder.moveToCorrectFolder(boysFolder, girlsFolder, "female");
