$(() => {
  let log1 = $('.log1')
  let log2 = $('.log2')
  let res = $('.div-res')
  let edit0 = $('.edit0')
  let edit2 = $('.edit2')
  let back = $('.back')
  let space = $('.space')
  let prevText = ''
  let lines = []
  let obj = {
    name : '',
    code : [
      "",
      ""
    ]
  }
  let objs = []
  let desk = $('.desk')



  function create(){
    let text = ''
    text += '1 a'
    text += '\n'
    text += 'aa'
    text += '\n'
    text += 'ab'
    text += '\n'
    text += '2 b'
    text += '\n'
    text += 'ba'
    text += '\n'
    text += 'bb'
    text += '\n'
    text += ''
    text += '\n'
    
    edit0[0].value = text





    // res.text(text)

  }

  function saveText(){
    if(prevText == ''){
      prevText = edit0[0].value
    }
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


  back.click(() => {
    onBack()
  })

  space.click(() => {
    onSpace()
  })

  edit0.on('input selectionchange propertychange', () => {

    init()


    let text = edit0[0].value
    res.text(text)

  })

  function init(){
    let text = edit0[0].value
    lines = text.split('\n')
    let objsLength = getObjsLength()
    objs = []
    for(let i = 0; i < objsLength; i++){
      let clone = {}
      for (let key in obj){
        clone[key] = obj[key]
      }
      objs.push(clone)
    }


    lines.reverse()
    let codes = []
    let k = 0
    lines.forEach((l) => {
      let r = l.match(/^\d+/)
      if(r){
        objs[k].name = l
        codes.reverse()
        let codes2 = []
        codes.forEach((e) => {
          codes2.push(e)
          console.log(k, e)
        })
        objs[k].code = codes2
        codes = []
        k += 1
      }else{
        codes.push(l)
      }
    })
    objs.reverse()

      text = ''
      objs.forEach((e) => {
        text += e.name
        text += ' - '
        text += e.code
        text += ' - - '
      })
      text = JSON.stringify(objs, null, ' ')
      edit2[0].value = text

      let o = {
        "name": "1 a",
        "code": [
         "aa",
         "ab"
        ]
       }
      
      res.text(o.name + ' - ' + o.code)
      createDesk()

  }

  function getObjsLength(){
    let numLines = lines.filter((e) => {
      return e.match(/^\d+/)
    })
    return numLines.length
  }

  function createDesk(){
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

        let div = $('<div></div>')
        let textName = one[0].name[0]
        let className = textName.replace(' ', '-')
        // console.log(one[0].challenge[0])
        // log2.text($('.'+className))
        console.log($('.'+className).length)
        if($('.'+className).length == 0){
          div.addClass(className)
          div.append(one[0].code.join('<br>'))
          target.after(div)
          }else{
            $('.'+className).remove()
          }
      })


    })

  }


  create()
  init()
  // onSpace()

  // let text = getObjsLength()
  // log2.text(text)

})
