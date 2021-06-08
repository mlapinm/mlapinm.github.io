let log
let notes = []
let items = []
let countNotes = 0
let countItems = 0

$(() => {
  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  var nameJson = url.searchParams.get("test");
  if(!nameJson){
    nameJson = "m01"
  }
  let testJson = nameJson + ".json"

  $.getJSON(testJson, function(data) {
    let containerShow = $(".container1")
    let containerFooter = $(".container2")
    log = $('.log')
     data.forEach(element => {
        notes.push(element)
    });
    countNotes = notes.length

    let index = 0
    let prevId = 0

    notes.forEach((note) => {
      let paragraph = $("<p></p>")
      paragraph.text(note.en)
      let idText = "note" + index++
      paragraph.attr("id", idText)

      containerShow.append(paragraph)


      $("#" + idText).click((e) => {
        let numId = parseInt(e.target.id.substr(4))
        $("#" + "note" + prevId).removeClass("selected")
        $("#" + "note" + numId).addClass("selected")
        prevId = numId

        const utterance = new SpeechSynthesisUtterance(notes[numId].en);
        window.speechSynthesis.speak(utterance);

        let textRu = notes[numId].ru
     
        containerFooter.text("" + numId + " " + textRu)
      })

    })


    log.text(countNotes)
    console.log("3")

  });   

})


