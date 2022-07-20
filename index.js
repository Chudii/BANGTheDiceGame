let roles = ['Sheriff', 'Renegade', 'Outlaw', 'Outlaw']
let roleIcons = [
    "/images/roles/sheriff.png",
    "/images/roles/renegade.png",
    "/images/roles/outlaw.png"
]
let diceImages = [
    "/images/dice/arrowDice.jpg",
    "/images/dice/dynamiteDice.jpg",
    "/images/dice/bull1Dice.jpg",
    "/images/dice/bull2Dice.jpg",
    "/images/dice/beerDice.jpg",
    "/images/dice/gatlingDice.jpg"
]

/*********************************************************\
 * CENTER PILE
\*********************************************************/

const centerPile = document.querySelector('.centerPile')
const centerArrow = document.getElementsByClassName('centerArrow')

/*********************************************************\
 * USER CARD
\*********************************************************/

const userCard = document.querySelector('.user')
const charName = document.querySelector('.charName')
const userRole = document.querySelector('#playerRole')
const charImage = document.querySelector('.charImage')
const charDescription = document.querySelector('.charDescription')
const bulletTrackNum = document.querySelector('.bulletTrackNum')
const diceContainer = document.querySelector('#userDice')
const usersDice = document.getElementsByClassName('userDie')
const userArrows = document.querySelector('.userArrows')
const userPointer = document.querySelector('.user-pointer')

/*********************************************************\
 * COMPUTER 1 CARD
\*********************************************************/

const compPlayer1 = document.querySelector('.compPlayer1')
const compPlayer1Back = document.querySelector('.compPlayer1Back')
const comp1Name = document.querySelector('#comp1Name')
const comp1Role = document.querySelector('#comp1Role')
const comp1Image = document.querySelector('#comp1Image')
const comp1Desc = document.querySelector('#comp1Desc')
const comp1Track = document.querySelector('#comp1Track')
const comp1DiceContainer = document.querySelector('#comp1Dice')
const comp1Dice = document.getElementsByClassName('comp1Dice')
const comp1Arrows = document.querySelector('#comp1Arrows')
const comp1Pointer = document.querySelector('.comp1-pointer')

/*********************************************************\
 * COMPUTER 2 CARD
\*********************************************************/

const compPlayer2 = document.querySelector('.compPlayer2')
const compPlayer2Back = document.querySelector('.compPlayer2Back')
const comp2Name = document.querySelector('#comp2Name')
const comp2Role = document.querySelector('#comp2Role')
const comp2Image = document.querySelector('#comp2Image')
const comp2Desc = document.querySelector('#comp2Desc')
const comp2Track = document.querySelector('#comp2Track')
const comp2DiceContainer = document.querySelector('#comp2Dice')
const comp2Dice = document.getElementsByClassName('comp2Dice')
const comp2Arrows = document.querySelector('#comp2Arrows')
const comp2Pointer = document.querySelector('.comp2-pointer')

/*********************************************************\
 * COMPUTER 3 CARD
\*********************************************************/

const compPlayer3 = document.querySelector('.compPlayer3')
const compPlayer3Back = document.querySelector('.compPlayer3Back')
const comp3Name = document.querySelector('#comp3Name')
const comp3Role = document.querySelector('#comp3Role')
const comp3Image = document.querySelector('#comp3Image')
const comp3Desc = document.querySelector('#comp3Desc')
const comp3Track = document.querySelector('#comp3Track')
const comp3DiceContainer = document.querySelector('#comp3Dice')
const comp3Dice = document.getElementsByClassName('comp3Dice')
const comp3Arrows = document.querySelector('#comp3Arrows')
const comp3Pointer = document.querySelector('.comp3-pointer')

/*********************************************************\
 * BUTTONS
\*********************************************************/

const abilityButton = document.querySelector('#abilityButton')
const resolveButton = document.querySelector('#resolveButton')
const reserveButton = document.querySelector('#reserveButton')
const resetButton = document.querySelector('#resetButton')
const rollButton = document.querySelector('#rollButton')
const startButton = document.querySelector('#startButton')
const rulesButtonTitle = document.querySelector('#infoButton')
const rulesButton = document.querySelector('#infoInGameButton')

const pointers = document.getElementsByClassName('pointer')
const compPlayer = document.getElementsByClassName('compPlayer')
const compNames = document.getElementsByClassName('compName') 

const rulesPage = document.querySelector('.rulesPopUp')
const titleScreen = document.querySelector('.titleScreen')
const mainScreen = document.querySelector('.container')

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
    return assignment
}

const assignChar = () => {
    let assignment = availableChar.shift()
    return assignment
}

let availableRoles = [...roles]
shuffle(availableRoles)

let availableChar = [...char]
shuffle(availableChar)

/*********************************************************\
 * GAME MECHANICS
\*********************************************************/

let userBlownDie = []
let comp1BlownDie = []
let comp2BlownDie = []
let comp3BlownDie = []
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
        this.arrows = 0
        this.gatling = 0
        this.rolls = 3
        this.role = assignRole([availableRoles])
        this.character = assignChar([availableChar])
        this.cardRevealed = false
        this.active = true
    }
    toggleActive() {
        this.active = false
        this.cardRevealed = true
    }
}

let sheriff
let cpuPlayer = []
let numOfResolvableDice = 0
let playerTarget
let currentResolvedDice 

let comp1DiceRoll = []
let comp2DiceRoll = []
let comp3DiceRoll = []

/*********************************************************\
 * FUNCTIONS
\*********************************************************/

const generatePlayers = () => {
    let comp1 = new computerPlayer()
    comp1.maxBullets = comp1.character.bullets
    let comp2 = new computerPlayer()
    comp2.maxBullets = comp2.character.bullets
    let comp3 = new computerPlayer()
    comp3.maxBullets = comp3.character.bullets
    cpuPlayer.push(comp1, comp2, comp3)
    player.maxBullets = player.character.bullets
}

