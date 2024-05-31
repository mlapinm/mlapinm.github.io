

$(() => {
    let log1 = $(".log1")
    let log2 = $(".log2")
    let dbox = $(".dbox")
    let PIMG = "b34img/"

    console.log(leaves[0])
    let q = leaves.length

    let create = () => {

        for(let i=0; i<q; i++){
            let e = leaves[i]
            let leaf = e.img
            let name = e.name
            let ename = e.ename

            console.log(leaf)

            let block = $("<div>")
            block.addClass("block")
            let img = $("<img>")
            img.addClass("img")
            img.attr("src", PIMG + leaf)

            let p1 = $("<p>")
            let p2 = $("<p>")
            p1.text(name)
            p2.text(ename)

            block.append(img)
            block.append(p1)
            block.append(p2)

            dbox.append(block)
        }

    }


    create()


    log1.text("1")
    log2.text("2")
})

