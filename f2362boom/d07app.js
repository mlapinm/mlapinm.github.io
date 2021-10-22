let min = 20
let max = 80

var items = [
  {
    "num": 0,
    "name": "ост"
  },
  {
    "num": 0,
    "name": "тел"
  }
]  




$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
 
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