const playTurn = () => {
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
            dice.classList.toggle('no-shake')
        }
        if (dice.classList.contains('used')) {
            dice.classList.remove('used')
        }
    })
    if (player.rolls < 3) {
        for (let i = 0; i < 5; i++) {
            if (!(userD[i].getAttribute('src') === diceImages[1])) {
                userD[i].classList.add('shake')
            }
            if (userD[i].classList.contains('no-shake')) {
                userD[i].classList.remove('shake')
            } else {
                if (userD[i].getAttribute('src') === diceImages[5]) {
                    player.gatling--
                }
            }
        }
    } else {
        userD.forEach(dice => {
            dice.classList.add("shake")
        })
    }
    setTimeout(() => {
        if (resolveButton.style.opacity === "0.5") {
            resolveButton.style.opacity = "1"
        }

        userD.forEach(dice => {
            dice.classList.remove("shake")
        })

        let rolledDice = new Array(5)

        for (let i = 0; i < 5; i++) {
            checkIfActive()
            if (userSavedDie[i]) {
                rolledDice[i] = null
                switch (userSavedDie[i]) {
                    case 0:
                        usersDice[i].setAttribute('src', diceImages[0])
                        break
                    case 1:
                        usersDice[i].setAttribute('src', diceImages[1])
                        break
                    case 2:
                        usersDice[i].setAttribute('src', diceImages[2])
                        break
                    case 3:
                        usersDice[i].setAttribute('src', diceImages[3])
                        break
                    case 4:
                        usersDice[i].setAttribute('src', diceImages[4])
                        break
                    case 5:
                        usersDice[i].setAttribute('src', diceImages[5])
                        break
                }
                usersDice[i].setAttribute('src', diceImages[userSavedDie[i]]) 
            } else {
                rolledDice[i] = Math.floor(Math.random() * 6)
                for (let i = 0; i < userBlownDie.length; i++) {
                    rolledDice[userBlownDie[i]] = null
                }
                usersDice[i].setAttribute('src', diceImages[rolledDice[i]])
            }
            if (rolledDice[i] === 0) {
                resolveArrow()
                resolveAllArrows()
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
            resolveGatlingGun()
            console.log('Gatling Gun Activated! New Health: ' + player.character.bullets)
        }
        player.rolls--
        if (userBlownDie.length > 2) {
            resolveThreeDynamite()
            showStatus(userCard, 'hit')
            endingTurn()
            console.log('Boom')
            player.gatling = 0
        } else if (player.rolls < 1) {
            rollButton.disabled = true;
            rollButton.style.opacity = "0.5"
            player.gatling = 0
            (numOfResolvableDice === 0) ? checkResolvableDice() : null
            endingTurn()
            numOfResolvableDice = 0
        } else {
            rollButton.style.display = 'none'
            selectDice()
        }
        resolveButton.disabled = false;
        userSavedDie = new Array(5)
    }, 1000)
}

const refreshRolls = () => {
    player.rolls = 3;
}

const refreshStats = () => {
    bulletTrackNum.innerHTML = player.character.bullets

    comp1Track.innerHTML = cpuPlayer[0].character.bullets
    comp2Track.innerHTML = cpuPlayer[1].character.bullets
    comp3Track.innerHTML = cpuPlayer[2].character.bullets
}

const select = (evt) => {
    let target = evt.target
    if (target.classList.contains('selected')) {
        target.classList.toggle('selected')
    } else if (!(target.getAttribute('src') === "/images/dice/dynamiteDice.jpg")) {
        target.classList.add('selected')
    } else {
        return console.log('Error in select function')
    }

    rollButton.style.display = 'none'
}

const listenToDice = function (evt) {
    select(evt)
}

const selectDice = () => {
    diceContainer.addEventListener('click', listenToDice)
    reserveButton.style.display = 'flex'
}

const reserveDice = () => {
    reserveButton.style.display = 'none'
    rollButton.style.display = 'flex'

    for (let i = 0; i < 5; i++) {
        if (usersDice[i].classList.contains('selected')) {
            switch (usersDice[i].getAttribute('src')) {
                case diceImages[0]:
                    userSavedDie[i] = 0
                    break
                case diceImages[1]: 
                    userSavedDie[i] = 1
                    break
                case diceImages[2]: 
                    userSavedDie[i] = 2
                    break
                case diceImages[3]: 
                    userSavedDie[i] = 3
                    break
                case diceImages[4]: 
                    userSavedDie[i] = 4
                    break
                case diceImages[5]: 
                    userSavedDie[i] = 5
                    break
            }
        }
    }
    console.log(userSavedDie)
    diceContainer.removeEventListener('click', listenToDice)

}

const checkResolvableDice = () => {
    let userD = [...usersDice]
    userD.forEach(dice => {
        if (!(dice.classList.contains('used'))) {
            switch(dice.getAttribute('src')) {
                case diceImages[2]:
                    if (!(dice.classList.contains('used'))) {
                        numOfResolvableDice++
                    }
                    break
                case diceImages[3]:
                    if (!(dice.classList.contains('used'))) {
                        numOfResolvableDice++
                    }
                    break
                case diceImages[4]:
                    if (!(dice.classList.contains('used'))) {
                        numOfResolvableDice++
                    }
                    break
            }
        }
    })
}

