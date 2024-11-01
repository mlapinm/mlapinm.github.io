$(() => {
  let log1 = $('.log1')
  let log2 = $('.log2')
  let desk = $('.desk')

  function setDesks(thems, desks)
  {

    $.each(thems, (i, e) => {
      let div = $('<div></div>')
      div.addClass('desk' + i)
      let h = $('<h4></h4>')
      h.text(e)
      desk.append(h)
      desk.append(div)

      desks.push(div)
      // console.log( e, i)
    })


  }

  function setDesk(objs, desk){
    // let objs = objs04
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
        // console.log($('.'+className).length)
        if($('.'+className).length == 0){
          div.addClass(className)
          div[0].value = one[0].code.join('\n')
        
          // div.append(one[0].code.join('<br>'))
          target.after(div)
          let el = div[0]
          el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px";
          // console.log(el.scrollHeight)

          // el.style.height = "420px"
          }else{
            $('.'+className).remove()
          }
      })


    })

  }
  function setLinks(links){
    for(let i in links){
      let e = links[i]
      if(e.n == ''){
        continue
      }
      let p = $('<p></p>')
      p.text(e.n)
      desk.append(p)
      for(let j in e.ls){
        let l = e.ls[j]
        if(l[0] == ""){
          continue
        }
        let p = $('<p></p>')
        let a = $('<a></a>')
        a.prop('href', l[1])
        a.text(l[0])
        p.html(a)
        desk.append(p)
        // console.log(l, p[0])

      }



      console.log(links[i])
    }

  }

  function createDesk(){
    let desks = []
    setDesks(thems, desks)
    // log2.text(links[0].n)

    $.each(objThems,(i, e) => {
      if( e[1] != ''){
        setDesk(e[1], desks[i])
      }
    })

    try{
      links && setLinks(links)
    }catch(e){
      console.log( e.toString())
    }


  }

  createDesk()


  // log2.text("_________________")

})