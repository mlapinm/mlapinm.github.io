document.addEventListener('DOMContentLoaded', ()=>{

  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'g00images/fries.png'
    },
    {
      name: 'fries',
      img: 'g00images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'g00images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'g00images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'g00images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'g00images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'g00images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'g00images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'g00images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'g00images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'g00images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'g00images/pizza.png'
    }
  ]

  cardArray.sort(()=> 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //create your board
  function createBoard(){
    for(let i=0; i < cardArray.length; i++){
      var card = document.createElement('img')
      card.setAttribute('src', 'g00images/blank.png')
      /// card.setAttribute('src', cardArray[i]['img'])
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)

      var cardDiv = document.createElement('div')
      cardDiv.append(card)
      grid.append(cardDiv)
      // grid.append(card)
    }
  }

  // check for matches
  function checkForMatch(){
    var cards =  document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] == cardsChosen[1]){
      /// alert('You found a match')
      cards[optionOneId].setAttribute('src', 'g00images/white.png')
      cards[optionTwoId].setAttribute('src', 'g00images/white.png')
      cardsWon.push(cardsChosen)
    }else{
      cards[optionOneId].setAttribute('src', 'g00images/blank.png')
      cards[optionTwoId].setAttribute('src', 'g00images/blank.png')
      /// alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  // flip you card
  function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
      setTimeout(checkForMatch, 500)
    }
  }
  console.log(cardArray.length)
  createBoard()
})
