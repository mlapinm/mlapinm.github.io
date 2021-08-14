$(() => {
  let log1 = $('.log1')
  let log2 = $('.log2')
  let edit = $('.edit')
  let table = $('.table')
  let list0 = $('.div_list0')
  let list1 = $('.div_list1')
  let lines = items[0].en
  let editText = ''
  
  let count = lines.length
  if (count%2>0){
    let item = lines(lines[count-1])
    lines.push(item)
  }
  count = lines.length




  function create(){
    let textList = items[0].en
    let text = textList.join('\n')
    setEdit(text)
    setTable(text)
    setLists(text)


    edit.on('input selectionchange propertychange', function() {
      setTable(getEdit())
      setLists(getEdit())
    })
   

  }

  function setTable(text){
    let l = text.split('\n')
    count = l.length
    table.empty()
    for(let i=0;i<count/2;i++){
      let tr = $("<tr></tr>")
      let td0 = $("<td></td>")
      let td1 = $("<td></td>")
      td0.text(l[2*i])
      td1.text(l[2*i+1])
      tr.append(td0)
      tr.append(td1)
      table.append(tr)
      }
  }

  function setLists(text){
    let l = text.split('\n')
    count = l.length
    let l0 = []
    let l1 = []
    for(let i = 0; i<count;i++){
      if(i%2 == 0){
        l0.push('<p>"'+l[i]+'",</p>')
      }else{
        l1.push('<p>"'+l[i]+'",</p>')
      }
    }
    let text0 = l0.join('\n')
    let text1 = l1.join('\n')


    list0.html(text0)
    list1.html(text1)

  }

  function setEdit(text){
    $(".edit")[0].value = text
  }

  function getEdit(text){
    return $(".edit")[0].value
  }


  create()



})
