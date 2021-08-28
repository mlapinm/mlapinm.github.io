$(() => {
  let log1 = $('.log1')
  let log2 = $('.log2')
  let edit0 = $('.edit0')
  let edit1 = $('.edit1')
  let table = $('.table')
  let list0 = $('.div_list0')
  let list1 = $('.div_list1')
  let lines0 = items[1].en
  let lines1 = items[2].en
  let editText = ''
  
  let count0 = lines0.length
  let count1 = lines1.length

  function create(){
    let textList0 = items[1].en
    let text0 = textList0.join('\n')
    let textList1 = items[2].en
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
    console.log(count)
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
