
$(() => {
    let log1 = $(".log1")
    let log2 = $(".log2")
    let dbox = $(".dbox")

    // notes = notes.slice(1, 3)
    let q = notes.length

    let create = () => {

        notes.forEach((e, i) => {
            let sp = $("<sp>")
            sp.addClass("sp")
            sp.attr('n', i)
            let t = e.nums.join(' ')
            sp.text(t)
            
            dbox.append(sp)
            dbox.append(' ')

            sp.click((ee) => {
                let e = $(ee.target)
                let n = e.attr('n')
                let t = notes[n].name
                log2.text(t)

            })


        })


    }

    create()

    // dbox.text(3)
    // log1.text(q)
})

