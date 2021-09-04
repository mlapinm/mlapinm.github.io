$(() => {
    let log1 = $('.log1')
    let max = tests.length
    let vars = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'K']

    let k = 0
    for(let e of tests){
        if(k == 0){
            // k += 1
            // continue    
        }

        let ask = $('<div></div>')
        let span1 = $('<span></span>')
        let span2 = $('<span></span>')
        span1.text('' + (k+1) + ': ')
        span2.text(e.asks[0])
        ask.addClass('ask')

        ask.append(span1)
        ask.append(span2)
        

        let variants = $('<div></div>')
        ask.addClass('variants')

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




        $('.container2').append(ask)
        $('.container2').append(variants)
        $('.container2').append('<hr>')
        




        // console.log(maxVariant)
        k += 1
    }





    log1.text(max)
    log1.append(max)

})