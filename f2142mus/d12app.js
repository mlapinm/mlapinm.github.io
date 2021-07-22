$(() => {
    $('.log1').text(1)
    $('.log2').text(objs[1]['time'][0])
    $('.log3').text(3)
    let items = []
    for(let i=0;i<objs.length;i++){
        items.push(objs[i]['time'][0])
    }
    let max = items.length
    let maxTime = items[items.length-1]   
    let currentTime = 0
    let current = 0
    let currentPrev = 0
    var audio = $('.audio')[0]
    let timerId = null

    reShow()

    function playPart(begin, end){
        if(timerId){
            clearTimeout(timerId)
        }
        audio.currentTime = begin
        audio.play()
        timerId = setInterval(() => {
          $('.log1').text(Math.floor(audio.currentTime))
          currentTime = audio.currentTime - 0.3
          current = getCurrent()
          show()
         if ( audio.currentTime > end){
            audio.pause()
            audio.currentTime = end
            clearTimeout(timerId)
        }
        }, 100)
    }

    function getCurrent(){
        let retCurrent = current
        if(currentTime > maxTime){
            return retCurrent
        }
        for(let i = 0; i < max; i++){
            if (currentTime > items[i]) {
                retCurrent = i
            }
        }
        return retCurrent
    }

    function show(){
        if(current != currentPrev){
            reShow()
            currentPrev = current
        }
    }
    
    function reShow(){
        if(current-2>=0){
            $('.line1').text(objs[current-2]['en'])
        }else{
            $('.line1').text('')
        }
        if(current-1>=0){
            $('.line2').text(objs[current-1]['en'])
        }else{
            $('.line2').text('')
        }
        $('.line3').text(objs[current]['en'])
        if(current+1<max){
            $('.line4').text(objs[current+1]['en'])
        }else{
            $('.line4').text('')
        }
        if(current+2<max){
            $('.line5').text(objs[current+2]['en'])
        }else{
            $('.line5').text('')
        }
        $('.line6').text(objs[current]['ru'])

    }
    
    $('.btn_toward').click(() => {
        current = current < max-1 ? current+1 : current
        playPart(objs[current]['time'][0], objs[current]['time'][1])
        show()

        $('.log1').text(currentTime)
    })

    $('.btn_back').click(() => {
        current = current > 0 ? current-1 : current
        playPart(objs[current]['time'][0], objs[current]['time'][1])
        show()

        $('.log1').text(currentTime)
    })

    $('.btn_play').click(() => {
        playPart(objs[current]['time'][0], objs[current]['time'][1])
    })

    $('.btn_play_all').click(() => {
        playPart(objs[current]['time'][0], maxTime)
    })
})