const getSelectedDice = function(evt) {
    let target = evt.target
    
    let userD = [...usersDice]
    userD.forEach(dice => {
        if (dice.classList.contains('selected')) {
            dice.classList.toggle('selected')
        }
    })

    if (target.classList.contains('used')) {
        
    } else {
        console.log(target)
        if (!currentResolvedDice) {
            switch (target.getAttribute('src')) {
                case diceImages[2]:
                    target.classList.toggle('selected')
                    currentResolvedDice = target
                    if (cpuPlayer[0].active && cpuPlayer[2].active) {
                        compPlayer1.style.borderColor = "white"
                        compPlayer3.style.borderColor = "white"
                        compPlayer1.addEventListener('click', targetingComp1, {once: true})
                        compPlayer3.addEventListener('click', targetingComp3, {once: true})
                    }
                    break
                case diceImages[3]:    
                    target.classList.toggle('selected')
                    currentResolvedDice = target
                    if (cpuPlayer[1].active) {
                        compPlayer2.style.borderColor = "white"
                        compPlayer2.addEventListener('click', targetingComp2, {once: true})
                    }
                    break
                case diceImages[4]:
                    target.classList.toggle('selected')
                    currentResolvedDice = target
                    if (cpuPlayer[0].active && cpuPlayer[1].active && cpuPlayer[2].active) {
                        userCard.style.borderColor = "white"
                        compPlayer1.style.borderColor = "white"
                        compPlayer2.style.borderColor = "white"
                        compPlayer3.style.borderColor = "white"
                        charImage.addEventListener('click', healingSelf, {once: true})
                        compPlayer1.addEventListener('click', healingComp1, {once: true})
                        compPlayer2.addEventListener('click', healingComp2, {once: true})
                        compPlayer3.addEventListener('click', healingComp3, {once: true})
                    }
                    break
            }  
        } else if (target.getAttribute('src') === currentResolvedDice.getAttribute('src')) {
            console.log('Wow')
            target.classList.toggle('selected')
            switch (target.getAttribute('src')) {
                case diceImages[2]:
                    currentResolvedDice = target
                    if (cpuPlayer[0].active && cpuPlayer[2].active) {
                        compPlayer1.style.borderColor = "white"
                        compPlayer3.style.borderColor = "white"
                        compPlayer1.removeEventListener('click', targetingComp1, {once: true})
                        compPlayer3.removeEventListener('click', targetingComp3, {once: true})
                        setTimeout(() => {
                            compPlayer1.addEventListener('click', targetingComp1, {once: true})
                            compPlayer3.addEventListener('click', targetingComp3, {once: true})
                        }, 500)
                        
                    }
                    break
                case diceImages[3]:
                    currentResolvedDice = target
                    if (cpuPlayer[1].active) {
                        compPlayer2.style.borderColor = "white"
                        compPlayer2.removeEventListener('click', targetingComp2, {once: true})
                        setTimeout(() => {
                            compPlayer2.addEventListener('click', targetingComp2, {once: true})
                        }, 500)
                    }
                    break
                case diceImages[4]:
                    currentResolvedDice = target
                    if (cpuPlayer[0].active && cpuPlayer[1].active && cpuPlayer[2].active) {
                        userCard.style.borderColor = "white"
                        compPlayer1.style.borderColor = "white"
                        compPlayer2.style.borderColor = "white"
                        compPlayer3.style.borderColor = "white"
                        charImage.removeEventListener('click', healingSelf, {once: true})
                        compPlayer1.removeEventListener('click', healingComp1, {once: true})
                        compPlayer2.removeEventListener('click', healingComp2, {once: true})
                        compPlayer3.removeEventListener('click', healingComp3, {once: true})
                        setTimeout(() => {
                            charImage.addEventListener('click', healingSelf, {once: true})
                            compPlayer1.addEventListener('click', healingComp1, {once: true})
                            compPlayer2.addEventListener('click', healingComp2, {once: true})
                            compPlayer3.addEventListener('click', healingComp3, {once: true})
                        }, 500)    
                    }
                    break
            }
        } else {
            switch (currentResolvedDice.getAttribute('src')) {
                case diceImages[2]:
                    switch (target.getAttribute('src')) {
                        case diceImages[3]:
                            target.classList.toggle('selected')
                            currentResolvedDice = target
                            if (cpuPlayer[1].active) {
                                compPlayer1.style.borderColor = "black"
                                compPlayer2.style.borderColor = "white"
                                compPlayer3.style.borderColor = "black"
                                compPlayer1.removeEventListener('click', targetingComp1, {once: true})
                                compPlayer3.removeEventListener('click', targetingComp3, {once: true})
                                compPlayer2.addEventListener('click', targetingComp2, {once: true})
                            }
                            break
                        case diceImages[4]:
                            target.classList.toggle('selected')
                            currentResolvedDice = target
            
                            if (cpuPlayer[0].active && cpuPlayer[1].active && cpuPlayer[2].active) {
                                userCard.style.borderColor = "white"
                                compPlayer1.style.borderColor = "white"
                                compPlayer2.style.borderColor = "white"
                                compPlayer3.style.borderColor = "white"
                                compPlayer1.removeEventListener('click', targetingComp1, {once: true})
                                compPlayer3.removeEventListener('click', targetingComp3, {once: true})
                                charImage.addEventListener('click', healingSelf, {once: true})
                                compPlayer1.addEventListener('click', healingComp1, {once: true})
                                compPlayer2.addEventListener('click', healingComp2, {once: true})
                                compPlayer3.addEventListener('click', healingComp3, {once: true})
                            }
                            break
                    }
                    break
                case diceImages[3]:
                    switch (target.getAttribute('src')) {
                        case diceImages[2]:
                            target.classList.toggle('selected')
                            currentResolvedDice = target
                            if (cpuPlayer[0].active && cpuPlayer[2].active) {
                                compPlayer1.style.borderColor = "white"
                                compPlayer2.style.borderColor = "black"
                                compPlayer3.style.borderColor = "white"
                                compPlayer2.removeEventListener('click', targetingComp2, {once: true})
                                compPlayer1.addEventListener('click', targetingComp1, {once: true})
                                compPlayer3.addEventListener('click', targetingComp3, {once: true})
                            }
                            break
                        case diceImages[4]:
                            target.classList.toggle('selected')
                            currentResolvedDice = target
                            if (cpuPlayer[0].active && cpuPlayer[1].active && cpuPlayer[2].active) {
                                userCard.style.borderColor = "white"
                                compPlayer1.style.borderColor = "white"
                                compPlayer2.style.borderColor = "white"
                                compPlayer3.style.borderColor = "white"
                                compPlayer2.removeEventListener('click', targetingComp2, {once: true})
                                charImage.addEventListener('click', healingSelf, {once: true})
                                compPlayer1.addEventListener('click', healingComp1, {once: true})
                                compPlayer2.addEventListener('click', healingComp2, {once: true})
                                compPlayer3.addEventListener('click', healingComp3, {once: true})
                            }
                            break
                    }
                    break
                case diceImages[4]:
                    switch (target.getAttribute('src')) {
                        case diceImages[2]:
                            target.classList.toggle('selected')
                            currentResolvedDice = target
                            if (cpuPlayer[0].active && cpuPlayer[2].active) {
                                userCard.style.borderColor = "black"
                                compPlayer1.style.borderColor = "white"
                                compPlayer2.style.borderColor = "black"
                                compPlayer3.style.borderColor = "white"
                                charImage.removeEventListener('click', healingSelf, {once: true})
                                compPlayer1.removeEventListener('click', healingComp1, {once: true})
                                compPlayer2.removeEventListener('click', healingComp2, {once: true})
                                compPlayer3.removeEventListener('click', healingComp3, {once: true})
                                compPlayer1.addEventListener('click', targetingComp1, {once: true})
                                compPlayer3.addEventListener('click', targetingComp3, {once: true})
                            }
                            break
                        case diceImages[3]:
                            target.classList.toggle('selected')
                            currentResolvedDice = target
                            if (cpuPlayer[1].active) {
                                userCard.style.borderColor = "black"
                                compPlayer1.style.borderColor = "black"
                                compPlayer2.style.borderColor = "white"
                                compPlayer3.style.borderColor = "black"
                                charImage.removeEventListener('click', healingSelf, {once: true})
                                compPlayer1.removeEventListener('click', healingComp1, {once: true})
                                compPlayer2.removeEventListener('click', healingComp2, {once: true})
                                compPlayer3.removeEventListener('click', healingComp3, {once: true})
                                compPlayer2.addEventListener('click', targetingComp2, {once: true})
                            }
                            break
                    }
                    break
            }
        }

        
        
    }

    
    
}

