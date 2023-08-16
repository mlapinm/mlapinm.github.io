$(() => {
    let log1 = $('.log1')
    let cont_div = $('.cont_div')
    let ds = d22a02
    // ds = ds.slice(0, 2)
    let a0 = ds[0]
    let ewords = []

    let k = 0
    ds.forEach(e => {
        let eword = []
        let el_div = $('<div></div>')
        let above = $('<span></span>')
        let below = $('<span></span>')
        let inp = $('<input type="text">')
        inp.addClass('inp')
        let p = $('<p></p>')
        let ask = $('<span></span>')
        ask.text(e.ask)
        above.text(e.above)
        below.text(e.below)

        let cword = $('<div></div>')
        cword.addClass('cword')
        let q = e.word.length

        for(let i = 0;i < q; i++){
            let sq = $('<div></div>')
            sq.addClass('sq')

            cword.append(sq)
            sq['numm'] = i
            eword.push(sq)
        }
        ewords.push(eword)

        el_div.append(ask)
        el_div.append($('<p></p>'))
        el_div.append(cword)
        el_div.append(above)
        el_div.append(inp)
        el_div.append(below)
        el_div.append(p)
        cont_div.append(el_div)
        if(k % 2){
            el_div.css('background-color', '#efe')
        }
        k += 1
    })

    // console.log(a0)


    log1.text(1)
})