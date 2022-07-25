const smeshariki = [{
    name: 'barash',
    imgUrl: 'images/barash1.png'
},{
    name: 'barash',
    imgUrl: 'images/barash2.png'
},{
    name: 'jezik',
    imgUrl: 'images/jezik1.png'
},{
    name: 'jezik',
    imgUrl: 'images/jezik2.png'
}, {
    name: 'kar',
    imgUrl: 'images/kar1.png'
},{
    name: 'kar',
    imgUrl: 'images/kar2.png'
},{
    name: 'kopatic',
    imgUrl: 'images/kopatic1.png'
},{
    name: 'kopatic',
    imgUrl: 'images/kopatic2.png'
},{
    name: 'krosh',
    imgUrl: 'images/krosh1.png'
},{
    name: 'krosh',
    imgUrl: 'images/krosh2.png'
},{
    name: 'los',
    imgUrl: 'images/los1.png'
},{
    name: 'los',
    imgUrl: 'images/los2.png'
},{
    name: 'nusha',
    imgUrl: 'images/nusha1.png'
},{
    name: 'nusha',
    imgUrl: 'images/nusha2.png'
},{
    name: 'pin',
    imgUrl: 'images/pin1.png'
},{
    name: 'pin',
    imgUrl: 'images/pin2.png'
},{
    name: 'sova',
    imgUrl: 'images/sova1.png'
},{
    name: 'sova',
    imgUrl: 'images/sova2.png'
}]

const shirt = {
    name: 'allHeroes',
    imgUrl: 'images/all.png'
} 

// start game

function startGame(){
    let button = document.getElementById('start');
    let hide = getComputedStyle(button).getPropertyValue('display');    
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
}

// function  flipCard(this){
//     this.firstElementChild.classList.toggle('visible');
//     this.firstElementChild.classList.toggle('hidden');
//     this.lastElementChild.classList.toggle('hidden');
//     this.lastElementChild.classList.toggle('visible');
//     this.removeEventListener('click', flipCard);
// }   