const endingTurn = () => {
    if (numOfResolvableDice < 1) {
        rollButton.innerHTML = `<img src="/images/buttons/startIcon.png" class="btn-img">End Turn`
        rollButton.removeEventListener('click', roll)
        rollButton.addEventListener('click', endTurn)
        diceContainer.removeEventListener('click', getSelectedDice)
        rollButton.disabled = false
        rollButton.style.opacity = "1"
        resolveButton.disabled = true
        resolveButton.style.opacity = "0.5"
        
        charImage.removeEventListener('click', healingSelf, {once: true})
        compPlayer1.removeEventListener('click', healingComp1, {once: true})
        compPlayer2.removeEventListener('click', healingComp2, {once: true})
        compPlayer3.removeEventListener('click', healingComp3, {once: true})
        compPlayer1.removeEventListener('click', targetingComp1, {once: true})
        compPlayer2.removeEventListener('click', targetingComp2, {once: true})
        compPlayer3.removeEventListener('click', targetingComp3, {once: true})
    }
}

const comp1Turn = () => {
    comp1Roll()
}

const comp2Turn = () => {
    comp1Pointer.style.display = "none"
    comp2Pointer.style.display = "block"
    comp3Pointer.style.display = "none"
    comp2Roll()
}

const comp3Turn = () => {
    comp1Pointer.style.display = "none"
    comp2Pointer.style.display = "none"
    comp3Pointer.style.display = "block"
    comp3Roll()
}

const endTurn = () => {
    if (cpuPlayer[0].active) {
        userPointer.style.display = "none"
        comp1Pointer.style.display = "block"
        comp1Turn()
    } else if (cpuPlayer[1].active) {
        comp2Turn()
    }
    rollButton.disabled = true
    rollButton.style.opacity = "0.5"
}

const resolveDice = () => {
    reserveButton.style.display = 'none'
    rollButton.style.display = 'flex'
    rollButton.disabled = true
    rollButton.style.opacity = "0.5"
    resolveButton.disabled = true
    resolveButton.style.opacity = "0.5"
    checkResolvableDice()
    endingTurn()
    let userD = [...usersDice]
    userD.forEach(dice => {
        if (dice.classList.contains('selected')) {
            dice.classList.toggle('selected')
        }
    })
    diceContainer.removeEventListener('click', listenToDice)
    diceContainer.addEventListener('click', getSelectedDice)
    
}

const appointSheriff = () => {
    for (let i = 0; i < cpuPlayer.length; i++) {
        if (cpuPlayer[i].role === 'Sheriff') {
            cpuPlayer[i].character.bullets += 2
            cpuPlayer[i].maxBullets += 2
            compNames[i].style.textDecoration = "underline"
        }
    }
    if (player.role === 'Sheriff') {
        player.character.bullets += 2
        player.maxBullets += 2
        charName.style.textDecoration = "underline"
    }
}

const uploadStats = () => {
    switch (player.role) {
        case 'Sheriff':
            userRole.innerHTML = `<img src=${roleIcons[0]} class="sheriffIcon">${player.role}`
            break
        case 'Renegade': 
            userRole.innerHTML = `<img src=${roleIcons[1]} class="renegadeIcon">${player.role}`
            break
        case 'Outlaw':
            userRole.innerHTML = `<img src=${roleIcons[2]} class="outlawIcon">${player.role}`
            break
    }

    cpuPlayer.forEach((cpu) => {
        switch (cpu) {
            case cpuPlayer[0]:
                switch (cpu.role) {
                    case 'Sheriff':
                        comp1Role.innerHTML = `<img src=${roleIcons[0]} class="sheriffIcon">${cpu.role}`
                        break
                    case 'Renegade': 
                        comp1Role.innerHTML = `<img src=${roleIcons[1]} class="renegadeIcon">${cpu.role}`
                        break
                    case 'Outlaw':
                        comp1Role.innerHTML = `<img src=${roleIcons[2]} class="outlawIcon">${cpu.role}`
                        break
                }
                break
            case cpuPlayer[1]:
                switch (cpu.role) {
                    case 'Sheriff':
                        comp2Role.innerHTML = `<img src=${roleIcons[0]} class="sheriffIcon">${cpu.role}`
                        break
                    case 'Renegade': 
                        comp2Role.innerHTML = `<img src=${roleIcons[1]} class="renegadeIcon">${cpu.role}`
                        break
                    case 'Outlaw':
                        comp2Role.innerHTML = `<img src=${roleIcons[2]} class="outlawIcon">${cpu.role}`
                        break
                }
                break
            case cpuPlayer[2]:
                switch (cpu.role) {
                    case 'Sheriff':
                        comp3Role.innerHTML = `<img src=${roleIcons[0]} class="sheriffIcon">${cpu.role}`
                        break
                    case 'Renegade': 
                        comp3Role.innerHTML = `<img src=${roleIcons[1]} class="renegadeIcon">${cpu.role}`
                        break
                    case 'Outlaw':
                        comp3Role.innerHTML = `<img src=${roleIcons[2]} class="outlawIcon">${cpu.role}`
                        break
                }
                break
        }
        
    })

    

    charName.innerHTML = player.character.name
    charImage.setAttribute('src', player.character.charImage)
    charDescription.innerHTML = player.character.charDescription
    bulletTrackNum.innerHTML = player.character.bullets

    comp1Name.innerHTML = cpuPlayer[0].character.name
    comp1Image.setAttribute('src', cpuPlayer[0].character.charImage)
    comp1Desc.innerHTML = cpuPlayer[0].character.charDescription
    comp1Track.innerHTML = cpuPlayer[0].character.bullets

    comp2Name.innerHTML = cpuPlayer[1].character.name
    comp2Image.setAttribute('src', cpuPlayer[1].character.charImage)
    comp2Desc.innerHTML = cpuPlayer[1].character.charDescription
    comp2Track.innerHTML = cpuPlayer[1].character.bullets

    comp3Name.innerHTML = cpuPlayer[2].character.name
    comp3Image.setAttribute('src', cpuPlayer[2].character.charImage)
    comp3Desc.innerHTML = cpuPlayer[2].character.charDescription
    comp3Track.innerHTML = cpuPlayer[2].character.bullets
}

const startGame = () => {
    titleScreen.style.display = "none"
    mainScreen.style.display = "flex"

    startButton.style.display = 'none'
    rollButton.style.display = 'flex'
    abilityButton.style.opacity = "0.5"
    resolveButton.style.opacity = "0.5"
    
    comp1Pointer.style.display = "none"
    comp2Pointer.style.display = "none"
    comp3Pointer.style.display = "none"

    generatePlayers()
    appointSheriff()
    uploadStats()
    
    resolveButton.addEventListener('click', resolveDice)
    if (player.role === "Sheriff") {
        sheriff = player
    } else {
        cpuPlayer.forEach((cpu) => {
            if (cpu.role === "Sheriff") {
                sheriff = cpu
            }
        })
    }
}

