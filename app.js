const cardArray = [
    {
        name: 'fries',
        img: 'Image/fries.png',
    },
    {
        name: 'cheesburger',
        img: 'Image/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'Image/hotdog.png',
    },
    {
        name: 'milkshake',
        img: 'Image/milkshake.png',
    },
    {
        name: 'ice-cream',
        img: 'Image/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'Image/pizza.png',
    },
    {
        name: 'fries',
        img: 'Image/fries.png',
    },
    {
        name: 'cheesburger',
        img: 'Image/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'Image/hotdog.png',
    },
    {
        name: 'milkshake',
        img: 'Image/milkshake.png',
    },
    {
        name: 'ice-cream',
        img: 'Image/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'Image/pizza.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Image/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Image/blank.png')
        cards[optionTwoId].setAttribute('src', 'Image/blank.png')
        alert('You have clicked The same Image!')
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert('You Found A Match')
        cards[optionOneId].setAttribute('src', 'Image/white.png')
        cards[optionTwoId].setAttribute('src', 'Image/white.png')
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'Image/blank.png')
        cards[optionTwoId].setAttribute('src', 'Image/blank.png')
        alert('Sorry Try Again')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congrats You Found Them All'
    }
}

function flipcard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

createBoard()

const reloadButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);