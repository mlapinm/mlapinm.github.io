$(() => {
    $('.log1').text(1)
    $('.log2').text(objs[1]['time'][0])
    $('.log3').text(3)
    let items = [ 0, 3, 12, 24, 30 ]
    let max = items.length
    let maxTime = items[items.length-1]   
    let currentTime = 0
    let current = 0
    let currentPrev = 0

    reShow()

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
            $('.line1').text(items[current-2])
        }else{
            $('.line1').text('')
        }
        if(current-1>=0){
            $('.line2').text(items[current-1])
        }else{
            $('.line2').text('')
        }
        $('.line3').text(items[current])
        if(current+1<max){
            $('.line4').text(items[current+1])
        }else{
            $('.line4').text('')
        }
        if(current+2<max){
            $('.line5').text(items[current+2])
        }else{
            $('.line5').text('')
        }

    }
    
    $('.btn_toward').click(() => {
        currentTime = currentTime < maxTime-1 ? currentTime+1 : currentTime
        current = getCurrent()
        show()

        $('.log1').text(currentTime)
    })

    $('.btn_back').click(() => {
        currentTime = currentTime > 0 ? currentTime-1 : currentTime
        current = getCurrent()
        show()

        $('.log1').text(currentTime)
    })

})