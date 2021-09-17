$(() => {
    $('.log3').text(333)
    
    var audio = $('.audio')[0]
    let timerId = null
    let pause = true
    let current = 0

    startTimer()

    function startTimer(){
        if(timerId){
             clearTimeout(timerId)
        }
        timerId = setInterval(() => {
            current = audio.currentTime
            let t1 = ' play'
            if(audio.paused){
                pause = true
                t1 = ' pause'
            }else{
                pause = false
            }
            $('.log1').text( ' '
            + timeToMinut(current)+ '  ' + Math.floor(current) + t1)
        }, 500)
    }

    function timeToMinut(time){
        let t2 = 0 
		//time = Math.float(time)
		t2 = Math.floor(time/60) + ':' 
        + Math.floor(time%60)
        return t2

    }

    function appendText(text){
        let txt = $('#id_text')[0].value

        // $('#id_text').append(' ' + text)
        $('#id_text')[0].value = txt + ' ' + text
    }


    $('.btn_play').click(() => {
        pause = pause ? false : true
        if( !pause){
            audio.play()
        }else{
            current = audio.currentTime 
            $('.log2').text('' + current)
            $('.log2').text('' + timeToMinut(current))
            appendText(timeToMinut(current) + ' ' + current)
            audio.pause()

        }
    })

    $('.btn_back').click(() => {
        $('.log3').text('btn_back')
        audio.currentTime -=1 
        current = audio.currentTime
    })

    $('.btn_toward').click(() => {
        $('.log3').text('btn_toward')
        audio.currentTime +=1 
        current = audio.currentTime
    })

    audio.addEventListener('play', function(ev){
        pause = false
    });
        
    audio.addEventListener('pause', function(ev){
        pause = true
        appendText(timeToMinut(current) + ' ' + current)
        navigator.clipboard.writeText(current)

    });
        


})