const reset = () => {
    document.location.reload(true)
}

/*********************************************************\
 * DICE RESOLVE FUNCTIONS
\*********************************************************/

const resolveBeer = (player) => {
    if ((player.character.bullets + 1) <= player.maxBullets) {
        player.character.bullets++
    }
    refreshStats()
}

const resolveArrow = () => {
    player.arrows++
    console.log('Arrows: ' + player.arrows)
    setTimeout(() => {
        let newArrow = document.createElement('img')
        newArrow.setAttribute('src', "/images/centralPile/indianArrow.png")
        newArrow.classList.add('userArrow')
        newArrow.classList.add('arrow')

        centerPile.removeChild(centerPile.lastElementChild)
        userArrows.appendChild(newArrow)
    }, 2000)
}

const resolveCompArrow = (compPlay) => {
    compPlay.arrows++
    let newArrow = document.createElement('img')
    newArrow.setAttribute('src', "/images/centralPile/indianArrow.png")
    switch (compPlay) {
        case cpuPlayer[0]:
            newArrow.classList.add('arrow')
    
            centerPile.removeChild(centerPile.lastElementChild)
            comp1Arrows.appendChild(newArrow)
            break
        case cpuPlayer[1]:
            newArrow.classList.add('arrow')
    
            centerPile.removeChild(centerPile.lastElementChild)
            comp2Arrows.appendChild(newArrow)
            break
        case cpuPlayer[2]:
            newArrow.classList.add('arrow')
    
            centerPile.removeChild(centerPile.lastElementChild)
            comp3Arrows.appendChild(newArrow)
            break
    }
}

const resolveAllArrows = () => {
    
    if (centerArrow.length <= 0) {
        showStatus(userCard, 'hit')
      
        for (let i = 0; i < 10; i++) {
            let newArrow = document.createElement('img')
            newArrow.setAttribute('src', "/images/centralPile/indianArrow.png")
            newArrow.classList.add('centerArrow')
            newArrow.classList.add('arrow')
            centerPile.appendChild(newArrow)
        }

        for (let i = userArrows.childElementCount; i > 0; i--) {
            userArrows.removeChild(userArrows.childNodes[i - 1])
            player.character.bullets--
        }

        if (cpuPlayer[0].active) {
            for (let i = comp1Arrows.childElementCount; i > 0; i--) {
                comp1Arrows.removeChild(comp1Arrows.childNodes[i - 1])
                cpuPlayer[0].character.bullets--
            }
            showStatus(compPlayer1, 'hit')
        }

        if (cpuPlayer[1].active) {
            for (let i = comp2Arrows.childElementCount; i > 0; i--) {
                comp2Arrows.removeChild(comp2Arrows.childNodes[i - 1])
                cpuPlayer[1].character.bullets--
            }
            showStatus(compPlayer2, 'hit')
        }
        
        if (cpuPlayer[2].active) {
            for (let i = comp3Arrows.childElementCount; i > 0; i--) {
                comp3Arrows.removeChild(comp3Arrows.childNodes[i - 1])
                cpuPlayer[2].character.bullets--
            }
            showStatus(compPlayer3, 'hit')
        } 
    }
}

const resolveThreeDynamite = () => {
    player.character.bullets--
    rollButton.disabled = true;
    rollButton.style.opacity = "0.5"
    setTimeout(() => {
        refreshStats()
    }, 2000)
}

const resolveGatlingGun = () => {
    cpuPlayer[0].character.bullets--
    cpuPlayer[1].character.bullets--
    cpuPlayer[2].character.bullets--
    showStatus(compPlayer1, 'hit')
    showStatus(compPlayer2, 'hit')
    showStatus(compPlayer3, 'hit')

    player.gatling = 0
    player.arrows = 0
    setTimeout(() => {
        let newArrow = document.createElement('img')
        newArrow.setAttribute('src', "/images/centralPile/indianArrow.png")
        newArrow.classList.add('centerArrow')
        newArrow.classList.add('arrow')

        for (let i = userArrows.childElementCount; i > 0; i--) {
            userArrows.removeChild(userArrows.childNodes[i - 1])
            centerPile.appendChild(newArrow)
        }
        refreshStats()
    }, 2000)
}

const resolveCompGatlingGun = (compPlay) => {
    player.character.bullets--
    showStatus(userCard, 'hit')
    switch (compPlay) {
        case cpuPlayer[0]:
            if (cpuPlayer[1].active) {
                cpuPlayer[1].character.bullets--
                showStatus(compPlayer2, 'hit')
            }
            if (cpuPlayer[2].active) {
                cpuPlayer[2].character.bullets--
                showStatus(compPlayer3, 'hit')
            }
            cpuPlayer[0].gatling = 0
            cpuPlayer[0].arrows = 0
            setTimeout(() => {
                let newArrow = document.createElement('img')
                newArrow.setAttribute('src', "/images/centralPile/indianArrow.png")
                newArrow.classList.add('centerArrow')
                newArrow.classList.add('arrow')

                for (let i = comp1Arrows.childElementCount; i > 0; i--) {
                    comp1Arrows.removeChild(comp1Arrows.childNodes[i - 1])
                    centerPile.appendChild(newArrow)
                }
                refreshStats()
            }, 2000)
            break
        case cpuPlayer[1]:
            if (cpuPlayer[0].active) {
                cpuPlayer[0].character.bullets--
                showStatus(compPlayer2, 'hit')
            }
            if (cpuPlayer[2].active) {
                cpuPlayer[2].character.bullets--
                showStatus(compPlayer3, 'hit')
            }
            cpuPlayer[0].gatling = 0
            cpuPlayer[0].arrows = 0
            setTimeout(() => {
                let newArrow = document.createElement('img')
                newArrow.setAttribute('src', "/images/centralPile/indianArrow.png")
                newArrow.classList.add('centerArrow')
                newArrow.classList.add('arrow')

                for (let i = comp2Arrows.childElementCount; i > 0; i--) {
                    comp2Arrows.removeChild(comp2Arrows.childNodes[i - 1])
                    centerPile.appendChild(newArrow)
                }
                refreshStats()
            }, 2000)
            break
        case cpuPlayer[2]:
            if (cpuPlayer[0].active) {
                cpuPlayer[0].character.bullets--
                showStatus(compPlayer1, 'hit')
            }
            if (cpuPlayer[1].active) {
                cpuPlayer[1].character.bullets--
                showStatus(compPlayer2, 'hit')
            }
            cpuPlayer[2].gatling = 0
            cpuPlayer[2].arrows = 0
            setTimeout(() => {
                let newArrow = document.createElement('img')
                newArrow.setAttribute('src', "/images/centralPile/indianArrow.png")
                newArrow.classList.add('centerArrow')
                newArrow.classList.add('arrow')

                for (let i = comp3Arrows.childElementCount; i > 0; i--) {
                    comp3Arrows.removeChild(comp3Arrows.childNodes[i - 1])
                    centerPile.appendChild(newArrow)
                }
                refreshStats()
            }, 2000)
            break
    }
}

