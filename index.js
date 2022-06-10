const file = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const config = require('./strings.json');

// const filePath = path.join(__dirname, '../../index.html');
const filePath = path.join(__dirname, './test.html');
const $ = cheerio.load(file.readFileSync(filePath));

let string_list = config.strings;

let string = string_list[Math.floor(Math.random() * string_list.length)];
// let string = string_list[string_list.length - 1];

$('.project-tagline').replaceWith(`<h2 class="project-tagline">${string}</h2>`);

console.log("\n###############################################################\n")
console.log($.html());

file.writeFile(filePath, $.html(), (e) => {
    if (e != null) {
        console.log(e)
    }
});
