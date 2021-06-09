let log
let notes = []
let linkPrev = "note.html?module="

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


$.getJSON("m00.json", (data) => {
  log = $(".log")
  let containerShow = $(".container0")
  data.forEach(element => {
    notes.push(element)
  });
  countNotes = notes.length
  if(countNotes % 2){
    let o = Object.assign({}, notes[countNotes-1])
    notes.push(o)
  }
  countNotes = notes.length

  for(let i = 0; i < countNotes; i++){
    if( i % 2 ==0){
      let row = new Row()
      containerShow.append(row.builder())
      row.col1.setHeader(notes[i].header + " " + i)
      .setTitle(notes[i].title).setText(notes[i]["card-text"][0])
      .setLink(linkPrev + notes[i].link)

      row.col2.setHeader(notes[i].header + " " + (i+1))
      .setTitle(notes[i+1].title).setText(notes[i+1]["card-text"][0])
      .setLink(linkPrev + notes[i+1].link)

    }
  }

  log.text(countNotes)

})