const removeSelected = () => {
    let userD = [...usersDice]
    userD.forEach(dice => {
        if (dice.classList.contains('selected')) {
            dice.classList.toggle('selected')
        }
    })
}
/*********************************************************\
 * COMPUTER TARGET LISTENERS
\*********************************************************/

const targetingComp1 = function() {
    compPlayer1.style.borderColor = "black"
    compPlayer2.style.borderColor = "black"
    compPlayer3.style.borderColor = "black"
    cpuPlayer[0].character.bullets--
    showStatus(compPlayer1, 'hit')
    refreshStats()
    removeSelected()
    currentResolvedDice.classList.add('used')
    numOfResolvableDice--
    endingTurn()
}

const targetingComp2 = function() {
    compPlayer1.style.borderColor = "black"
    compPlayer2.style.borderColor = "black"
    compPlayer3.style.borderColor = "black"
    cpuPlayer[1].character.bullets--
    showStatus(compPlayer2, 'hit')
    refreshStats()
    removeSelected()
    currentResolvedDice.classList.add('used')
    numOfResolvableDice--
    endingTurn()
}

const targetingComp3 = function() {
    compPlayer1.style.borderColor = "black"
    compPlayer2.style.borderColor = "black"
    compPlayer3.style.borderColor = "black"
    cpuPlayer[2].character.bullets--
    showStatus(compPlayer3, 'hit') 
    refreshStats()
    removeSelected()
    currentResolvedDice.classList.add('used')
    numOfResolvableDice--
    endingTurn()
}

const healingSelf = function() {
    userCard.style.borderColor = "black"
    compPlayer1.style.borderColor = "black"
    compPlayer2.style.borderColor = "black"
    compPlayer3.style.borderColor = "black"
    resolveBeer(player)
    removeSelected()
    showStatus(userCard, 'heal')
    currentResolvedDice.classList.add('used')
    numOfResolvableDice--
    endingTurn()
}

const healingComp1 = function() {
    userCard.style.borderColor = "black"
    compPlayer1.style.borderColor = "black"
    compPlayer2.style.borderColor = "black"
    compPlayer3.style.borderColor = "black"
    resolveBeer(cpuPlayer[0])
    removeSelected()
    showStatus(compPlayer1, 'heal')
    currentResolvedDice.classList.add('used')
    numOfResolvableDice--
    endingTurn()
}

const healingComp2 = function() {
    userCard.style.borderColor = "black"
    compPlayer1.style.borderColor = "black"
    compPlayer2.style.borderColor = "black"
    compPlayer3.style.borderColor = "black"
    resolveBeer(cpuPlayer[1])
    removeSelected()
    showStatus(compPlayer2, 'heal')
    currentResolvedDice.classList.add('used')
    numOfResolvableDice--
    endingTurn()
}

const healingComp3 = function() {
    userCard.style.borderColor = "black"
    compPlayer1.style.borderColor = "black"
    compPlayer2.style.borderColor = "black"
    compPlayer3.style.borderColor = "black"
    resolveBeer(cpuPlayer[2])
    removeSelected()
    showStatus(compPlayer3, 'heal')
    currentResolvedDice.classList.add('used')
    numOfResolvableDice--
    endingTurn()
}

const showStatus = (card, status) => {
    switch (status) {
        case 'hit':
            card.style.borderColor = "red"
            card.style.boxShadow = "0px 0px 10px 1px #ff0000"
            break
        case 'heal':
            card.style.borderColor = "green"
            card.style.boxShadow = "0px 0px 10px 1px rgb(75, 185, 75)"
            break
    }
    setTimeout(() => {
        card.style.borderColor = "black"
        card.style.boxShadow = "none"
    }, 500)

}

/*********************************************************\
 * COMPUTER FUNCTIONS
\*********************************************************/

const comp1Roll = () => {
    let comp1RolledDice = new Array(5)
    setTimeout(() => {
        let compD = [...comp1Dice]
        compD.forEach(dice => {
            dice.classList.toggle('shake')
        })
    }, 1000)
    
    // end of first roll.
    setTimeout(() => {
        let compD = [...comp1Dice]
        compD.forEach(dice => {
            if (dice.classList.contains('shake')) {
                dice.classList.toggle('shake')
            }
        })

        for (let i = 0; i < 5; i++) {
            checkIfActive()
            comp1RolledDice[i] = Math.floor(Math.random() * 6)
            comp1Dice[i].setAttribute('src', diceImages[comp1RolledDice[i]])
            if (comp1RolledDice[i] === 0) {
                resolveCompArrow(cpuPlayer[0])
                resolveAllArrows()
            } else if(comp1RolledDice[i] === 1) {
                comp1BlownDie.push(i)
            } else if(comp1RolledDice[i] === 5) {
                cpuPlayer[0].gatling++
            } else {
                setTimeout(() => {
                    switch (comp1RolledDice[i]) {
                        case 2:
                            if (cpuPlayer[1].active) {
                                if (Math.random() > 0.5) {
                                    cpuPlayer[1].character.bullets--
                                    refreshStats()
                                    showStatus(compPlayer2, 'hit')
                                } else {
                                    player.character.bullets--
                                    refreshStats()
                                    showStatus(userCard, 'hit')
                                }
                            } else if (cpuPlayer[2].active) {
                                if (Math.random() > 0.5) {
                                    cpuPlayer[2].character.bullets--
                                    refreshStats()
                                    showStatus(compPlayer3, 'hit')
                                } else {
                                    player.character.bullets--
                                    refreshStats()
                                    showStatus(userCard, 'hit')
                                }
                            } else {
                                player.character.bullets--
                                refreshStats()
                                showStatus(userCard, 'hit')
                            }
                            break
                        case 3:
                            if (cpuPlayer[2].active) {
                                cpuPlayer[2].character.bullets--
                                refreshStats()
                                showStatus(compPlayer3, 'hit')
                            } else if (cpuPlayer[1].active) {
                                if (Math.random() > 0.5) {
                                    cpuPlayer[1].character.bullets--
                                    refreshStats()
                                    showStatus(compPlayer2, 'hit')
                                } else {
                                    player.character.bullets--
                                    refreshStats()
                                    showStatus(userCard, 'hit')
                                }
                            } else {
                                player.character.bullets--
                                refreshStats()
                                showStatus(userCard, 'hit')
                            }
                            break
                        case 4:
                            if (cpuPlayer[0].character.bullets < 6) {
                                resolveBeer(cpuPlayer[0])
                                showStatus(compPlayer1, 'heal')
                            } else if (cpuPlayer[0].role === "Renegade") {
                                if (Math.random() > 0.5) {
                                    resolveBeer(sheriff)
                                    switch (sheriff) {
                                        case player:
                                            showStatus(userCard, 'heal')
                                            break
                                        case cpuPlayer[1]:
                                            showStatus(compPlayer2, 'heal')
                                            break
                                        case cpuPlayer[2]:
                                            showStatus(compPlayer3, 'heal')
                                            break
                                    }
                                } else {
                                    resolveBeer(cpuPlayer[0])
                                    refreshStats()
                                    showStatus(compPlayer1, 'heal')
                                }
                            } else {
                                resolveBeer(cpuPlayer[0])
                                refreshStats()
                                showStatus(compPlayer1, 'heal')
                            }
                            break
                    }
                }, 2000)
                
            }
        }
        comp1DiceRoll = [...comp1RolledDice]
        if (comp1BlownDie.length > 2) {
            cpuPlayer[0].character.bullets--
            refreshStats()
            showStatus(compPlayer1, 'hit')
            if (cpuPlayer[1].active) {
                comp2Turn()
            } else if (cpuPlayer[2].active) {
                comp3Turn()
            }
        } else if (cpuPlayer[0].gatling > 2) {
            resolveCompGatlingGun(cpuPlayer[0])
        }
        comp1BlownDie = []
    }, 2000)
    checkIfActive()
    setTimeout(() => {
        if (cpuPlayer[1].active) {
            comp2Turn()
        } else if (cpuPlayer[2].active) {
            comp3Turn()
        } else {
            userPointer.style.display = "block"
            comp1Pointer.style.display = "none"
            comp2Pointer.style.display = "none"
            comp3Pointer.style.display = "none"
            rollButton.disabled = false
            rollButton.style.opacity = "1"
            rollButton.removeEventListener('click', endTurn)
            rollButton.innerHTML = `<img src="/images/buttons/diceIcon.png" class="btn-img">Roll`
            player.rolls = 3
            currentResolvedDice = null
            userBlownDie = []

            player.gatling = 0
            rollButton.addEventListener('click', roll)
        }
    }, 7000)
}

