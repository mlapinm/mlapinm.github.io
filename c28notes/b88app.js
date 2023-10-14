$(() => {
    let log1 = $('.log1')
    let bbox = $('.bbox')
    let items = b88b02

    let table = (items) => {
        let tb = $('<table>')
        let ents = Object.entries(items[0])
        let tr = $('<tr>')
        let vtr = tr
        ents.forEach((e) => {
            let td = $('<td>')
            td.text(e[0])
            tr.append(td)
        })

        tb.append(tr)
        items.forEach((e, i) => {
            let tr = $('<tr>')
            let ents = Object.entries(e)
            ents.forEach((e) => {
                let td = $('<td>')
                td.text(e[1])
                tr.append(td)
            })
            tb.append(tr)
    
        })
        bbox.append(tb)
    }

    table(items)


})