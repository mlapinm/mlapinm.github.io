let log
let tests = []
let round = null

function openTest(pNameJson){
  $.getJSON(pNameJson, function(data) {
    data.forEach(element => {
      tests.push(element)
    });
  }).then(()=>{

    class Round{
      wordsIndexes = []

      constructor(){
        this.squareRu = $('.square-ru')
        this.squareSentence = $('.square-sentence')
        this.firstWordDisplay = $('.first-word')
        this.buttonsDisplay = $('.buttons-display')

        this.squareAnswer = $('.square-answer')
      }

      setTest(test){
        this.test = test
        this.enWords = this.test.en.split(' ')
      }

      show(){
        this.squareRu.text(this.test.ru)
        this.firstWordDisplay.text(this.enWords.shift())


        for(let i=0;i<this.enWords.length;i++){
          this.wordsIndexes.push([this.enWords[i], i])
        }

        this.wordsIndexes.sort(()=>{
          if(Math.random() > 0.3){
            return 1
          }else{
            return -1
          }
        })

        for(let i=0;i<this.wordsIndexes.length;i++){
          const button = document.createElement('a')
          button.innerText = this.wordsIndexes[i][0]
          button.id = 'b' + this.wordsIndexes[i][1]
          button.classList.add('btn', 'btn-light' , 'btn-lg')
          button.addEventListener('click', this.onButtonClick)
          this.buttonsDisplay.append(button)
        }

        this.squareAnswer.text(this.test.en)
      }

      onButtonClick(e){
        let button = this
        if(button.style.color == 'lightgray'){
          return
        }
        let buttonText = button.innerText
        let buttonId = button.id

        let word = document.createElement('a')
        word.innerText = buttonText
        word.id = 'w' + buttonId.substring(1)
        word.classList.add('btn', 'btn-light' , 'btn-lg')
        word.addEventListener('click', round.onWordClick)

        round.squareSentence.append(word)
        button.style.color = 'lightgray'
        log.text(button.innerText)
      }


      onWordClick(e){
        let word = this
        let wordText = word.innerText
        let wordId = word.id
        let buttonId = 'b' + wordId.substring(1)
        let button = document.querySelector('#' + buttonId)

        button.style.color = 'gray'
        $('#'+wordId).remove()

      }
    }

    round = new Round()
    round.setTest(tests[1])
    round.show()


      // log.text(tests[1].ru)
  })
}




$(()=>{
  log = $('.test')
  
  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  var nameJson = url.searchParams.get("test");
  let testJson = nameJson + ".json"

  $.get(testJson)
    .done(function() { 
        openTest(testJson)
    }).fail(function() { 
      openTest("m01.json")
        testJson = "m01.json"
      })

  // test.text(245)
})


