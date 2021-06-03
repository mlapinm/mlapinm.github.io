let log
let notes = []
let items = []
let countNotes = 0
let countItems = 0

class Column{

  constructor(){
    this.column = $("<div></div>").addClass("col-sm")

    this.cardBorder1 = $("<div></div>").addClass("card")
    .addClass("border-success").addClass("mb-3").addClass("h-100")
    this.cardHeader1 = $("<div></div>").addClass("card-header")
    .addClass("bg-transparent").addClass("border-success")
    this.cardBody1 = $("<div></div>").addClass("card-body")
    this.cardTitle1 = $("<h5></h5>").addClass("card-title")
    this.cardText1 = $("<div></div>").addClass("card-text")
    this.cardFooter1 = $("<div></div>").addClass("card-footer")
    .addClass("card-footer").addClass("bg-transparent")
    .addClass("border-success").addClass("text-end")
    this.btn1 = $("<a> Go </a>")

    this.cardBody1.append(this.cardTitle1)
    this.cardBody1.append(this.cardText1)
    this.cardFooter1.append(this.btn1)

    this.cardBorder1.append(this.cardHeader1)
    this.cardBorder1.append(this.cardBody1)
    this.cardBorder1.append(this.cardFooter1)
    this.column.append(this.cardBorder1)


  }

  builder(){
    return this.column
  }

  setHeader(text){
    this.cardHeader1.text(text)
    return this
  }

  setTitle(text){
    this.cardTitle1.text(text)
    return this
  }

  setText(text){
    this.cardText1.text(text)
    return this
  }

  setLink(text){
    this.btn1.attr("href", text)
    return this
  }

  setId(idText){
    this.cardText1.attr("id", idText)
    return this
  }
  

}


class Row{

  constructor(){
    this.row = $("<div></div>").addClass("row")
    this.col1 = new Column()
    this.col2 = new Column()

    this.row.append(this.col1.builder())
    this.row.append(this.col2.builder())
  }

  builder(){
    return this.row
  }

}


$.getJSON('m01.json', function(data) {
    let containerShow = $(".container1")
    log = $('.log')
     data.forEach(element => {
        notes.push(element)
    });
    countNotes = notes.length

    let emptyItem = {
      "header" : "",
      "title" : "",
      "cardText" : "",
      "link" : ""
    };

    notes.forEach((note) => {
      note.items.forEach((e) => {
        let item = Object.assign({}, emptyItem)
        item.header = note.header
        item.title = e.title
        item.cardText = e["card-text"]
        item.link = e.href
        items.push(item)
      })
      let count = items.length
      if(count % 2){
        items.push(Object.assign({}, emptyItem))
      }
    })

    countItems = items.length

    function clickText(e){
      $(".modal-title").text(items[e].title)
      $(".modal-text").empty()
      items[e].cardText.forEach((e) => {
        let line = $("<p></p>")
        line.addClass("line-modal")
        line.text(e)
        $(".modal-text").append(line)
      })

      $("#exampleModal").modal('show')
    }

   let headerPrev = "" 
   for(let i = 0; i < countItems; i++){
     if ( i % 2 == 0){
      if(headerPrev != items[i].header) {
        headerPrev = items[i].header
        containerShow.append($("<h5>" + headerPrev + "</h5>"))
      }
      let row = new Row()
      let idText1 = "#ct" + i
      let idText2 = "#ct" + (i+1)
      row.col1.setId(idText1.substr(1))
      row.col2.setId(idText2.substr(1))

     
      containerShow.append(row.builder())

      $(idText1).click((e) => {
        clickText(e.target.id.substr(2))
      }) 

      $(idText2).click((e) => {
        clickText(e.target.id.substr(2))
      })


      row.col1.setHeader(items[i].header + " " + i)
      .setTitle(items[i].title).setText(items[i].cardText[0])
      .setLink(items[i].link)

      row.col2.setHeader(items[i+1].header + " " + (i+1))
      .setTitle(items[i+1].title).setText(items[i+1].cardText[0])
      .setLink(items[i+1].link)

    }
   }

    log.text(countNotes)
    console.log("log1")

  });   