
let fishkas = []


$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')

  let item = items[7]

  function showItem(item){
    let div = $('<div></div>')
    let p1 = $('<p></p>')
    p1.text(item.nums)
    let p2 = $('<p></p>')
    p2.text(item.name)
    div.append(p1)
    div.append(p2)
    $('.desk').append(div)
  }

  $('input').val(12)

  $('button').click(() => {
    item = items[10]
    showItem(item)

    let value = $('input').val()
    log2.text(value)
  })

  showItem(item)



  // log1.text(items[0].name)
  log2.text()

  

})