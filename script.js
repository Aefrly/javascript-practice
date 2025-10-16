console.log("Hello World!");

//Resource 1
let team = "Chicago Sky";
let jersey = 88;
let hasWonChampionship = false;
let stadiumLocation = null;
let nextGame;
const sport = "basketball";
console.log(team);
console.log(jersey);
console.log(hasWonChampionship);
console.log(stadiumLocation);
console.log(nextGame);
console.log(sport);

let player = {
    name: "Kahleah Copper",
    position: "Guard",
    pointsPerGame: 18.7
};

console.log(player.name); //Kahleah Copper
player.pointsPerGame = 19.2;
console.log(player.pointsPerGame); //19.2
player.isStarter = true;
player.numberOfGames = 254;
console.log(player.numberOfGames); //254

//Resource 2
let emojis = ["🥦", "🍨", "🍫", "🥛"];
console.log(emojis); //["🥦", "🍨", "🍫", "🥛"]

emojis[2] = "🧀"; //Replaces 🍫 with 🧀
console.log(emojis); //["🥦", "🧀", "🍫", "🥛"]

emojis.push("🍗");
console.log(emojis); //["🥦", "🧀", "🍫", "🥛", "🍗"]

emojis.pop(); //Removes 🍗
console.log(emojis); //["🥦", "🧀", "🍫", "🥛"]

console.log(emojis.length); //4
console.log(emojis); //["🥦", "🧀", "🍫", "🥛"]

//Resource 3
function greet(name) {
    console.log("Hello, " + name);
}
greet("Jordan"); //Hello, Jordan

function cheer(team, number) {
    return "Go " + team + "! We're number " + number + "!";
}
console.log(cheer("Sky", 1)); //Go Sky! We're number 1!

let score = 89;

if(score >= 90) {
    console.log("You got an A!");
} else if (score >= 80) {
    console.log("You got a B!");
} else {
    console.log("Keep studying!");
}

let name = "John";

if (name === "John") {
    console.log("Hi John!");
} else {
    console.log("You're not John. . .");
}

for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
}
//Output:
//Round 1
//Round 2
//Round 3
//Round 4
//Round 5

let sports = ["Basketball", "Soccer", "Tennis"];
for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}
// Output:
// Basketball
// Soccer
// Tennis 

function rateSong(songName, rating) {
    if (rating === 1 || rating === 2) {
        return songName + " is a bad song.";
    } else if (rating === 3 || rating === 4) {
        return songName + " is a good song.";
    } else {
        return songName + " is an amazing song!";
    }
}

let mySongs = ["Bang!", "The Dog Song", "Karma"]

for (let i = 0; i < mySongs.length; i++) {
    console.log(mySongs[i] + " is a jam!")
}

console.log(rateSong("Bang!", 5)); //Bang! is an amazing song!
console.log(rateSong("The Dog Song", 2)); //The Dog Song is a bad song!
console.log(rateSong("Karma", 4)); //Karma is a good song!