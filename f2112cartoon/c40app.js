
$(() => {
    $('.log3').text(333)

    var audio = $('.audio')[0]

    function playPart(begin, end){
        audio.currentTime = begin
        audio.play()
        let timerId = setInterval(() => {
          $('.log3').text(Math.floor(audio.currentTime))
         if ( audio.currentTime > end){
            audio.pause()
            audio.currentTime = end
            clearTimeout(timerId)
        }
        }, 1000)
      }

      var count = 0
      var current = 0
            
      count = items.length

      $('.log1').text(''+ count + ' ' + items[current]['en'])
      $('.log2').text(items[current]['ru'])
    



    $('.btn_prev').click(() => {
        if(current > 0){
            current -= 1
         }else{
            current = count - 1
         }

         $('.log1').text(''+ current + ' ' + items[current]['en'])
         $('.log2').text(items[current]['ru'])
              
        playPart(items[current]['time'][0], items[current]['time'][1])
        $('.log3').text(1)
    })
    
    $('.btn_repeat').click(() => {

        $('.log1').text(''+ current + ' ' + items[current]['en'])
        $('.log2').text(items[current]['ru'])
      
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

        $('.log1').text(''+ current + ' ' + items[current]['en'])
        $('.log2').text(items[current]['ru'])
      
         playPart(items[current]['time'][0], items[current]['time'][1])
        //  $('.log4').text(" " + current + " " +items[current]['time'][0])
         $('.log3').text(3)
    })

})





