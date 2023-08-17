$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let cdiv = $('.cdiv')
    let notes = d24a02

    notes.forEach((o) => {
        let el_div = $('<div>1</div>')
        let a = $('<a></a>')
        a.text(o.ttitle)
        a.attr('href', o.url)

        el_div.append(a)
        cdiv.append(el_div)
    })



    log1.text(1)
    log2.text(1)
})