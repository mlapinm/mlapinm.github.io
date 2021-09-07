$(() => {
    let log1 = $('.log1')
    let max = tests.length
    let vars = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'K']
    let translate = $('.translate')
    translate.text(testsr[0].asks)

    let k = 0
    for(let e of tests){
        if(k == 0){
            // k += 1
            // continue    
        }

        let quiz = $('<div></div>')
        quiz.addClass('quiz') 
        quiz.attr("data", k)

        let ask = $('<div></div>')
        let span1 = $('<span></span>')
        let span2 = $('<span></span>')
        span1.text('' + (k+1) + ': ')
        span2.text(e.asks[0])
        ask.addClass('ask')

        ask.append(span1)
        ask.append(span2)

        let sentences = $('<div></div>')
        sentences.addClass('sentences')
        for(let s of e.sentence){
            let sentence = $('<div></div>')
            sentence.text(s)
            sentences.append(sentence)
        }
        
        for(let i of e.img){
            let image = $('<img src = "' + i + '.png">')
            image.addClass('image')
            quiz.append(image)
        }

        let listing = $('<div></div>')
        listing.addClass('listing')
        for(let s of e.listing){
            let p = $('<p></p>')
            p.text(s)
            listing.append(p)
        } 
        

        let variants = $('<div></div>')
        variants.addClass('variants')

        let maxVariant = e.variants.length
        let kv = 0
        for(let v of e.variants){

            if(v.length){
                // console.log(e.responses.length)
                let checkBox = $('<input>', {type: "radio", name: "name_"+k})
                if(e.responses.length != 1){
                    checkBox = $('<input>', {type: "checkbox", name: "name_"+k})
                }
                checkBox.addClass('class'+k)
                let variant = $('<div></div>')
                variant.addClass('variant')
                let span1 = $('<span></span>')
                let span2 = $('<span></span>')
                span1.text(" " + vars[kv]+": ")
                span2.text(v)
                variant.append(checkBox)
                variant.append(span1)
                variant.append(span2)
                variants.append(variant)
                kv += 1
            }
        }


        // quiz.append


        quiz.append(ask)
        quiz.append(sentences)
        quiz.append(listing)
        quiz.append(variants)
        quiz.append('<hr>')
        
        $('.container2').append(quiz)

        quiz.click((e) => {
            el = e.target
            while(el.className != 'quiz'){
                el = el.parentElement
            }

            let num = $(el).attr('data')
            num = Math.floor(num)

            let name = e.target.parentElement.className
            if(name == 'ask'){
                translate.html(testsr[num].asks.join('<br>'))
            }else if( name == 'variant'){
                translate.html(testsr[num].variants.join('<br>'))
            }else if( name == 'sentences'){
                translate.html(testsr[num].sentence.join('<br>'))
            } 
        })
        k += 1
    }

    $('.main-footer').click((e) => {

        if($('.main-footer').hasClass('small')){
            $('.main-footer').removeClass('small')
        }else{
            $('.main-footer').addClass('small')
        }
    })




})