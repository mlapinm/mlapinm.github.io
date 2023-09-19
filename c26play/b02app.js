$(() => {
    let log1 = $('.log1')
    let log4 = $('.log4')
    let mbox = $('.mbox')
    let numm = 0
    let opl = {}
    let its = d02b02d
    its = its.filter((e) => e.src != "")
    let q = its.length



    for(let i=0; i<q; i++){
        let sp = $('<span></span> ' + '\n')
        sp.addClass('sp')
        sp.attr('numm', i)
        sp.text(i + 1)

        
        mbox.append(sp)
        mbox.append(' ')

        sp.click((e) => {
            t = $(e.target)
            numm = t.attr('numm')

            set_opl(its[numm])
            log1.text(`${numm} ` + its[numm]['atitle'])
            player.src(opl)
            player.play()

        })
    }
    
    let set_opl = (oo) => {
        opl.src = oo.src
        opl.type = oo.type
    }

	var options = {};

    var player = videojs('cVideo', options, function onPlayerReady() {
        videojs.log('Your player is ready!');
      
        // In this context, `this` is the player that was created by Video.js.
      //   this.play();
      
        // How about an event listener?
        this.on('play', function() {
          videojs.log('Awww...over so soon?!');
          console.log('play', numm)
        });
        player.on('loadeddata', function () {
          console.log('Video Player Data Loaded', numm);
          log4.val(log4.val() + numm + ' ')
        })      
    });


   
    let timer1 = () => {
        let itimer = setInterval(() => {
            console.log(numm)

            if(numm == q){
                clearTimeout(itimer)
            }

            set_opl(its[numm])
            player.src(opl)
            player.play()

            numm += 1
        }, 4000)
    } 

    $('.bstart').click(() => {
        timer1()
    })
      

    // set_opl(b02b04d[1])
    // player.src(opl)

    // timer1()   
    



})
