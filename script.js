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