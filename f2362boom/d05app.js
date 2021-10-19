
let lastFishka = null
let lastCell = null

$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
  let k = 0


function cellClick(val){
  let target = $(val.target)
  let fishka = null
  let cell = null
  if(target.hasClass('fishka')){
    fishka = target
  }
  let p = val.target
  for(let i = 0; i < 3; i++){
    if(p.classList.contains('cell')){
      cell = $(p)
      break
    }
    p = p.parentNode
  }

  if(cell == null && lastFishka){
    lastFishka.removeClass('checked')
    lastFishka.addClass('side')
    $('.out').append(lastFishka)
    lastFishka = null
    return
    // console.log(1)
  }

  if(cell && lastFishka && lastFishka.hasClass('side')){
    lastFishka.removeClass('side')
    lastFishka.removeClass('checked')
    cell.append(lastFishka)
    lastFishka = null
    lastCell = null
    return
  }

  if(lastFishka == null && fishka){
    fishka.addClass('checked')
    lastFishka = fishka
    lastCell = cell
    return
  }

  if(lastFishka && fishka && lastFishka[0] == fishka[0])
  {
    fishka.removeClass('checked')
    lastFishka = null
    lastCell = cell
    return
  }

  if(lastFishka && cell[0] == lastCell[0]){
    lastFishka.removeClass('checked')
    lastFishka = null
    return
  }

  if(lastCell && lastFishka && cell[0] != lastCell[0] ){
    cell.append(lastFishka)
    lastFishka.removeClass('checked')
    lastFishka = null

  }
  lastCell = cell
  k += 1
}

$('.out').click((e) => {
  cellClick(e)
})

$('.cell').click((e) => {
  cellClick(e)
})









  log1.text()
  log2.text()

  

})