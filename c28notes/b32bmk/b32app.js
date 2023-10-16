$(() => {
    let log1 = $('.log1')
    let bbox = $('.bbox')
    let items = b32b2310

    let pp = (...attribs) => {
        console.log(...attribs)
    }

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

    let get_bmk = () => {
        items.forEach((e, i) => {
            let p = $('<p>')
            let n = $('<span>')
            n.attr('href', e.href)
            n.addClass('num')
            n.text(i)
            let desc = $('<span>')
            desc.text(e.desc)
            let atitle = $('<span>')
            atitle.text(e.atitle)

            p.append(n)
            p.append(desc)
            p.append(atitle)
            
            bbox.append(p)

            n.click((par) => {
                e = $(par.target)
                let href = e.attr('href')
                pp(12, e, href)
                let win = window.open(href, '_blank')
                if(win){
                    win.focus()
                }
            })

        })
    }

    pp(1, 2)
    get_bmk()

    // table(items)



})