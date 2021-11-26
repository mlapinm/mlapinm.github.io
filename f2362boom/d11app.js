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

  function createBoard(){
    randoms = getRandoms()
    for(let i = 0; i < count; i++){
      $(`.number_${i} .field_9`).text(randoms[i])
    }
    $('.number_0 .field_0').addClass('checked')
    for(let i = 0; i < count; i++){
        for(let j = 0; j < count; j++){
          $(`.number_${i} .field_${j}`).click((target) => {

            // if($(this).hasClass('checked')){
            //   $(this).removeClass('checked')
            // } else {
            //   $(this).addClass('checked')
            // }

            $(target).addClass('checked')
            console.log($(this).hasClass('checked'), target)
          })
        }
    }

  }

  createBoard()


  log1.text(randoms)
  log2.text("_________________")

})