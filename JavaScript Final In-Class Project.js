var randomPercent = (Math.random * 100)
var enemyHealth = 0
var areaLevel = 1
var playerName = prompt("Welcome, what is your name adventurer?")

alert(playerName + " ... what a swell name. But it will take more then a swell name to prove your worth!")

switch (option) {
    case 1:
        prompt ("Do you wish to fight and purge the evil in this world?")
       if ("Yes", "yes") {
           areaLevel = 1
       } else {
           alert("Then what are you doing here?")
       }
        break;

    default:
        break;
}

switch (areaLevel) {
    case 1:
        alert("You travel for some time and have reached the open fields.")
        alert("You stumble across a Soft Troll in the open feild.")
        alert(playerName + " has stirred the Soft Troll!")
        if (enemyHealth == 0) {
            alert("Nice work, you have felled the Soft Troll!")
            areaLevel = 2
        }
    case 2:
        alert("You have now reached the thickened woods.")
        alert("As you venture deeper into the woods it becomes compact. There are only two ways left...")
        prompt("Left or right?")
        if (randomPercent <= 50) {
            alert("You should not have gone this way! There is a Jabberwalk blocking the path!")
            alert("The Jabberwalk engages you!")
            if (enemyHealth == 0) {
                alert("Hmmm... maybe you are the hero of legend...")
                areaLevel = 3
            }
        } else {
            alert("Oh great, a Stupid, Loney Spider!")
            alert(playerName + " engaged the Stupid, Lonely Spider")
            if (enemyHealth == 0) {
                alert("Spider: OUCH! Why wont anyone talk to me?")
                alert("The Spider limps away.")
                areaLevel = 3
            }
        }
    case 3:
        alert("Deeper into the woods you find a ruined castle.")
        alert("At last are you ready to prove your worth?")
        alert("DKW: I have guieded you here to rid of any who dare step into my rein!")
        alert("DKW: I shall wipe you and leave no trace of you in this world!")
        alert("The Dark King Warlock begins the battle!")
        if (enemyHealth == 0) {
            alert("How... how have you beaten true evil...")
            alert("You have destroyed the major threat, the area is clear!")
        }

        break;
}
