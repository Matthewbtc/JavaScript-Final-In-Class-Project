var randomPercent = (Math.random * 100)
function player(params) {
    var playerName;
    var weapon;
    var weapon = 50
    var health = 100
}

function enemy(params) {
    var health = 50
    var attack = 25
}

var playerName = prompt("Welcome, what is your name adventurer?")

alert(playerName + " ... what a swell name. But it will take more then a swell name to prove your worth!")
alert("What type of weapon do you prefer?")
var weapon = prompt("Axe, sword, staff, sour jems.")
console.log(player)

//switch
var gameLevel = 1;
var passWord = "yes";

var passWordCheck;

function CheckPassword() {
    switch (gameLevel) {
        case 1:
            passWordCheck = prompt("Are you here to destroy the evil in this world?")
            if (passWord == passWordCheck) {
                gameLevel = 2;
            }
            CheckPassword();
            break;
    }
}

CheckPassword();
//end question switch
var areaLevel = 1
switch (areaLevel) {
    case 1:
        alert("You travel for some time and have reached the open fields.")
        alert("You stumble across a Soft Troll in the open feild.")
        alert(playerName + " has stirred the Soft Troll!")
        alert(playerName + " engaged the Soft Troll with the " + weapon + "!")
        if (player.weapon >= enemy.health) {
            alert("Nice work, you have felled the Soft Troll with your" + weapon + "!")
            areaLevel = 2
        }
    case 2:
        alert("You have now reached the thickened woods.")
        alert("As you venture deeper into the woods it becomes compact. There are only two ways left...")
        prompt("Left or right?")
        if (randomPercent <= 50) {
            alert("You should not have gone this way! There is a Jabberwalk blocking the path!")
            alert("The Jabberwalk engages you!")
            if (player.weapon >= enemy.health) {
                alert("Hmmm... maybe you are the hero of legend...")
                areaLevel = 3
            }
        } else {
            alert("Oh great, a Stupid, Loney Spider!")
            alert(playerName + " engaged the Stupid, Lonely Spider")
            if (player.weapon >= enemy.health) {
                alert("Spider: OUCH! Why wont anyone talk to me?")
                alert("The Spider limps away.")
                areaLevel == 3
            }
        }
    case 3:
        alert("Deeper into the woods you find a ruined castle.")
        alert("???: At last you have reached me. I have guieded you here to rid of any who dare step into my rein!")
        alert("???: I shall wipe you and leave no trace of you in this world!")
        alert("The Dark King Warlock begins the battle!")
        if (player.weapon >= enemy.health) {
            alert("The Dark King Warlock: How... how have you beaten true evil...")
            alert("You have destroyed the major threat, the area is clear!")
        }

        break;
}
