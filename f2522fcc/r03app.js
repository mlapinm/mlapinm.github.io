$(() => {
  let log1 = $('.log1')
  let log2 = $('.log2')
  let desk = $('.desk')

  function createDesk(){
    let objs = objs04
    objs.forEach(e1 => {

      let p = $('<p></p>')
      p.addClass('underline')

      p.append(e1.name)


      desk.append(p)

      p.click((e)=>{

        let target = $(e.target)
        // console.log(target.text())

        let one = objs.filter((item) => target.text() == item.name)
        // console.log(one)

        let div = $('<textarea name="" id="" cols="30" class="edit"></textarea>')
        let textName = one[0].name[0]
        let className = textName.replace(' ', '-')
        console.log($('.'+className).length)
        if($('.'+className).length == 0){
          div.addClass(className)
          div[0].value = one[0].code.join('\n')
        
          // div.append(one[0].code.join('<br>'))
          target.after(div)
          let el = div[0]
          el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px";
          console.log(el.scrollHeight)

          // el.style.height = "420px"
          }else{
            $('.'+className).remove()
          }
      })


    })

  }

  createDesk()


  log2.text("_________________")

})