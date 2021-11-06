


$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
  
  let items = []
  let currentNum = 0

  let name = '3 first'
  let count = 3


  function sortItems(items){
    items.sort((a, b) => Math.random() - 0.5)
  }

  function getItems(name){
    items = []
    count = 0
    switch(name){
      case '3 first':
        count = 3
        for(let i = 0; i < count; i++){
          items.push(d09items[i])
        }
        break

        default:
          break
    }
    sortItems(items)
    currentNum = -1
  }

  function createBoard(){
    getItems(name)
    $('.div_choice').empty()


    items.forEach((e) => {
      let div = $('<div></div>')
      div.addClass('choice')
      div.text(e.artist)

      $('.div_choice').append(div)

      div.click((e) => {
        let text = $(e.target).text()
        log2.text(text
          + " "
          + items[currentNum].artist)
      })

    })
    sortItems(items)

    $('.btn-next').click((e) => {
      currentNum = currentNum < count - 1 ? currentNum + 1 : 0
      $('audio').attr('src', items[currentNum].music)
      $('audio')[0].play()
      log2.text(currentNum)

    })



  }


  $('.div_choice').append(333)

  createBoard()




  log2.text(44)
})
