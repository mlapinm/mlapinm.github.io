$(() => {
  let log1 = $('.log1')
  let log2 = $('.log2')
  let edit0 = $('.text')
  let back = $('.back')
  let space = $('.space')
  let one = $('.one_string')
  let prevText = ''


  function create(){
    let textList = items[4].en
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


  function onOne(){
    let text = edit0[0].value
    let textList = text.split('\n')
    let textList2 = []
    let max = textList.length

    let k = 0
    let line = []

    for(let e of textList){

      let match = e.match(/\d+\.\d+/)
      if(match || k == max - 1){

        if(line.length > 0){
          textList2.push(line.join(' '))
          line = []
        }
        textList2.push(e.trim())
        k += 1
        continue
      }
      
      line = line.concat(e.split(' '))
      line = line.filter(a => a.trim().length > 0)

      k += 1
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

  one.click(() => {
    onOne()
  })

  create()
  onSpace()
  // onOne()
})
