$(() => {
    $('.log3').text(333)
    
    var audio = $('.audio')[0]
    let timerId = null
    let pause = true
    let current = 0

    function play(){
        if(timerId){
             clearTimeout(timerId)
        }
        // audio.currentTime = current
        timerId = setInterval(() => {
            // $('.log3').text(Math.floor(audio.currentTime))

        }, 500)
    }

    function appendText(text){
        $('#id_text').append(' ' + text)
    }
    play()

    $('.btn_play').click(() => {
        pause = pause ? false : true
        if( !pause){
            audio.play()
        }else{
            current = audio.currentTime 
            $('.log1').text('' + current)
            let t = Math.floor(current)
            let t2 = Math.floor(t/60) + ':' 
            + Math.floor(t%60)
            $('.log2').text('' + t2)
            appendText(current + ' ' + t2)
            audio.pause()

        }
    })

})