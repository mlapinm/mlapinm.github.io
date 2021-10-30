$(() => {
  let log1 = $('.log1')
  let log2 = $('.log2')
  let edit0 = $('.text')
  let back = $('.back')
  let space = $('.space')
  let quote = $('.quote')
  let rid = $('.rid')
  let prevText = ''


  function create(){
    let textList = items[3].en
    let text = textList.join('\n')
    edit0[0].value = text

  }

  function saveText(){
    if(prevText == ''){
      prevText = edit0[0].value
    }
  }


  function oneSpace(text){
    let text2 = text
    let textList = text.split(' ')
    let textList2 = []
    for(let e of textList){
      let e2 = e.trim()
      if(e2 != ''){
        textList2.push(e2)
      }
    }
    text2 = textList2.join(' ')
    return text2
  }

  function onBack(){
    saveText()
    if(prevText != ''){
      edit0[0].value = prevText
      $('.back').text('back')
    }
  }

  function onSpace(){
    let text = edit0[0].value
    let textList = text.split('\n')
    let textList2 = []
    for(let e of textList){
      let e2 = ' ' + e
      textList2.push(e2)
    }
    let text2 = textList2.join('\n')
    edit0[0].value = text2
  }


  function onQuote(){
    let text = edit0[0].value
    let textList = text.split('\n')
    let textList2 = []
    for(let e of textList){
      let e2 = '"' + e + '",'
      textList2.push(e2)
    }
    let text2 = textList2.join('\n')
    edit0[0].value = text2
  }

  function onRid(){
    let text = edit0[0].value
    let textList = text.split('\n')
    let textList2 = []
    for(let e of textList){
      let e2 = oneSpace(e)
      if(e2 != ""){
        textList2.push(e2)
      }
    }
    let text2 = textList2.join('\n')
    edit0[0].value = text2
  }

  back.click(() => {
    onBack()
  })

  space.click(() => {
    onSpace()
  })

  quote.click(() => {
    onQuote()
  })

  rid.click(() => {
    onRid()
  })

  $('.add-str').click(()=>{
    let text = edit0[0].value
    let lines = text.split('\n')
    let outs = []
    lines.forEach(element => {
      outs.push(element)
      if(element.trim().length != 0){
        outs.push('')
      }
    });
    let textOut = outs.join('\n')
    edit0[0].value = textOut
  })

  $('.num-str').click(()=>{
    let text = edit0[0].value
    let lines = text.split('\n')
    let outs = []
    let k = Number($('.input-first')[0].value)
    let k2 = Number($('.input-last')[0].value)
    lines.forEach(element => {
      if(element.trim().length != 0){
        outs.push('' + k + ' ' + element)
        k += 1   
      }else{
        outs.push(element)
      }
    });
    for(let i = k; i < k2 + 1; i++){
      outs.push('' + i + ' ')
    }


    let textOut = outs.join('\n')
    edit0[0].value = textOut
    // edit0[0].value += '\n' + (k2-k)

  })


  create()
  // onSpace()
  // onQuote()
  // onRid()

})
