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
    lines.push('item')
  }
  // lines.push('|--')
  // lines.push('--|')
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
    let l = []
    let leq = []
    getLists(text, l, leq)
    count = l.length
    table.empty()
    for(let i=0;i<count/2;i++){
      let tr = $("<tr></tr>")
      let td0 = $("<td></td>")
      let td1 = $("<td></td>")
      let s0 = l[2*i].trim()
      let s1 = l[2*i+1].trim()
      if(!/^[a-zA-Z]/.test(s0)){
        td0.addClass("blue")
      }
      if(!/^[a-zA-Z]/.test(s1)){
        td1.addClass("blue")
      }
      if(leq[2*i]>1){
        td0.addClass("repeat")
      }
      if(leq[2*i+1]>1){
        td1.addClass("repeat")
      }
      td0.text(s0)
      td1.text(s1)
      tr.append(td0)
      tr.append(td1)
      table.append(tr)
      }
  }

  function getLists(text, l, leq){
    let l1 = text.split('\n')
    let count = l1.length
    if(count%2){
      l1.push('')
      count += 1
    }
    let l0 = []
    for(let e of l1 ){
      let e1 = e.replace(/\s+/g, ' ').trim()
      l0.push(e1)
    }

    for(let s of l0){
      let count1 = l0.filter((e) => {
      let e1 = e.toLowerCase()
      let s1 = s.toLowerCase()
      let re = /[.?!]/
      e1 = e1.replace(re, '') 
      s1 = s1.replace(re, '') 

        return e1 == s1
      }).length
      // console.log(count1)
      l.push(s)
      leq.push(count1)
    }    

  }

  function setLists(text){
    let l = []
    let leq = []
    getLists(text, l, leq)


    count = l.length
    list0.empty()
    list1.empty()
    for(let i = 0; i<count;i++){
      let p = $("<span></span>")
      let br = $("<br></br>")
      let s = l[i].trim()
      if(!/^[a-zA-Z]/.test(s)){
        p.addClass("blue")
      }
      if(leq[i]>1){
        p.addClass("repeat")
      }
      s = '"' + s + '",'
      p.text(s)
      if(i%2 == 0){
        list0.append(p)
        list0.append(br)
      }else{
        list1.append(p)
        list1.append(br)
      }
    }
  }

  function setEdit(text){
    $(".edit")[0].value = text
  }

  function getEdit(text){
    return $(".edit")[0].value
  }


  create()



})
