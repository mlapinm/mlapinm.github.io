let log
let tests = []
let round = null
let isShowAnswer = false

function openTest(pNameJson){
  $.getJSON(pNameJson, function(data) {
    data.forEach(element => {
      tests.push(element)
    });
  }).then(() => {

    class Round{
      wordsIndexes = []
      firstWord = ''
      isShowAnswer = false
      sentenceWords = []
      isCheckOk = false

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

      setIsShowAnswer(isShowAnswer1){
        this.isShowAnswer = isShowAnswer1
      }

      show(){
        this.clear()
        this.sentenceWords = []
        this.squareRu.text(this.test.ru)
        this.firstWord = this.enWords.shift()
        this.firstWordDisplay.text(this.firstWord)
        this.sentenceWords.push(this.firstWord)


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
          button.classList.add('btn', 'btn-light' , 'btn-lg', 'fs-2')
          button.addEventListener('click', this.onButtonClick)
          this.buttonsDisplay.append(button)
        }
        this.showAnswer(this.isShowAnswer)

      }

      showAnswer(isShowAnswer1){
        if(isShowAnswer1){
          this.squareAnswer.text(this.test.en)
          isShowAnswer = true
          $('.btn-enable').addClass('active1')
        }else{
          this.squareAnswer.text('')
          isShowAnswer = false
          $('.btn-enable').removeClass('active1')
        }
      }

      clear(){
        this.firstWord = ''
        this.buttonsDisplay.children().remove()
        this.squareSentence.children().remove()
        this.wordsIndexes = []
        log.text('')
      }

      testing(){
        // let text = $('.square-all-sentence').text()
        let textInput = '2' 
        //textInput = this.sentenceWords.join(' ')
        textInput = $('.first-word').text()
        let ar = $('.square-sentence').contents()
        let k=' '
        ar.each((i,v)=>{
          textInput += ' ' + v.innerText
        })

        let textTest = this.firstWord + ' ' + this.enWords.join(' ')
        if(textInput == textTest){
          this.isCheckOk = true
          log.css('backgroundColor', 'white')
        }else{
          this.isCheckOk = false
          log.css('backgroundColor', 'lightgray')
        }
        log.text(this.isCheckOk)
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
        word.classList.add('btn', 'btn-light' , 'btn-lg', 'fs-2')
        word.addEventListener('click', round.onWordClick)

        round.squareSentence.append(word)
        button.style.color = 'lightgray'

        round.sentenceWords.push(buttonText)
        // log.text(button.innerText)
      }


      onWordClick(e){
        let word = this
        let wordText = word.innerText
        let wordId = word.id
        let buttonId = 'b' + wordId.substring(1)
        let button = document.querySelector('#' + buttonId)

        button.style.color = 'black'
        $('#'+wordId).remove()

      }
    }

    round = new Round()
    round.setTest(tests[0])
    round.show()

    let number = 0

    $('.btn-next').click(()=>{
      if(number<tests.length-1){
        number++
      }else{
        number = 0
      }
      round.setTest(tests[number])
      round.show()
      $('.number').text(number+1)
    })

    $('.btn-previous').click(()=>{
      if(number > 0){
        number--
      }else{
        number = tests.length-1
      }
      round.setTest(tests[number])
      round.show()
      $('.number').text(number+1)
    })



    $('.btn-enable').click(()=>{
      if(isShowAnswer == false){
        round.showAnswer(true)
        isShowAnswer = true
        $('.btn-enable').addClass("active1")
      }else{
        round.showAnswer(false)
        isShowAnswer = false
        $('.btn-enable').removeClass("active1")
      }
    })

    $('.btn-always').click(()=>{
      if(round.isShowAnswer == false){
        round.setIsShowAnswer(true)
        $('.btn-always').addClass("active1")

        round.showAnswer(true)
        isShowAnswer = true
        $('.btn-enable').addClass("active1")


      }else{
        round.setIsShowAnswer(false)
        $('.btn-always').removeClass('active1')

        round.showAnswer(false)
        isShowAnswer = false
        $('.btn-enable').removeClass("active1")


      }
    })

    $('.btn-check1').click(()=>{
      round.testing()
    })

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


