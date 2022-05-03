var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAtack  = 12;

console.log(enemyNames);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function (enemyName) {
    // Alert players that they are starting the round
    window.alert("welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "fight" || promptFight === "FIGHT") {

    enemyHealth = enemyHealth - playerAttack;

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    playerHealth = playerHealth - enemyAtack;
    
    console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if(playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
1
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to hoose a valid option. Try Again!");
    }
}



// Game States
// "WIN" - Plyaer robot has defeated all enemy-robots
//     * Fight all enemy robots
//     * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}