const comp2Roll = () => {
    let comp2RolledDice = new Array(5)
    setTimeout(() => {
        let compD = [...comp2Dice]
        compD.forEach(dice => {
            dice.classList.toggle('shake')
        })
    }, 1000)
    
    // end of first roll.
    setTimeout(() => {
        let compD = [...comp2Dice]
        compD.forEach(dice => {
            if (dice.classList.contains('shake')) {
                dice.classList.toggle('shake')
            }
        })

        for (let i = 0; i < 5; i++) {
            checkIfActive()
            comp2RolledDice[i] = Math.floor(Math.random() * 6)
            comp2Dice[i].setAttribute('src', diceImages[comp2RolledDice[i]])
            if (comp2RolledDice[i] === 0) {
                resolveCompArrow(cpuPlayer[1])
                resolveAllArrows()
            } else if(comp2RolledDice[i] === 1) {
                comp2BlownDie.push(i)
            } else if(comp2RolledDice[i] === 5) {
                cpuPlayer[1].gatling++
            } else {
                setTimeout(() => {
                    switch (comp2RolledDice[i]) {
                        case 2:
                            if (cpuPlayer[0].active) {
                                if (cpuPlayer[2].active) {
                                    if (Math.random() > 0.5) {
                                        cpuPlayer[0].character.bullets--
                                        refreshStats()
                                        showStatus(compPlayer1, 'hit')
                                    } else {
                                        cpuPlayer[2].character.bullets--
                                        refreshStats()
                                        showStatus(compPlayer3, 'hit')
                                    }
                                } 
                            } else if (cpuPlayer[2].active) {
                                if (Math.random() > 0.5) {
                                    cpuPlayer[2].character.bullets--
                                    refreshStats()
                                    showStatus(compPlayer3, 'hit')
                                } else {
                                    player.character.bullets--
                                    refreshStats()
                                    showStatus(userCard, 'hit')
                                }
                            } else {
                                player.character.bullets--
                                refreshStats()
                                showStatus(userCard, 'hit')
                            }
                            break
                        case 3:
                            player.character.bullets--
                            refreshStats()
                            showStatus(userCard, 'hit')
                            break
                        case 4:
                            if (cpuPlayer[1].character.bullets < 6) {
                                resolveBeer(cpuPlayer[1])
                                showStatus(compPlayer2, 'heal')
                            } else if (cpuPlayer[1].role === "Renegade") {
                                if (Math.random() > 0.5) {
                                    resolveBeer(sheriff)
                                    switch (sheriff) {
                                        case player:
                                            showStatus(userCard, 'heal')
                                            break
                                        case cpuPlayer[0]:
                                            showStatus(compPlayer1, 'heal')
                                            break
                                        case cpuPlayer[2]:
                                            showStatus(compPlayer3, 'heal')
                                            break
                                    }
                                    refreshStats()
                                } else {
                                    resolveBeer(cpuPlayer[1])
                                    refreshStats()
                                    showStatus(compPlayer2, 'heal')
                                } 
                            } else {
                                resolveBeer(cpuPlayer[1])
                                refreshStats()
                                showStatus(compPlayer2, 'heal')
                            }
                            break
                    }
                }, 2000)    
            }
            
        }
        checkIfActive()
        comp2DiceRoll = [...comp2RolledDice]
        if (comp2BlownDie.length > 2) {
            cpuPlayer[1].character.bullets--
            refreshStats()
            showStatus(compPlayer2, 'hit')
            if (cpuPlayer[2].active) {
                comp3Turn()
            } else {
                userPointer.style.display = "block"
                comp1Pointer.style.display = "none"
                comp2Pointer.style.display = "none"
                comp3Pointer.style.display = "none"
                rollButton.disabled = false
                rollButton.style.opacity = "1"
                rollButton.removeEventListener('click', endTurn)
                rollButton.innerHTML = `<img src="/images/buttons/diceIcon.png" class="btn-img">Roll`
                player.rolls = 3
                currentResolvedDice = null
                userBlownDie = []
    
                player.gatling = 0
                rollButton.addEventListener('click', roll)
            }
        } else if (cpuPlayer[1].gatling > 2) {
            resolveCompGatlingGun(cpuPlayer[1])
        }
        comp2BlownDie = []
    }, 2000)
    setTimeout(() => {
        if (cpuPlayer[2].active) {
            comp3Turn()
        } else {
            userPointer.style.display = "block"
            comp1Pointer.style.display = "none"
            comp2Pointer.style.display = "none"
            comp3Pointer.style.display = "none"
            rollButton.disabled = false
            rollButton.style.opacity = "1"
            rollButton.removeEventListener('click', endTurn)
            rollButton.innerHTML = `<img src="/images/buttons/diceIcon.png" class="btn-img">Roll`
            player.rolls = 3
            currentResolvedDice = null
            userBlownDie = []

            player.gatling = 0
            rollButton.addEventListener('click', roll)
        }
    }, 7000)
}

