$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let bbox = $('.bbox')

    let create = () => {

        for(let i=0; i<2; i++){
            notes = [].concat(notes, notes)
        }

        notes.forEach((e, i) => {
            let sp = $('<span>')
            sp.addClass('sp')
            sp.text(e.name)

            bbox.append(sp)
            bbox.append(' ')

            sp.click((tar) => {
                let e = $(tar.target)
                let tx = e.text()
                navigator.clipboard.writeText(tx)
                log1.text(tx)
                // console.log(e.text())
            })

        })


    }

    create()

    // log1.text(11)
    // log2.text(2)

})