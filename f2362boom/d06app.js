
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
    $('.desk').empty()
    $('.desk').append(div)
  }

  $('input').val(47)

  $('button').click(() => {
    let value = $('input').val()
    item = find(Number(value))
    if(item){
      showItem(item)
    }
    $('input').select()
  })

  showItem(item)

  function find(num){
    let res = items.find((e,i) => {
      return e.nums.includes(num)
    }, num)
    return res
  }

  log2.text()
})
