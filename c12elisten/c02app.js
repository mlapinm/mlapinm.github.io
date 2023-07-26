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

  let page = 1
  // console.log(window.location.href)

  let get_param_url = (param) => {
      let urlParams = new URLSearchParams(window.location.search)
      return urlParams.get(param)
  }

  let set_param_url = (param, value) => {
      let urlParams = new URLSearchParams(window.location.search)
      let page = urlParams.get(param)
      if(page == null){
          urlParams.append(param, value)
      }else{
          urlParams.set(param, value)
      }
      if(page != value){
          // window.location.href = "/?" + urlParams.toString()
          let url = new URL(window.location.href);

          // Add a new parameter to the URL
          url.searchParams.set(param, value);
          
          // Update the URL of the current window
          window.history.replaceState(null, null, url);
          // window.history.replaceState(null, null, url);        
      }
  }

  page = get_param_url('page')
  if(page == null){
      page = 1
      set_param_url('page', page)
  }


  
  let count0 = lines0.length
  let count1 = lines1.length
  let nav_spans = []

  let translate_map = new Map()

  let status = 1
  let dstatus = {
    1: "en-ru",
    2: "ru-en"
  }


  function head_line(num){
    let s = `${num} ${items[num][1]} ${items[num][2]} ${items[num][0].length}`
    return s
  }

  let reveal_class = (who, name_class) => {
    $("." + name_class).removeClass(name_class)
    who.addClass(name_class)
  }


  function create_nav(){
    $(".div_nav").html("")

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

    let span = $("<span></span>")
    span.addClass("cl_status")
    nav_spans.push(span)

    span.text(dstatus[1])
    let ts = ["en-ru", "ru-en"]


    span.click((e)=>{
      let sp = $(e.target)
      let class_name = sp.attr('class')
      let text_sp = sp.text()
      let key = 0
      if(text_sp == ts[0]){
        sp.text(ts[1])
        key = 1
      }else{
        sp.text(ts[0])
        key = 0
      }
      let q = items.length
      let tt = []
      for(let i=0; i<q/2; i++){
        let n0 = i * 2
        let n1 = i * 2 + 1
        tt = items[n0]
        items[n0] = items[n1]
        items[n1] = tt

      }

      create()

    })

    $(".div_nav").append(span)


  }

  function create(){
    let textList0 = items[0][0]
    let text0 = textList0.join('\n')
    let textList1 = items[1][0]
    let text1 = textList1.join('\n')
    setEdit0(text0)
    setEdit1(text1)
    setTable([text0, text1])
    setLists([text0, text1])



    edit0.on('input selectionchange propertychange', function() {
      setTable(getEdit())
      setLists(getEdit())
    })
   
    edit1.on('input selectionchange propertychange', function() {
        setTable(getEdit())
        setLists(getEdit())
      })
  
  }

  function setTable(texts){
    let l0 = texts[0].split('\n')
    count0 = l0.length
    let l1 = texts[1].split('\n')
    count1 = l1.length
    let count = count0 >= count1 ? count0 : count1

    table.empty()
    for(let i=0;i<count;i++){
      let tr = $("<tr></tr>")
      let td0 = $("<td></td>")
      let td1 = $("<td></td>")
      if(i < count0){
        td0.text(l0[i])
      }
      if(i < count1){
        td1.text(l1[i])
      }
      tr.append(td0)
      tr.append(td1)
      table.append(tr)
      }
  }

  function setLists(texts){
    list0.html("")

    let l0 = texts[0].split('\n')
    count0 = l0.length
    let l1 = texts[1].split('\n')
    count1 = l1.length
    count = count0 > count1 ? count0 : count1
    let l = []
    for(let i = 0; i < count; i++){
        if(i < count0){
            l.push('<p>'+l0[i]+'</p>')
          }else{
            l.push('<p>' + '</p>')
          }
        if (0)  {
          if(i < count1){
            l.push('<p>'+l1[i]+'</p>')
          }else{
            l.push('<p>' + '</p>')
          }
        }
    }

    // list0.html(text00)
    // list1.html(text01)

    $.each(l0,(i, e) => {
      // console.log(i, e)
      let p = $('<p></p>')
      let pr = $('<p></p>')
      p.html(e)
      p.addClass('e_' + i)
      p.addClass('ee')
      list0.append(p)
      list0.append(pr)

      p.click((e) => {
        let target = $(e.target)

        var num = 0

        var cl = target.attr('class')
        var match = /e_(\d+)/.exec(cl)
        if(match){
          num = match[1]
        }
        num = Number(num)


        if(translate_map.has(l0[num])){
          translate_map.delete(l0[num])
        } else {
          translate_map.set(l0[num], l1[num])
        }
        traslate.html("")
        for (let [k, v] of translate_map){
          let p = $('<p></p>')
          p.addClass('grey')

          let pr = $('<p></p>')
          p.text(k + " [en]")
          pr.text(v + " [ru]")
          traslate.append(p)
          traslate.append(pr)
        }

        let pr = $(target[0].nextSibling)
        if(pr.text() == "" ){
          pr.html(l1[num])
        } else {
          pr.html("")
        }
        reveal_class(target, "blue")
      })

    })
//    console.log(text00)

  }

  function setEdit0(text){
    $(".edit0")[0].value = text
  }

  function setEdit1(text){
    $(".edit1")[0].value = text
  }

  function getEdit(text){
    return [$(".edit0")[0].value, $(".edit1")[0].value] 
  }


  create_nav()
  create()



})
