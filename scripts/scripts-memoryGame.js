const smeshariki = [{
    name: 'barash',
    imgUrl: 'images/barash1.png',
    id: 1    
},{
    name: 'barash',
    imgUrl: 'images/barash2.png',
    id: 2   
},{
    name: 'jezik',
    imgUrl: 'images/jezik1.png',
    id: 3    
},{
    name: 'jezik',
    imgUrl: 'images/jezik2.png',
    id: 4    
}, {
    name: 'kar',
    imgUrl: 'images/kar1.png',
    id: 5
},{
    name: 'kar',
    imgUrl: 'images/kar2.png',
    id: 6
},{
    name: 'kopatic',
    imgUrl: 'images/kopatic1.png',
    id: 7
},{
    name: 'kopatic',
    imgUrl: 'images/kopatic2.png',
    id: 8
},{
    name: 'krosh',
    imgUrl: 'images/krosh1.png',
    id: 9
},{
    name: 'krosh',
    imgUrl: 'images/krosh2.png',
    id: 10
},{
    name: 'los',
    imgUrl: 'images/los1.png',
    id: 11
},{
    name: 'los',
    imgUrl: 'images/los2.png',
    id: 12
},{
    name: 'nusha',
    imgUrl: 'images/nusha1.png',
    id: 13
},{
    name: 'nusha',
    imgUrl: 'images/nusha2.png',
    id: 14
},{
    name: 'pin',
    imgUrl: 'images/pin1.png',
    id: 15
},{
    name: 'pin',
    imgUrl: 'images/pin2.png',
    id: 16
},{
    name: 'sova',
    imgUrl: 'images/sova1.png',
    id: 17
},{
    name: 'sova',
    imgUrl: 'images/sova2.png',
    id: 18
}]

const shirt = {
    name: 'allHeroes',
    imgUrl: 'images/all.png'
} 

// start game

function startGame(){
    let button = document.getElementById('start');        
    button.style.display = 'none';
    let deckForGame = createNewDeck(smeshariki);
    toShuffleDeck(deckForGame);
    cardOnDesk(deckForGame);
}


//  creating deck

function createNewDeck(sourceDeck){    
    let newDeck = sourceDeck.map((el) => el);    
    return newDeck;
}

// to shuffle deck

function toShuffleDeck(deck){
    for (let i = 0; i < deck.length - 1; i++){
       let x = Math.floor(Math.random() * (deck.length - 1 - i));       
       let temp = deck[x];
       deck[x] = deck[deck.length - 1 - i];
       deck[deck.length - 1 - i] = temp;
    }
}

// deal cards

function cardOnDesk(deck){    
    deck.forEach(card => {
        let cardPlace = document.getElementById('playground');

        let box = document.createElement('div');
        box.setAttribute('name', card.name);
        box.setAttribute('id', card.id);        
        let flipImg = document.createElement('img');
        flipImg.src = shirt.imgUrl;
        flipImg.classList.add('visible');
        box.appendChild(flipImg);        

        let openImg = document.createElement('img');
        openImg.src = card.imgUrl;
        openImg.classList.add('hidden');
        box.appendChild(openImg);
        box.addEventListener('click', flipCard); 

        cardPlace.appendChild(box);
    });
    myTimer();
}

// main variables

let numberOfCards = smeshariki.length;
let attemptsCounter = 0;
let disadledCards = 0;

let hasFlippedCard = false;
let stopPoint = false;

let firstCard;
let secondCard;

// flipping cards

function  flipCard(){
    if (stopPoint){
        return;
    }    

    this.classList.add('flip');    

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;        
    } else if (!chekIdenticCard(firstCard, this)){
        secondCard = this;
        hasFlippedCard = false;        
        stopPoint = true;
        setTimeout(chekForMatch, 1000);

    }
    stopPoint = false;     
}

// avoiding the first card doubleclicking

function chekIdenticCard(card1, card2){
    let cardId1 = card1.getAttribute('id');
    let cardId2 = card2.getAttribute('id');

    if(cardId1 === cardId2){
        return true;
    } else{
        return false;
    }
}

// unflip cards

function unflipCard(){
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');   
}

// disable cards

function turnOffCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    unflipCard();
    firstCard.classList.add('turnoff');
    secondCard.classList.add('turnoff');
}

// matching

function chekForMatch(){
    let cardName1 = firstCard.getAttribute('name');
    let cardName2 = secondCard.getAttribute('name');

    if (cardName1 === cardName2){
        turnOffCards();
        attemptsCounter++;
        disadledCards += 2;
        chekGameOver();
    } else {
        unflipCard();
        attemptsCounter++;
    }
    stopPoint = false;      
}

function resetData(){
    hasFlippedCard = false;
    stopPoint = false;
    firstCard = null;
    secondCard = null;
}

//timer

const myInterval = setInterval(myTimer, 1000);
let second = 0;

function myTimer(){    
    second++;
    return second;
}

function chekGameOver(){
    if (disadledCards === numberOfCards){
        clearInterval(myInterval);
        let minute = Math.floor(second / 60);
        let remindSecond = second % 60;
        resultAndReset(minute, remindSecond);                
    }
}  


function resultAndReset(min, sec){
    let gamePlace = document.getElementById('playground');
    gamePlace.innerHTML = '';

    let placeForResult = document.getElementById('result');
    placeForResult.classList.add('counter');

    let greating = document.createElement('h2');
    greating.innerHTML = `It's great! <br> Your result`;
    placeForResult.appendChild(greating);

    let count = document.createElement('p');
    count.innerHTML = `Attempts: ${attemptsCounter} <br> Time: ${min} min ${sec} s`;
    placeForResult.appendChild(count);

    let again = document.createElement('div');
    again.innerHTML = `Try again!`;
    again.addEventListener('click', startGame); 
    placeForResult.appendChild(again);
}




