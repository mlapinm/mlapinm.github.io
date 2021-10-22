let min = 20
let max = 80

var items = [
  {
    "num": "ns00",
    "name": "бат"
  },
  {
    "num": "ns01",
    "name": "радио Питер"
  }
]  




$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
 
  create()

  function create(){

    items.forEach((e)=>{
      let section = $('<section></section>')

      let desc = $('<div></div>')
      desc.addClass('desc')

      let ns = eval(e.num)

      ns.forEach((n) => {
        let name = $('<div></div>')
        name.addClass('name')
        let val = $('<div></div>')
        val.addClass('val')

        name.text(n.names[0])
        val.text(n.vals[0])

        desc.append(name)
        desc.append(val)
        
      })

      let note = $('<div></div>')
      note.addClass('note')

      // desc.text('22')
      note.text(e.name)

      section.append(desc)
      section.append(note)

    $('.slider').append(section)

    })

  }



})