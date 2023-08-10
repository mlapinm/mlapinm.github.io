$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let grid = $('.grid')
    let max = 36
    let maxRow = 6
    let squares = []

    let make_grid = () => {
        for(let i = 0; i < max; i++){
            let square = $('<div></div>')
            square.addClass('square')
            square.addClass('cell' + i)
            squares.push(square)
            grid.append(square)
        }
        squares.forEach((sq) => {
            sq.click((e) => {
                let d = $(e.target)
                let cls = d.attr('class')
                let match = /cell(\d\d?)/.exec(cls)
                let n = match[1]

                console.log(n)
            })
        })
    }

    let add_dom = (n, t) => {
        let dom = $('<div></div>')
        dom.addClass('hf')
        squares[n].before(dom)
        dom.append(squares[n])
        dom.append(squares[n + 1])
        squares[n].css('display', 'none')
        squares[n + 1].css('display', 'none')
        dom.css('border', 'solid 1px')
    

    }

    make_grid()
    add_dom(1, 0)
              

    log1.text(1)
    log2.text(1)
})