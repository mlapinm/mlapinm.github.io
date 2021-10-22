let min = 20
let max = 80


$(()=>{
  var audio1 = $('.audio1')[0]
  var audio2 = $('.audio2')[0]
  let log1 = $('.log1')
  let log2 = $('.log2')
  let log3 = $('.log3')
  let button = $('.button_start')
  let timerId = null
  let count = 0
  let num = 0
  let timerStart = false

  create()

  function create(){

    items.forEach((e)=>{
      let section = $('<section></section>')
      let inner = $('<div class="inner"><div>')
      inner.text(e.name)
      section.append(inner)

    $('.slider').append(section)

    })

  }

  const random = (min, max) => {
    let v = Math.floor(Math.random() * (max - min + 1)) + min;
    v += v % 2
    return v
  }

  button.click(()=>{
    if(!timerStart){
      timerStart = true
      num = random(min, max)
      button.text('tic')
      audio1.play()

      count = 0
      button.removeClass('select')
      timerId = setInterval(() => {
        count += 1
        if(count >= num){
          button.text('boom')
          clearTimeout(timerId)
          timerStart = false
          button.addClass('select')
          audio2.play()
          return
        }
        audio1.play()
        let text = count%2 ? 'tac': 'tic'
        button.text(text)
        // log2.text('' + count)
  
      }, 1000)
    }

  })

})