$(() => {
  let log1 = $('.log1')
  let log2 = $('.log2')
  let count = 8
  let randoms = []

  function random255(){
    return Math.floor(Math.random() * 256)
  }

  function getRandoms(){
    let randoms = []
    while (randoms.length < count){
      let value = random255()
      if ( ! randoms.includes(value)){
        randoms.push(value)
      }
    }
    randoms.sort((a,b)=>a-b)
    return randoms
  }

  function getNumber(number_field){
    let value = 0
    let ranges = []
    number_field.children().each((i, e) => {
      if($(e).hasClass('checked')){

        let class_string = $(e).attr('class')
        let match = /field_([0-7])/.exec(class_string)
        let range = match ? Math.floor(match[1]) : -1
        ranges.push(range)
        }
    })
    ranges.forEach((e)=>{
      value += 2**e
    })
    return value
  }

  function getResult(number_field){
    let result = 0
    number_field.children().each((i, e)=>{
      if($(e).hasClass('field_9')){
        result = $(e).text()
      }
    })
    return Math.floor(result)
  }

  function createBoard(){
    randoms = getRandoms()
    for(let i = 1; i < count; i++){
      $(`.number_${i} .field_9`).text(randoms[i])
    }
    for(let i = 0; i < count; i++){
        for(let j = 0; j < count; j++){
          $(`.number_${i} .field_${j}`).click((e) => {
            let target = $(e.target)

            if(target.hasClass('checked')){
              target.removeClass('checked')
            } else {
              target.addClass('checked')
            }
            let value = 0
            let result = 0
            let lane = target.parent()
            value = getNumber(lane)
            result = getResult(lane)

            if(i == 0){
              $('.number_0 .field_9').text(value)
              return
            }
            if(value == result){
              lane.addClass('ok')
            }else{
              lane.removeClass('ok')
            }
          })
        }
    }
  }

  createBoard()


  log1.text()
  log2.text()

})