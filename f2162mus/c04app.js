$(() => {
    // $('.log2').text(objs[1]['time'][0])
    let items = []
    for(let i=0;i<objs.length;i++){
        items.push(objs[i]['time'][0])
    }
    let max = items.length
    let maxTime = items[items.length-1]  
    let pause = false
    pause = true 
    let currentTime = 0
    let endTime = 0
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
        endTime = end
        timerId = setInterval(() => {
            if ( audio.currentTime > endTime && pause){
                audio.pause()
                audio.currentTime = end
                clearTimeout(timerId)
                return
            }
              $('.log3').text(Math.floor(audio.currentTime))
          currentTime = audio.currentTime
          current = getCurrent()
          show()
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

    function mDiv(l){
        let div = $('<div></div>')
        div.addClass("line0")
        // div.css("display","flex")
        // div.css("flex-wrap","wrap")
        // div.css("height","100%")
        // div.css("align-content"," space-around")
        for(let e of l){
            let p = $('<div></div>')
            
            p.append(e)
            div.append(p)
        }
        return div
    }
    
    function reShow(){
        if(current-2>=0){
            $('.div-line1').html(mDiv(objs[current-2]['en']))
        }else{
            $('.div-line1').text('')
        }
        if(current-1>=0){
            $('.div-line2').html(mDiv(objs[current-1]['en']))
        }else{
            $('.div-line2').text('')
        }


        // $('.line3').text(objs[current]['en'])
        $('.div-line3').html(mDiv(objs[current]['en']))


        if(current+1<max){
            $('.div-line4').html(mDiv(objs[current+1]['en']))
        }else{
            $('.div-line4').text('')
        }
        if(current+2<max){
            $('.div-line5').html(mDiv(objs[current+2]['en']))
        }else{
            $('.div-line5').text('')
        }
        $('.div-line6').html(mDiv(objs[current]['ru']))

    }

    function mToward(){
        current = current < max-1 ? current+1 : current
        playPart(objs[current]['time'][0], objs[current]['time'][1])
        show()
    }
    
    $('.btn_toward').click(() => {
        mToward()
    })

    $('.div-line4').click(() => {
        mToward()
    })

    $('.div-line5').click(() => {
        mToward()
    })

    $('.div-line6').click(() => {
        mToward()
    })

    function mBack(){
        current = current > 0 ? current-1 : current
        playPart(objs[current]['time'][0], objs[current]['time'][1])
        show()
    }

    $('.btn_back').click(() => {
        mBack()
    })

    $('.div-line1').click(() => {
        mBack()
    })

    $('.div-line2').click(() => {
        mBack()
    })


    function mRepeat(){
        playPart(objs[current]['time'][0], objs[current]['time'][1])
    }

    $('.btn_play').click(() => {
        mRepeat()
    })

    $('.div-line3').click(() => {
        mRepeat()
    })

    function mPause(){
        let butText = $('.btn_pause').text()
        if(butText == "Pause"){
            butText = "Play"
            pause = false
        }else{
            butText = "Pause"
            pause = true
            endTime = 0
        }
        $('.btn_pause').text(butText)
    }

    $('.btn_pause').click(() => {
        mPause()

    })
})