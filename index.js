let roles = ['Sheriff', 'Renegade', 'Outlaw', 'Outlaw']
let diceImages = [
    "/images/dice/arrowDice.jpg",
    "/images/dice/dynamiteDice.jpg",
    "/images/dice/bull1Dice.jpg",
    "/images/dice/bull2Dice.jpg",
    "/images/dice/beerDice.jpg",
    "/images/dice/gatlingDice.jpg"
]

const charName = document.querySelector('.charName')
const charImage = document.querySelector('.charImage')
const charDescription = document.querySelector('.charDescription')
const bulletTrackNum = document.querySelector('.bulletTrackNum')
const diceContainer = document.querySelector('.dice')
const usersDice = document.getElementsByClassName('userDie')

const rollButton = document.querySelector('#rollButton')
const startButton = document.querySelector('#startButton')

let char = [
    {
        name: 'Bart Cassidy',     
        bullets: 8,
        charImage: "/images/characters/bartCassidy.jpg",
        charDescription: `You may take an arrow instead of losing a life point (except to Arrows and Dynamite). You cannot use this ability if you lose a life point to an Arrow or Dynamite, only for (1s), (2s), or Gatling Guns. You may not use this ability to take the last arrow remaining in the pile.`,
        pickMyPoison() {}
    },
    {
        name: 'Black Jack',
        bullets: 8,
        charImage: "/images/characters/blackJack.jpg",
        charDescription: `You may re-roll Dynamites (unless if you roll 3 or more).`,
        explosiveExpertise() {}
    },
    {
        name: 'Calamity Janet', 
        bullets: 8,
        charImage: "/images/characters/calamityJanet.jpg",
        charDescription: `You can use (1s) as (2s) and vice versa.`,
        freeReach() {}
    },
    {
        name: 'El Gringo', 
        bullets: 7,
        charImage: "/images/characters/elGringo.jpg",
        charDescription: `When a player makes you lose one or more life points, he must take an arrow. No change to life points lost by dynamite or arrows.`,
        takeThisWithYou() {}
    },
    {
        name: 'Jesse Jones', 
        bullets: 9,
        charImage: "/images/characters/jesseJones.jpg",
        charDescription: `If you have four life points or less, you gain two if you use Beer for yourself. For example, if you have four life points and use two beers, you get four life points.`,
        quickRecover() {}
    },
    {
        name: 'Jourdonnais', 
        bullets: 7,
        charImage: "/images/characters/jourdonnais.jpg",
        charDescription: `You never lose more than one life point to arrows.`,
        evasionTactics() {}
    },
    {
        name: 'Kit Carlson', 
        bullets: 7,
        charImage: "/images/characters/kitCarlson.jpg",
        charDescription: `For each Gatling you may discard one arrow from any player.`,
        deliverance() {}
    },
    {
        name: 'Lucky Duke', 
        bullets: 8,
        charImage: "/images/characters/luckyDuke.jpg",
        charDescription: `You may makeone extra re-roll. You may roll the dice a total of 4 times on your turn.`,
        testMyLuck() {}
    },
    {
        name: 'Paul Regret', 
        bullets: 9,
        charImage: "/images/characters/paulRegret.jpg",
        charDescription: `You never lose life points to the Gatling Gun.`,
        coldBlooded() {}
    },
    {
        name: 'Pedro Ramirez', 
        bullets: 8,
        charImage: "/images/characters/pedroRamirez.jpg",
        charDescription: `Each time you lose a life point, you may discard one of your arrows. You still use the life point when you use this ability.`,
        paidDebts() {}
    },
    {
        name: 'Rose Doolan', 
        bullets: 9,
        charImage: "/images/characters/roseDoolan.jpg",
        charDescription: `You may use (1s) or (2s) for players sitting one place further. With (1s) you may hit a player sitting two or three places away.`,
        higherRange() {}
    },
    {
        name: 'Sid Ketchum', 
        bullets: 8,
        charImage: "/images/characters/sidKetchum.jpg",
        charDescription: `At the beginning of your turn, any player of your choice gains one life point. You may also choose yourself.`,
        rememdy() {}
    },
    {
        name: 'Slab the Killer', 
        bullets: 8,
        charImage: "/images/characters/slabTheKiller.jpg",
        charDescription: `Once per turn, you can use a Beer to double a (1s) or (2s). The The dice you double takes two life points away from the same player (You cannot choose two different players). The Beer in this case does not provide any life points.`,
        doubleDamage() {}
    },
    {
        name: 'Suzy Lafayatte', 
        bullets: 8,
        charImage: "/images/characters/suzyLafayette.jpg",
        charDescription: `If you didnt roll any (1s) or (2s), you gain two life points. This only applies at the end of your turn, not during your re-rolls.`,
        nonviolencePays() {}
    },
    {
        name: 'Vulture Sam', 
        bullets: 9,
        charImage: "/images/characters/vultureSam.jpg",
        charDescription: `Each time a player is eliminated, you gain two life points.`,
        soulSteal() {}
    },
    {
        name: 'Willy the Kid', 
        bullets: 8,
        charImage: "/images/characters/willyTheKid.jpg",
        charDescription: `You only need 2 Gatlings to use the Gatling Gun. You can active the Gatling Gun only once per turn even if you roll more than two Gatling results.`,
        triggerHappy() {}
    }

]

