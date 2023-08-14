$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let grid = $('.grid')
    let max = 100 * 100

    let squares = []

    let make_grid = () => {
        for(let i = 0; i < max; i++){
            let sq = $('<div></div>')
            sq.addClass('square')
    
            squares.push(sq)
            grid.append(sq)
        }

        squares.forEach((sq) => {
            sq.mouseenter((e) => {
                let d = $(e.target)
                d.addClass('clicked')
                console.log(33)
            })
        })
    
    }

    make_grid()

    log1.text(1)
    log2.text(1)
})