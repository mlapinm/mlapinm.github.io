$(() => {
    let log1 = $('.log1')
    let bbox = $('.bbox')
    let items = b14b02
    let afs = b14b04[0].afs
    // items = items.slice(0, 1)
    let set_mbox = (vfs) => {
        let s = vfs.join(' ')
        $('.mbox').text(s)
    }

    let a_table = (items) => {

        let table = $('<table>')
        table.addClass('table')

        items.forEach((e, i) => {
            let tr = $('<tr>')
            let atd = $('<td>')
            let btd = $('<td>')
            let ctd = $('<td>')
            
            atd.text(e.fn)
            let rems = e.rem
            rems.forEach((u, j) => {
                let p = $('<p>')
                p.text(u)
                btd.append(p)
            })
            let tt = `${e.num} ${e.dir} ${e.name}`
            ctd.text(tt)
            // btd.text(e.dir)
            tr.append(atd)
            tr.append(btd)
            tr.append(ctd)
            table.append(tr)
    
        })

        
        return table

    }   
    
    set_mbox(afs)
    let table = a_table(items)
    bbox.append(table)


    log1.text('222')
})