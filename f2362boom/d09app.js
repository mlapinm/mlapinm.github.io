


$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
  
  let items = []

  let name = '3 first'
  let count = 3

  function getItems(name){
    items = []
    switch(name){
      case '3 first':
        for(let i = 0; i < count; i++){
          items.push(d09items[i])
        }
        for(let i = 0; i < count; i++){
          items.push(d09items[i])
        }
        break

        default:
          break
    }

  }

  function createBoard(){
    getItems(name)
    $('.div_choice').empty()


    items.forEach((e) => {
      let div = $('<div></div>')
      div.addClass('choice')
      div.text(e.artist)

      $('.div_choice').append(div)
    })





  }
  $('.div_choice').append(333)

  createBoard()




  log2.text(44)
})
