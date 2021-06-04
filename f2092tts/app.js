let text1 = "She want him to tell her the truth"


$(() => {
    let log = $(".log")
  function read1(){
    const utterance = new SpeechSynthesisUtterance(text1);
    window.speechSynthesis.speak(utterance);
  }

  read1()

  

    log.text(text1)

})
