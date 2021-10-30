


$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
  let desk = $('.desk')

  function createDesk(){
    items.forEach(e => {

      let p = $('<p></p>')
      p.addClass('underline')

      p.append(e.challenge)


      desk.append(p)

      p.click((e)=>{

        let target = $(e.target)
        // console.log(target.text())

        let one = items.filter((item) => target.text() == item.challenge)
        // console.log(one)

        let div = $('<div></div>')
        let textName = one[0].challenge[0]
        let className = textName.replace(' ', '-')
        // console.log(one[0].challenge[0])
        // log2.text($('.'+className))
        console.log($('.'+className).length)
        if($('.'+className).length == 0){
          div.addClass(className)
          div.append(one[0].desc.join('<br>'))
          target.after(div)
          }else{
            $('.'+className).remove()
          }
      })


    })

  }

  createDesk()

  log2.text(44)
})
