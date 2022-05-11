$(() => {

  
  let log1 = $('.log1')
  let log2 = $('.log2')
  let edit0 = $('.edit0')
  let edit1 = $('.edit1')
  let table = $('.table')
  let list0 = $('.div_list0')
  let list1 = $('.div_list1')
  let lines0 = []

  let lines1 = []
  let editText = ''
  
  let count0 = lines0.length
  let count1 = lines1.length
  let nav_spans = []

  function head_line(num){
    let s = `${num} ${items[num][1]} ${items[num][2]} ${items[num][0].length}`
    return s
  }

  function create_nav(){
    $(".div_head").text(head_line(0))

    for(let i in items){

      if(i%2){
        continue
      }

      let span = $("<span></span>")
      span.addClass("cl_" + i)
      nav_spans.push(span)

      name_ = items[i][1]
      name_ = name_.substring(3)
      name_ = name_.substring(0, name_.length-1)

      span.text(name_)


      span.click((e)=>{
        let sp = $(e.target)
        let class_name = sp.attr('class')
        res = class_name.match(/cl_([^ ]+)/)
        let num = res ? res[1] : 0
        num = Number(num)


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


    }


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

    create_nav()


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
    let l0 = texts[0].split('\n')
    count0 = l0.length
    let l1 = texts[1].split('\n')
    count1 = l1.length
    count = count0 > count1 ? count0 : count1
    let l = []
    for(let i = 0; i < count; i++){
        if(i < count0){
            l.push('<p>"'+l0[i]+'",</p>')
          }else{
            l.push('<p>"' + '",</p>')
          }
          if(i < count1){
            l.push('<p>"'+l1[i]+'",</p>')
          }else{
            l.push('<p>"' + '",</p>')
          }
    }

    let l12 = []
    for(let i = 0; i < count; i++){
        if(i < count0){
            l12.push('<p>"'+l0[i]+'",</p>')
          }else{
            l12.push('<p>"' + '",</p>')
          }
    }
    for(let i = 0; i < count; i++){
        if(i < count1){
            l12.push('<p>"'+l1[i]+'",</p>')
          }else{
            l12.push('<p>"' + '",</p>')
          }
    }


    for(e in l){
      // console.log(l[e])
    }
    let text00 = l.join('\n')
    let text01 = l12.join('\n')


    list0.html(text00)
    list1.html(text01)

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


  create()



})
