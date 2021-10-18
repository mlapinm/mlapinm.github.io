
let fishkas = []


$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
  let sumValues = [0, 0, 0, 0, 0, 0]
  let doubles = [0, 0, 0, 0, 0, 0]

  let valPoints = [
    [4],
    [2, 6],
    [2, 4, 6],
    [0, 2, 6, 8],
    [0, 2, 4, 6, 8],
    [0, 2, 3, 5, 6, 8],
  ]


  log1.text()
  log2.text()

  let point = $('<div></div>')
  point.addClass('point')


  // $('.dice1 .cell0').append(point)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  function rand(){
    return getRandomInt(0, 6)
  }

function addSumValues(val1, val2){
  sumValues[val1] += 1
  sumValues[val2] += 1
  if(val1 == val2){
    doubles[val1] += 1
  }
}

function render(dice, val){
  for(let i = 0; i < 9; i++){
    let div1 = `.dice${dice} .cell${i}`
    $(div1).empty()
  }

  let points = valPoints[val]
  points.forEach((e) => {
    let point = $('<div></div>')
    point.addClass('point')
    let div = `.dice${dice} .cell${e}`
    $(div).append(point)
  })
}

function gridDivClick(){
  let val1 = rand()
  let val2 = rand()
  addSumValues(val1, val2)

  render(1, val1)
  render(2, val2)


  log2.text(sumValues + ' - ' + doubles)

}

  $('.grid-div').click(() => {
    gridDivClick()
  })
  gridDivClick()
  // log2.text(sumValues)

})