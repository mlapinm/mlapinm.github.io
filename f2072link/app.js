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
    this.cardText1 = $("<p></p>").addClass("card-text")
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

    notes[0]
    // let item = {
    //   "header" : notes[0].header,
    //   "title" : notes[0].items[0].title,
    //   "cardText" : notes[0].items[0]["card-text"],
    //   "link" : ""
    // };
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
    


   for(let i = 0; i < countItems; i++){
     if ( i % 2 == 0){
      let row = new Row()
      containerShow.append(row.builder())
      row.col1.setHeader(items[i].header + " " + i)
      .setTitle(items[i].title).setText(items[i].cardText)
      .setLink(items[i].link)

      row.col2.setHeader(items[i+1].header + " " + (i+1))
      .setTitle(items[i+1].title).setText(items[i+1].cardText)
      .setLink(items[i+1].link)

    }
   }

    log.text(countNotes)
    console.log("log1")

  });   