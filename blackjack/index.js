// let firstCard = getRandomNum()
// let secondCard = getRandomNum()
//let cards=[firstCard,secondCard] // this is an array
let cards=[]
let sum = 0
let hasBlackjack = false
let isAlive = false
let message=""

//console.log(sum)
// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let playerName = "Teja";
// let playerChips = 145
// object creation
let player ={
    name:"Teja",
    chips:145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
// this function returns random num from 1 to 13
function getRandomNum(){
    // if 1 -> return 11; for simplicity
    // if 11 to 13 -> return 10
    let randomNum= Math.floor(Math.random()*13)+1
    if(randomNum>10){
        return 10
    }
    else if(randomNum===1){
        return 11
    }
    else{
        return randomNum
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomNum()
    let secondCard=getRandomNum()
    sum = firstCard+secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum :"+ sum
    cardsEl.textContent = "Cards : "//+ cards[0]+" "+ cards[1]
    // rendering cards using for loop
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]
    }
    if(sum<=20){
        message="Do you want to draw a new card? 🙂"
    }
    else if(sum===21){
        messageEl="Wohoo! You've got Blackjack! 🥳"
        hasBlackjack=true
    }
    else{
        message="You're out of the game! 😭"
        isAlive = false 
    }
    messageEl.textContent = message
    console.log(message)

}
function newCard(){
    console.log("Draw a new card")
    // draw new card only when you are still alive and doesnt have blackjack still 
    if(isAlive===true || hasBlackjack===false){
        let card = getRandomNum()
        sum+=card
        cards.push(card)
        renderGame()
    }
    

}
