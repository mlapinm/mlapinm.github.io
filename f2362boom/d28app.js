$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let bbox = $('.bbox')
    let cbox = $('.cbox')
    let dbox = $('.dbox')
    let bbs = []

    let get_sum_bbs = () => {
        let res = 0
        bbs.forEach((n, i) => {
            e = notes[n]
            res += e.price
        })
        return res
    }

    let get_k_bbox = (el) => {
        let k = 0
        let prev = el
        while(1){
            prev = prev.prev()

            if(!prev.hasClass('line')){
                break
            }
            k += 1
        }
        return k
    }


    let add_bbox = (n) => {
        bbs.push(n)
        let note = notes[n]
        let line = $('<div>')
        line.addClass('line')
        line.attr('n', n)
        let name = $('<div>')
        name.addClass('name')
        let price = $('<div>')
        price.addClass('price')
        name.text(note.name)
        price.text(note.price)

        line.append(name)
        line.append(price)
        bbox.append(line)

        let bsum = get_sum_bbs()
        cbox.text(bsum)

        price.click((tar) => {
            let e = $(tar.target)
            let pe = e.parent()
            let n = pe.attr('n')
            let k = get_k_bbox(pe)
            log2.text(k)
            bbs.splice(k, 1)
            pe.remove()

            console.log(bbs)

        })
    }

    let create = () => {

        for(let i=0; i<2; i++){
            notes = [].concat(notes, notes)
        }

        notes.forEach((e, i) => {
            let sp = $('<span> ')
            sp.text(e.name)
            sp.attr('n', i)

            dbox.append(sp)
            dbox.append(' ')

            sp.click((t) => {
                let e = $(t.target)
                let n = Number(e.attr('n'))
                add_bbox(n)
                
            })
        })

    }

    create()
    add_bbox(0)
    add_bbox(1)
    add_bbox(2)

    // log1.text(1)
    // log2.text(2)

    // console.log(notes[0])

})

