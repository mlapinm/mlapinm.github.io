$(() => {

  
  let log1 = $('.log1')
  let log2 = $('.log2')
  let edit0 = $('.edit0')
  let edit1 = $('.edit1')
  let table = $('.table')
  let list0 = $('.div_list0')
  let list2 = $('.div_list2')
  let p1 =$('<p></p>')
  let p2 =$('<p></p>')
  let p3 =$('<p></p>')
  list2.append(p1)
  list2.append(p2)
  list2.append(p3)
  let input = $('.input')
  let its = []
  let n_view = 0
  let traslate = $('.div_translate')
  let lines0 = []

  let lines1 = []
  let editText = ''
  
  let count0 = lines0.length
  let count1 = lines1.length
  let nav_spans = []

  let translate_map = new Map()

  $('.prev').click(() => {
    max_view = its.length
    n_view = Number(n_view) - 1  < 0 ? max_view - 1 : n_view - 1 
    show_list2(its[n_view])
    // console.log(n_view)
  })


  $('.next').click(() => {
    max_view = its.length
    n_view = Number(n_view) + 1  >= max_view ? 0 : n_view + 1 
    show_list2(its[n_view])
    // console.log(n_view)
  })

  function find_letters(letters){
    its = []
    let k = 0
    let kmax = 10
    for(let i in items){
      for(let j in items[i][0]){
        let e = items[i][0]
        if(e[j].includes(letters)){
          // console.log(e[j])
          its.push([i, j])
        }
      }

    }
    // console.log(its.length, its[0])
    if(its.length){
      show_list2(its[0])
    }


  }
  

  function show_list2(item){

    let i = item[0]
    let j = item[1]
    let r = Number(i) + 1
    p2.addClass('grey')
    p1.text(items[i][1] + ' ' + its.length + ' ' + (Number(n_view) + 1))
    p2.text(items[i][0][j])
    p3.text(items[r][0][j])



  }

  list2.click(() => {
    let p02 =$('<p></p>')
    let p03 =$('<p></p>')
    p02.addClass('grey')
    p02.text(p2.text())
    p03.text(p3.text())


    list0.append(p02)
    list0.append(p03)

  })



  function create(){
    input[0].value = "egg"
    let letters = input[0].value
    find_letters(letters)

    input.on('input selectionchange propertychange', function(){
      let value = input[0].value
      if(value.length < 3){
        return
      }
      find_letters(value)

    })

    // console.log(items)
  }


  create()



})
