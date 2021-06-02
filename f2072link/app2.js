let log
let notes = []
let count = 0


$.getJSON('m01.json', function(data) {
    let containerShow = $(".container1")
    log = $('.log')
     data.forEach(element => {
        notes.push(element)
    });
    count = notes.length

    let row = $("<div></div>").addClass("row")
    let col1 = $("<div></div>").addClass("col-sm")
    let cardBorder1 = $("<div></div>").addClass("card")
    .addClass("border-success").addClass("mb-3")
    let cardHeader1 = $("<div></div>").addClass("card-header")
    .addClass("bg-transparent").addClass("border-success")
    let cardBody1 = $("<div></div>").addClass("card-body")
    let cardTitle1 = $("<h5></h5>").addClass("card-title")
    let cardText1 = $("<p></p>").addClass("card-text")
    let cardFooter1 = $("<div></div>").addClass("card-footer")
    .addClass("card-footer").addClass("bg-transparent")
    .addClass("border-success").addClass("text-end")
    let btn1 = $("<a> Go </a>")
    btn1.attr("href", "http://yandex.ru/")

    cardBody1.append(cardTitle1)
    cardBody1.append(cardText1)
    cardFooter1.append(btn1)

    cardBorder1.append(cardHeader1)
    cardBorder1.append(cardBody1)
    cardBorder1.append(cardFooter1)
    col1.append(cardBorder1)

    cardHeader1.text("Header 1")    
    cardTitle1.text("title1")
    cardText1.text("card text")
    


    let col2 = $("<div>22</div>").addClass("col-sm")

    row.append(col1)
    row.append(col2)
    
    containerShow.append(row)

    log.text(notes[0].header)
    console.log(notes[0])

  });   