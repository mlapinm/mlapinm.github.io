$(() => {

  
  let log1 = $('.log1')
  let log2 = $('.log2')
  let edit0 = $('.edit0')
  let edit1 = $('.edit1')
  let table = $('.table')
  let list0 = $('.div_list0')
  let list1 = $('.div_list1')
  let traslate = $('.div_translate')
  let lines0 = []

  let lines1 = []
  let editText = ''
  
  let count0 = lines0.length
  let count1 = lines1.length
  let nav_spans = []

  let translate_map = new Map()

  function head_line(num){
    let s = `${num} ${items[num][1]} ${items[num][2]} ${items[num][0].length}`
    return s
  }

  function create_nav(){

    $(".div_head").text(head_line(0))

    let k = 0
    for(let i in items){

      if(i%2){
        continue
      }

      let span = $("<span></span>")
      span.addClass("cl_" + i)
      nav_spans.push(span)

      name_ = items[i][1]
      let n = k + 1
      let s = n < 10 ? `0${n}`: n
      span.text(s)


      span.click((e)=>{
        let sp = $(e.target)
        let class_name = sp.attr('class')
        res = class_name.match(/cl_([^ ]+)/)
        let num = res ? res[1] : 0
        num = Number(num)
        item_num = num

        textList0 = items[num][0]
        textList1 = items[num + 1][0]
        setEdit0(items[num][0].join('\n'))
        setEdit1(items[num + 1][0].join('\n'))
        setTable(getEdit())
        setLists(getEdit())


        $(".div_head").text(head_line(num))
        

        for(let e in nav_spans){
          nav_spans[e].removeClass('clicked')
        }

        sp.addClass('clicked')
         
      })


      $(".div_nav").append(span)
      $(".div_nav").append(' ')
      k += 1


    }


  }

  function create(){
    let litems = items[0][0]

    setLists(litems)
    

    // create_nav()


    edit0.on('input selectionchange propertychange', function() {
      setTable(getEdit())
      setLists(getEdit())
    })
   
    edit1.on('input selectionchange propertychange', function() {
        setTable(getEdit())
        setLists(getEdit())
      })
  
  }


  function setLists(litems){
    list0.html("")

    $.each(litems, (i, e) => {
      let p = $('<p></p')
      let pr = $('<p></p>')
      let a = $('<a></a>')
      let span = $('<span></span>')
      span.text(e.title)
      a.text(`${i + 1} `)
      a.attr("href", e.link)
      p.addClass('e_' + i)
      p.addClass('ee')
      p.append(a)
      p.append(span)
      list0.append(p)
      list0.append(pr)

      p.click((e) => {
        let target0 = $(e.target)
        let target = target0.parent()
        var num = 0

        var cl = target.attr('class')
        var match = /e_(\d+)/.exec(cl)
        if(match){
          num = match[1]
        }
        num = Number(num)

        let pr = $(target[0].nextSibling)
        if(pr.text() == "" ){
          litems[num].desc.forEach(e => {
            p = $('<p></p>')
            p.text(e)
            pr.append(p)
          });
        } else {
          pr.html("")
        }
      })
    })
  }

  function getEdit(text){
    return [$(".edit0")[0].value, $(".edit1")[0].value] 
  }

  create()



})
