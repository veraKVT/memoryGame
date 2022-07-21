const smeshariki = [{
    name: 'barash',
    imgUrl: 'images/barash1.png'
},{
    name: 'barash',
    imgUrl: 'images/barash2.png'
},{
    name: 'barash',
    imgUrl: 'images/barash3.png'
},{
    name: 'barash',
    imgUrl: 'images/barash4.png'
},{
    name: 'bibi',
    imgUrl: 'images/bibi1.png'
},{
    name: 'bibi',
    imgUrl: 'images/bibi2.png' 
},{
    name: 'jezik',
    imgUrl: 'images/jezik1.png'
},{
    name: 'jezik',
    imgUrl: 'images/jezik2.png'
}, {
    name: 'jezik',
    imgUrl: 'images/jezik3.png'
}, {
    name: 'jezik',
    imgUrl: 'images/jezik4.png'
},{
    name: 'kar',
    imgUrl: 'images/kar1.png'
},{
    name: 'kar',
    imgUrl: 'images/kar2.png'
},{
    name: 'kar',
    imgUrl: 'images/kar3.png'
},{
    name: 'kar',
    imgUrl: 'images/kar4.png'
},{
    name: 'kopatic',
    imgUrl: 'images/kopatic1.png'
},{
    name: 'kopatic',
    imgUrl: 'images/kopatic2.png'
},{
    name: 'kopatic',
    imgUrl: 'images/kopatic3.png'
},{
    name: 'kopatic',
    imgUrl: 'images/kopatic4.png'
},{
    name: 'krosh',
    imgUrl: 'images/krosh1.png'
},{
    name: 'krosh',
    imgUrl: 'images/krosh2.png'
},{
    name: 'krosh',
    imgUrl: 'images/krosh3.png'
},{
    name: 'krosh',
    imgUrl: 'images/krosh4.png'
},{
    name: 'los',
    imgUrl: 'images/los1.png'
},{
    name: 'los',
    imgUrl: 'images/los2.png'
},{
    name: 'los',
    imgUrl: 'images/los3.png'
},{
    name: 'los',
    imgUrl: 'images/los4.png'
},{
    name: 'nusha',
    imgUrl: 'images/nusha1.png'
},{
    name: 'nusha',
    imgUrl: 'images/nusha2.png'
},{
    name: 'nusha',
    imgUrl: 'images/nusha3.png'
},{
    name: 'nusha',
    imgUrl: 'images/nusha4.png'
},{
    name: 'pin',
    imgUrl: 'images/pin1.png'
},{
    name: 'pin',
    imgUrl: 'images/pin2.png'
},{
    name: 'pin',
    imgUrl: 'images/pin3.png'
},{
    name: 'pin',
    imgUrl: 'images/pin4.png'
},{
    name: 'sova',
    imgUrl: 'images/sova1.png'
},{
    name: 'sova',
    imgUrl: 'images/sova2.png'
},{
    name: 'sova',
    imgUrl: 'images/sova3.png'
},{
    name: 'sova',
    imgUrl: 'images/sova4.png'
}]


//  creating deck

function createNewDeck(obj){    
    let deck = obj.map((el) => el);    
    return deck;
}

// to shuffle deck

function toShuffleDeck(obj){
    for (let i = 0; i < obj.length - 1; i++){
       let x = Math.floor(Math.random() * (obj.length - 1 - i));       
       let temp = obj[x];
       obj[x] = obj[obj.length - 1 - i];
       obj[obj.length - 1 - i] = temp;
    }
}

function cardOnDesk(obj){    
    let questCard = document.getElementById('start-card');
    let pairCard = document.getElementById('flip');
    let pic = obj.shift();
    let box = document.createElement('div');
    if (questCard.hasChildNodes() === false){               
        box.innerHTML = '<img src=\"'+ pic.imgUrl+'\" alt=\"\">';
        questCard.appendChild(box);
    } else if (pairCard.hasChildNodes() === false){
        box.innerHTML = '<img src=\"'+ pic.imgUrl+'\" alt=\"\">';
        pairCard.appendChild(box);
    } else if (pairCard.hasChildNodes() === true && pairCard.childElementCount < 3){
        box.innerHTML = '<img src=\"'+ pic.imgUrl+'\" alt=\"\">';
        pairCard.appendChild(box);
    }
}

function playBeginning(obj){
    createNewDeck(obj);
    toShuffleDeck(obj);
    const mainDeck = document.getElementById('deck');
    mainDeck.addEventListener('click', cardOnDesk(obj));
}

