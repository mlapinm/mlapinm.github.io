
let fishkas = []


$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
  let log3 = $('.log3')
  let grid = $('.grid')
  let max = 64
  let maxRow = 8
  let row = 0
  let maxFishkas = 24
  let beginPos = [0, 2, 4, 6,
  9, 11, 13, 15,
  16, 18, 20, 22,
  41, 43, 45, 47,
  48, 50, 52, 54,
  57, 59, 61, 63
  ]

  let k = 0
  function makeGrid(){
    for(let i = 0; i < max; i++){
      let square = $('<div></div>')
      square.addClass('square')
      if(i%maxRow == 0){
        row += 1
      }

      // k = (max - i) + (max - row * maxRow)
      k = (max - row * maxRow) + i%maxRow

      square.addClass('cell' + k)
  
      if(row%2){
        if(!(i%2==0)){
          square.addClass('black-cell')
        }else{
          square.addClass('white-cell')
        }
      }else{
        if(i%2==0){
          square.addClass('black-cell')
        }else{
          square.addClass('white-cell')
        }
      }
  
      grid.append(square)

      square.click((e) => {
        let prevFishka = null
        let fishka = null
        let square = null
        let q = $(e.target)
        if(q.hasClass('fishka')){
          fishka = q



          let p = q.parent()
          if(p.hasClass('square')){
            square = p
          }
        }else if(q.hasClass('square')){
            square = q  
        }

        let checkedFishkas = fishkas.filter(e => 
          e.hasClass('checked')
        )
        if(checkedFishkas.length == 0 ){
          if(fishka){
            fishka.addClass('checked')
          }
        }else{
          prevFishka = checkedFishkas[0]
        }

        if(prevFishka && fishka){

          prevFishka.removeClass('checked')
          if(prevFishka[0] != fishka[0]){
            fishka.addClass('checked')
          }
        }else if(prevFishka && square){
          prevFishka.removeClass('checked')
          // prevFishka = null

          square.append(prevFishka)
          prevFishka = null

        }


      })
    }

    for (let i = 0; i < maxFishkas; i++){
      let fishka = $('<div></div>')
      fishka.addClass('fishka')
      if(i< maxFishkas/2){
        fishka.addClass('fishka-white')
      }else{
        fishka.addClass('fishka-black')
      }
      fishkas.push(fishka)
      $('.cell' + beginPos[i]).append(fishka)
    }
  }

  makeGrid()

  $('.out').click(() => {
    let blackSum =  Number($('.black-out').text()) 
    let whiteSum =  Number($('.white-out').text()) 

        let checkedFishkas = fishkas.filter(e => 
          e.hasClass('checked')
        )
        if(checkedFishkas.length == 1){
          let prevFishka = checkedFishkas[0]
          prevFishka.removeClass('checked')
          let square = prevFishka.parent()
          square.html('')
          if(prevFishka.hasClass('fishka-black')){
            whiteSum += 1
            $('.white-out').text(whiteSum)  
          }else{
            blackSum += 1
            $('.black-out').text(blackSum)  

          }
        }



   
  })

  log1.text()
  log2.text()
  log3.text()
  

})