const file = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const filePath = path.join(__dirname, '../Websites/html/arrayinamatrix.xyz/index.html');
const $ = cheerio.load(file.readFileSync(filePath));

let string_list = ['Welcome to the abyss.', 'Among Us', 'Shinjū', 'Tenebrous', '[this splash text is now available]', 'As seen on TV!', 'Open source!', 'Déjà vu!', 'doot doot', '/give @a hugs 64', 'Home-made!', 'Made by a "real" person!', 'Made in Canada!', '& Knuckles!', 'Check out my blog!', 'Removed Herobrine', '3.14159265358979323846264338327950...','Know your addiction’s not a crime', 'undefined', 'There’s no escape.', 'Sleep all day, wide awake when the night falls', 'I know I’m complacent <br> You’ll find a replacement', 'All You Are', 'Foreign skies <br> Come and find me where the daylight ends', 'Too late to start again so let’s live to see the end.', 'But only after dark', 'So lay waste to all we\'ve made <br> For your corporate palisade', 'Edgy', 'A killer in a slick dress, shed your skin and regress', 'Would you fight, would you die <br> To project the change you\'ve buried deep inside?', 'Nugget, biscuit, nugget in a biscuit <br> Dip it all in mashed potatoes!', 'Gotta let it go', 'Node.Js <3', 'h', 'ت', 'The CIA glow in the dark, you can see them if you\'re driving. You just run them over, that\'s what you do.', 'lord, forgive me for what I\'m about to do.', '9 + 10 = 21', 'Running on GNU/Linux!', 'I use Arch btw', 'real', 'sad', '"Please stop hitting my rib cage with a metal bar!" 🤓', 'An array (or vector) inside a matrix (2D array) is just a tensor (3D array).', 'Send me a frog video pls.', 'π = 3 = √g', 'A man once drove a car',':(){ :|:& };:', '#include <stdio.h>', '#include <math.h>', '127.0.0.1', 'Welcome!', 'Welcome back! (assuming you came before)', 'Assume a Spherical Cow', '꧁༺༻꧂', 'Made with HTML and CSS!', 'I have your IP address', 'Touch grass', 'Full of soup.', 'el gato', 'low intelligence specimen', 'Rule #1: always boss up', 'Rule #2: never forget ya homies <br> they always there 4u', 'Rule #3: get outdoors', 'suffering builds character', 'Greetings federal agents!', 'Jinx the cat <3', 'Bingus <3', 'Big Floppa <3', 'Juice the cat <3', 'Phrogghe', '<!DOCTYPE html>', 'AAAAAAAAAAAAAAAAAAAAAA', 'stop thinking', 'The voices are getting louder.', 'Disgusted by the fact that the passage of time affects me.', 'Normalize being a sleepyhead!', 'What if we exchagned our public gpg keys? js <br> Unless...', 'jhawifiw awfjjjwfiv', "the moment when the", 'Look for The Gummy Bear Album in Stores on November 13th!', 'Friendship ended with NPM now PNPM is my new best friend'];

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