const shuffle = (arr) => {
    let crtIndex = arr.length, randomIndex

    while (crtIndex != 0 ) {
        randomIndex = Math.floor(Math.random() * crtIndex)
        crtIndex--

        [arr[crtIndex], arr[randomIndex]] = [arr[randomIndex], arr[crtIndex]]
    }
    return arr
}

const assignRole = () => {
    let assignment = availableRoles.shift()
    if (availableRoles.length > 1) {
        availableRoles = availableRoles.slice(1)
    }
    return assignment
}

const assignChar = () => {
    let assignment = availableChar.shift()
    availableChar = availableChar.slice(1)
    return assignment
}

let availableRoles = [...roles]
shuffle(availableRoles)

let availableChar = [...char]
shuffle(availableChar)

let userBlownDie = []
let userSavedDie = new Array(5)

let player = {
    role: assignRole([availableRoles]),
    character: assignChar([availableChar]),
    arrows: 0,
    gatling: 0,
    rolls: 3,
    cardRevealed: false,
    active: true
}

class computerPlayer {
    constructor() {
        arrows = 0
        gatling = 0
        rolls = 3
        role = assignRole([availableRoles])
        character = assignChar([availableChar])
        cardRevealed = false
        active = true
    }
}

/*********************************************************\
 * FUNCTIONS
\*********************************************************/

const generatePlayers = (numPlayers) => {
    for(let i = 0; i < numPlayers; i++) {
        let cpuPlayer = new computerPlayer()
    }
}

const roll = () => {
    /*********************************
     * 0 - Arrow
     * 1 - Dynamite
     * 2 - (1s)
     * 3 - (2s)
     * 4 - Beer
     * 5 - Gatling
    *********************************/
    let userD = [...usersDice]
    userD.forEach(dice => {
        if (dice.classList.contains('selected')) {
            dice.classList.toggle('selected')
        }
    })

    let rolledDice = new Array(5);
    if (userBlownDie.length > 3 || player.rolls < 1) {
        (userBlownDie.length > 3) ? player.character.bullets-- : null
        rollButton.disable = true
    } else {
        for (let i = 0; i < 5; i++) {
            if (userSavedDie[i]) {
                usersDice[i] = userSavedDie
            } else {
                rolledDice[i] = Math.floor(Math.random() * 6)
                usersDice[i].setAttribute('src', diceImages[rolledDice[i]])
            }
            if (rolledDice[i] === 0) {
                player.arrows++
                console.log('Arrows: ' + player.arrows)
            } else if(rolledDice[i] === 1) {
                userBlownDie.push(i)
            } else if(rolledDice[i] === 5) {
                player.gatling++
            }
        }
        if (userBlownDie.length > 0) {
            for (let i = 0; i < userBlownDie.length; i++) {
                usersDice[userBlownDie[i]].setAttribute('src', diceImages[1])
            }
        }
        if (player.gatling > 2) {
            console.log('Gatling Gun Activated! New Health: ' + player.character.bullets)
        }
        player.rolls--
    }
    keepDice()
}

const refreshRolls = () => {
    player.rolls = 3;
}

const select = (evt) => {
    let target = evt.target
    if (target.classList.contains('selected')) {
        target.classList.toggle('selected')
    } else if (!(target.getAttribute('src') === "/images/dice/dynamiteDice.jpg")) {
        target.classList.add('selected')
        for (let i = 0; i < 5; i++) {
            console.log('loop ran!')
            if (target === usersDice[i]) {
                userSavedDie[i] = usersDice[i]
            }
        }
    } else {}
    console.log(target)
}

const keepDice = () => {
    diceContainer.addEventListener('click', function(evt) {select(evt)})
}

const refreshStats = () => {
    bulletTrackNum.innerHTML = player.character.bullets
    charName.innerHTML = player.character.name
    charImage.setAttribute('src', player.character.charImage)
    charDescription.innerHTML = player.character.charDescription
}

const startGame = () => {
    startButton.style.display = 'none'
    rollButton.style.display = 'block'

    refreshStats()
}

const reset = () => {
    document.location.reload(true)
}

console.log(player.character.bullets)
startButton.addEventListener('click', startGame)
resetButton.addEventListener('click', reset)
rollButton.addEventListener('click', roll)
