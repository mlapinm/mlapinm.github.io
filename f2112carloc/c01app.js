
$(() => {
    $('.log3').text(333)
    var count = 0
    var current = 0
          
    count = items.length

    var audio = $('.audio')[0]
    let timerId = null
    let pause = false
    pause = true

    function show(){
        $('.log1').text(items[current]['en'])
        $('.log2').text(items[current]['ru'])
        $('.log4').text(current)
    }

    function getCurrent(curTime){
        let retCurrent = current;
        for(let i = 0; i < count; i++){
            if (curTime > items[i]['time'][0]) {
                retCurrent = i;

            }
        }
        return retCurrent;

    }



    function playPart(begin, end){
        let end1 = end
        if(timerId){
            clearTimeout(timerId)
        }
        audio.currentTime = begin
        audio.play()
        timerId = setInterval(() => {
            if ( audio.currentTime > end1 && pause){
                audio.pause()
                audio.currentTime = end1
                clearTimeout(timerId)
            }
                let curTime = audio.currentTime
          $('.log3').text(Math.floor(curTime))
          let cur = getCurrent(curTime)
          if( cur != current){
            current = cur
            show()
            if(!pause){
                end1 = items[current]['time'][1]
            }
          }
        }, 100)
    }


    show()    


    function mPrev(){
        if(current > 0){
            current -= 1
         }else{
            current = count - 1
         }

        show()              
        playPart(items[current]['time'][0], items[current]['time'][1])
        $('.log3').text(1)
    }

    function mNext(){
        if(current < count - 2){
            current += 1
         }else{
            current = 0
         }
         show()

      
         playPart(items[current]['time'][0], items[current]['time'][1])
        //  $('.log4').text(" " + current + " " +items[current]['time'][0])
         $('.log3').text(3)
    }

    $('.btn_prev').click(() => {
        mPrev()
    })
    
    function mRepeat(){
        playPart(items[current]['time'][0], items[current]['time'][1])
        // $('.log4').text(items[current]['time'][0])
        // $('.log3').text(2)
    }

    $('.btn_repeat').click(() => {

        // show()
        mRepeat()
      
    })

    $('.container1').click(() => {
        mRepeat()
    })

    $('.btn_next').click(() => {
        mNext()

    })

    function mPause(){
        let butText = $('.btn_pause').text()
        if (butText == "Pause"){
            butText = "Play"
            pause = false
            $('.menu_button').css('background-color','antiquewhite')
            $('.menu_button').text('>')
        }else{
            butText = "Pause"
            pause = true
            $('.menu_button').css('background-color','aqua')
            $('.menu_button').text('||')
        }
        $('.btn_pause').text(butText)
    }

    $('.btn_pause').click(() => {
        mPause()

    })

    $('.panel1').click(()=>{
        mPrev()
    })
    $('.panel2').click(()=>{
        mNext()
    })
    $('.panel1').mousedown(() => {
        $('.panel1').css('background-color','beige')
    })
    $('.panel1').mouseup(() => {
        $('.panel1').css('background-color','')
    })
    $('.panel2').mousedown(() => {
        $('.panel2').css('background-color','beige')
    })
    $('.panel2').mouseup(() => {
        $('.panel2').css('background-color','')
    })

    $('.menu_button').click((e)=>{
        e.stopPropagation()
        mPause()
    })

})





