$(() => {
  $('.log3').text()
  // let num = 33.33
  // $('.log3').text(num.toFixed(6))
    
    
    var audio = $('.audio')[0]
    let timerId = null
    let pause = true
    let current = 0

    startTimer()
    create()

    function create(){
        let items = [
            {
                "num": 33,
                "name": "Space Invaders",
                "link": "https://drive.google.com/uc?export=view&id=19ovhbIW1IjrPEii5hU7UIyXcxxXNYX8T"
              },
              {
                "num": 34,
                "name": "Frogger",
                "link": "https://drive.google.com/uc?export=view&id=1gOkSLgcejuyGBvcFnlGHOnauPsB3kwMj"
              },
              {
                "num": 35,
                "name": "Frogger",
                "link": "https://drive.google.com/uc?export=view&id=1Lhg99esJmW2JjICDqZBbOnlXkgzRORFl"
              },
              {
                "num": 36,
                "name": "Frogger",
                "link": "https://drive.google.com/uc?export=view&id=1fMLdftVGfPM5UfUAVDaHTI5FBCDaFVZ9"
              },
              {
                "num": 37,
                "name": "Frogger",
                "link": "https://drive.google.com/uc?export=view&id=13DrQZ-yHHBBLd5a44VFJL8hC3o5JLwgM"
              },
              {
                "num": 38,
                "name": "Frogger",
                "link": "https://drive.google.com/uc?export=view&id=1KMGkHgYXrTFJLqro3po45y9Ws62LWVui"
              },
              {
                "num": 39,
                "name": "Frogger",
                "link": "https://drive.google.com/uc?export=view&id=15gICND278nhLGwLUm1rpp-I-21sjNgiW"
              },
              {
                "num": 40,
                "name": "Frogger",
                "link": "https://drive.google.com/uc?export=view&id=1xEwwZoT8Kp0xBnDrMbItjwpeSj7K8v65"
              },
              {
                "num": 41,
                "name": "Frogger",
                "link": "https://drive.google.com/uc?export=view&id=1xEwwZoT8Kp0xBnDrMbItjwpeSj7K8v65"
              }
    		]
        let buttons = $('.container_radio')

        let n = 3
        let s = `${n}`.padStart(2, '0')
        $('.which_button').text('k05'.substring(1))

        items.forEach((item) => {
            let but = $('<button></button>')
            let n = item.num
            let name = 'k' + `${n}`.padStart(2, '0')
            but.addClass(name)
            but.text(name)

            buttons.append(but)

            but.click((e) => {
                let ee = $(e.target)
                let name = ee.text()
                let num = parseInt(name.substring(1))
                $('.which_button').text(name)
                let clickItems = items.filter(ec => ec.num == num)
                let clickItem = clickItems[0]

                $('.audio').attr('src', clickItem.link)

                // console.log(clickItem.link)
            })


        })
    }

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
            $('.log3').text('' + current)
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
            appendText(timeToMinut(current) + ' ' + current.toFixed(6))
            audio.pause()

        }
    })

    $('.btn_big_play').click(() => {
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

    $('.btn_big_stop').click(() => {
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
        current = current.toFixed(6)
        // appendText(timeToMinut(current) + ' ' + current)
        navigator.clipboard.writeText(current + ' ')

    });
        


})