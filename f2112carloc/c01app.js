
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
        $('.log1').text(''+ count + ' ' + items[current]['en'])
        $('.log2').text(items[current]['ru'])
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



    $('.btn_prev').click(() => {
        if(current > 0){
            current -= 1
         }else{
            current = count - 1
         }

        show()              
        playPart(items[current]['time'][0], items[current]['time'][1])
        $('.log3').text(1)
    })
    
    $('.btn_repeat').click(() => {

        // show()
      
        playPart(items[current]['time'][0], items[current]['time'][1])
        $('.log4').text(items[current]['time'][0])
        $('.log3').text(2)
    })

    $('.container1').click(() => {
        playPart(items[current]['time'][0], items[current]['time'][1])
        $('.log4').text(items[current]['time'][0])
        $('.log3').text(2)
    })

    $('.btn_next').click(() => {

        if(current < count - 1){
            current += 1
         }else{
            current = 0
         }
         show()

      
         playPart(items[current]['time'][0], items[current]['time'][1])
        //  $('.log4').text(" " + current + " " +items[current]['time'][0])
         $('.log3').text(3)
    })

    $('.btn_pause').click(() => {
        let butText = $('.btn_pause').text()
        if (butText == "Pause"){
            butText = "Play"
            pause = false
        }else{
            butText = "Pause"
            pause = true
        }
        $('.btn_pause').text(butText)

    })

})




