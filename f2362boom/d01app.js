let min = 20
let max = 80


$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
  let log3 = $('.log3')
  let grid = $('.grid')
  let max = 64
  let maxRow = 8
  let row = 0

  for(let i = 0; i < max; i++){
    let square = $('<div></div>')
    square.addClass('square')

    if(i%maxRow == 0){
      row += 1
    }
    if(row%2){
      if(!(i%2==0)){
        square.addClass('black-cell')
      }
    }else{
      if(i%2==0){
        square.addClass('black-cell')
      }
    }



    grid.append(square)
  }

  log1.text(1)
  log2.text(2)
  log3.text(3)
  

})