const comp3Roll = () => {
    let comp3RolledDice = new Array(5)
    setTimeout(() => {
        let compD = [...comp3Dice]
        compD.forEach(dice => {
            dice.classList.toggle('shake')
        })
    }, 1000)
    
    // end of first roll.
    setTimeout(() => {
        let compD = [...comp3Dice]
        compD.forEach(dice => {
            if (dice.classList.contains('shake')) {
                dice.classList.toggle('shake')
            }
        })

        for (let i = 0; i < 5; i++) {
            checkIfActive()
            comp3RolledDice[i] = Math.floor(Math.random() * 6)
            comp3Dice[i].setAttribute('src', diceImages[comp3RolledDice[i]])
            if (comp3RolledDice[i] === 0) {
                resolveCompArrow(cpuPlayer[2])
                resolveAllArrows()
            } else if(comp3RolledDice[i] === 1) {
                comp3BlownDie.push(i)
            } else if(comp3RolledDice[i] === 5) {
                cpuPlayer[2].gatling++
            } else {
                setTimeout(() => {
                    switch (comp3RolledDice[i]) {
                        case 2:
                            if (cpuPlayer[1].active) {
                                if (Math.random() > 0.5) {
                                    cpuPlayer[1].character.bullets--
                                    refreshStats()
                                    showStatus(compPlayer2, 'hit')
                                } else {
                                    player.character.bullets--
                                    refreshStats()
                                    showStatus(userCard, 'hit')
                                }
                            } else if (cpuPlayer[0].active) {
                                if (Math.random() > 0.5) {
                                    cpuPlayer[0].character.bullets--
                                    refreshStats()
                                    showStatus(compPlayer1, 'hit')
                                } else {
                                    player.character.bullets--
                                    refreshStats()
                                    showStatus(userCard, 'hit')
                                }
                            } else {
                                player.character.bullets--
                                refreshStats()
                                showStatus(userCard, 'hit')
                            }
                            break
                        case 3:
                            if (cpuPlayer[0].active) {
                                cpuPlayer[0].character.bullets--
                                refreshStats()
                                showStatus(compPlayer1, 'hit')
                            } else if (cpuPlayer[1].active) {
                                if (Math.random() > 0.5) {
                                    cpuPlayer[1].character.bullets--
                                    refreshStats()
                                    showStatus(compPlayer2, 'hit')
                                } else {
                                    player.character.bullets--
                                    refreshStats()
                                    showStatus(userCard, 'hit')
                                }
                            } else {
                                player.character.bullets--
                                refreshStats()
                                showStatus(userCard, 'hit')
                            }
                            break
                        case 4:
                            if (cpuPlayer[2].character.bullets < 6) {
                                resolveBeer(cpuPlayer[2])
                                showStatus(compPlayer3, 'heal')
                            } else if (cpuPlayer[2].role === "Renegade") {
                                if (Math.random() > 0.5) {
                                    resolveBeer(sheriff)
                                    switch (sheriff) {
                                        case player:
                                            showStatus(userCard, 'heal')
                                            break
                                        case cpuPlayer[0]:
                                            showStatus(compPlayer1, 'heal')
                                            break
                                        case cpuPlayer[1]:
                                            showStatus(compPlayer2, 'heal')
                                            break
                                    }
                                } else {
                                    resolveBeer(cpuPlayer[2])
                                    showStatus(compPlayer3, 'heal')
                                }
                            } else {
                                resolveBeer(cpuPlayer[2])
                                showStatus(compPlayer3, 'heal')
                            }
                            break
                    }
                }, 2000)
                comp3BlownDie = []
            }
            
            checkIfActive()
        }
        comp3DiceRoll = [...comp3RolledDice]
        if (comp3BlownDie.length > 2) {
            cpuPlayer[2].character.bullets--
            refreshStats()
            showStatus(compPlayer3, 'hit')
            rollButton.disabled = false
            rollButton.style.opacity = "1"
            rollButton.removeEventListener('click', endTurn)
            rollButton.addEventListener('click', roll)
            player.rolls = 3
        } else if (cpuPlayer[2].gatling > 2) {
            resolveCompGatlingGun(cpuPlayer[2])
        }
        
    }, 2000)
    checkIfActive()
    setTimeout(() => {
        userPointer.style.display = "block"
        comp1Pointer.style.display = "none"
        comp2Pointer.style.display = "none"
        comp3Pointer.style.display = "none"
        rollButton.disabled = false
        rollButton.style.opacity = "1"
        rollButton.removeEventListener('click', endTurn)
        rollButton.innerHTML = `<img src="/images/buttons/diceIcon.png" class="btn-img">Roll`
        player.rolls = 3
        currentResolvedDice = null
        userBlownDie = []

        player.gatling = 0
        rollButton.addEventListener('click', roll)
    }, 7000)
}

const checkIfActive = () => {
    cpuPlayer.forEach((cpu) => {
        if (cpu.character.bullets < 1) {
            cpu.active = false
            cpu.cardRevealed = true
            console.log(`${cpu} has died`)
        }

        if (cpu.cardRevealed) {
            switch (cpu) {
                case cpuPlayer[0]:
                    comp1Pointer.style.display = "none"
                    compPlayer1Back.style.display = "flex"
                    break
                case cpuPlayer[1]:
                    comp2Pointer.style.display = "none"
                    compPlayer2Back.style.display = "flex"
                    break
                case cpuPlayer[2]:
                    comp3Pointer.style.display = "none"
                    compPlayer3Back.style.display = "flex"
                    break
            }
        }
    })
    if (player.character.bullets < 1) {
        player.active = false
    }

    if (!(player.active)) {
        mainScreen.style.display = "none"
        titleScreen.style.display = "flex"
        startButton.style.display = "none"
        rulesButtonTitle.style.display = "none"
    }
}

/*********************************************************\
 * BUTTON LISTENERS
\*********************************************************/

resetButton.addEventListener('click', reset)
rollButton.addEventListener('click', roll)
reserveButton.addEventListener('click', reserveDice)

startButton.addEventListener('click', startGame)