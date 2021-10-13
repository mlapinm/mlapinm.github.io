document.addEventListener('DOMContentLoaded', () => {
  const test = document.querySelector('.test')
  const grid = document.querySelector('.grid')
  const scoreDisplay = document.querySelector('.score')
  const startButton = document.querySelector('.start')
  const width = 10
  const ww = width * width
  let squares = []
  let score = 0
  let currentIndex = 0
  let appleIndex = 0
  let currentSnake = [2, 1, 0]
  let direction = 1
  let speed = 0.9
  let intervalTime = 0
  let interval = 0
  const buttonUp = document.querySelector('.up')
  const buttonDown = document.querySelector('.down')
  const buttonLeft = document.querySelector('.left')
  const buttonRight = document.querySelector('.right')
  const buttonUp2 = document.querySelector('.up2')
  const buttonDown2 = document.querySelector('.down2')
  const buttonLeft2 = document.querySelector('.left2')
  const buttonRight2 = document.querySelector('.right2')
  
  
  function createBoard(){
    for (let i = 0; i < ww; i++){
      const square = document.createElement('div')
      
      grid.appendChild(square)
      squares.push(square)
    }
    
  }
    createBoard()
  
  function randomApple(){
    do{
    appleIndex = Math.floor(Math.random() * squares.length)
    }while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')  
   
  }
  
  
  function startGame(){
    currentSnake.forEach(index =>  squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score = 0
    randomApple()
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2, 1, 0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
    
  }
  
  let k=0
  function moveOutcomes(){
    //deals with snake hitting border and snake hitting self
    if (
      (currentSnake[0] + width >= (width * width) && direction === width ) || //if snake hits bottom
      (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
      (currentSnake[0] - width < 0 && direction === -width) ||  //if snake hits the top
      squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
    ) {
      return clearInterval(interval) //this will clear the interval if any of the above happen
    }
    
    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)
    
    if(squares[currentSnake[0]].classList.contains('apple')){
      squares[currentSnake[0]].classList.remove('apple')
      currentSnake.push(tail)
      squares[tail].classList.add('snake')
      randomApple()
      score++
      scoreDisplay.innerText = score
      clearInterval(interval)
      intervalTime = intervalTime * speed
      interval = setInterval(moveOutcomes, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
    
    // test.innerText = currentSnake
 }
  
  function moveUp(){
    direction = -width
  }
  function moveDown(){
    direction = width
  }
  function moveLeft(){
    direction = -1
  }
  function moveRight(){
    direction = 1
  }
  
  function control(e){
    if(e.keyCode === 39){
      moveRight()
    }else if(e.keyCode === 38){
      moveUp()
    }else if(e.keyCode === 37){
      moveLeft()
    }else if(e.keyCode === 40){
      moveDown()
    }
  }
  
  // startGame()
  document.addEventListener('keyup', control)
  startButton.addEventListener('click', startGame)
  buttonUp.addEventListener('click', moveUp)
  buttonDown.addEventListener('click', moveDown)
  buttonLeft.addEventListener('click', moveLeft)
  buttonRight.addEventListener('click', moveRight)
  buttonUp2.addEventListener('click', moveUp)
  buttonDown2.addEventListener('click', moveDown)
  buttonLeft2.addEventListener('click', moveLeft)
  buttonRight2.addEventListener('click', moveRight)
  
  

})
