$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let grid = $('.grid')
    let max = 36
    let maxRow = 6
    let squares = []
    let nonesqures = []
    let doms = []

    let get_paire = (n) => {
        let res = []
        let bdoms = []
        doms.forEach((e) => {
            bdoms = bdoms.concat(e)
        })
        if(bdoms.includes(n)){
            let k = bdoms.indexOf(n)
            if(k % 2 == 0){
                res = [k, ]
            }
            let p = k % 2 == 0  ? [k, k + 1] : [k - 1, k]
            res = [bdoms[p[0]], bdoms[p[1]]]
        }
        return res
    }



    let click_square = (n) => {
        let n1 = n + 1
        let bdoms = []
        doms.forEach((e) => {
            bdoms = bdoms.concat(e)
        })
        console.log(n, bdoms)
        if(nonesqures.includes(n)){
            return
        }
        let r = Math.floor(n / maxRow)
        let c = n % maxRow
        if(c < maxRow - 1 && n != 4){
            let a = squares[n]
            let b = squares[n + 1]
            if(a['cl'] == 0 && b['cl'] == 0 && !bdoms.includes(n) && !bdoms.includes(n1)){
                doms.push([n, n + 1])
                squares[n].css('border-top-left-radius', '0.25rem')
                squares[n].css('border-bottom-left-radius', '0.25rem')
                squares[n + 1].css('border-top-right-radius', '0.25rem')
                squares[n + 1].css('border-bottom-right-radius', '0.25rem')
                squares.forEach( e => {
                    e.css('border-color', 'black')
                    e['cl'] = 0
                })
                a['cl'] += 1
                b['cl'] += 1
            }else if(a['cl'] == 1){
                let mn = get_paire(n)
                mn.forEach(e => {
                    squares[e].css('border-color', 'cadetblue')
                    squares[e]['cl'] += 1
                })
                // console.log(mn)
            }else if(a['cl'] == 2){
                let mn = get_paire(n)
                // console.log(mn, is, doms.indexOf(mn), doms, typeof(doms[0][0]))
                mn.forEach(e => {
                    squares[e].css('border-color', 'black')
                    squares[e].css('border-radius', '0px')
                    squares[e]['cl'] = 0
                })
                let idel = doms.findIndex(e => e[0] == mn[0] && e[1] == mn[1])
                if(idel != -1){
                    // doms.remove(idel)
                    doms = doms.filter(e => !(e[0] == mn[0] && e[1] == mn[1]))
                }


            }

        }

    }   

    let make_grid = () => {
        // console.log([1,2].findIndex(1))
        for(let i = 0; i < max; i++){
            let square = $('<div></div>')
            square.addClass('square')
            square.addClass('cell' + i)
            square['cl'] = 0
            squares.push(square)
            grid.append(square)
        }
        nonesqures.push(maxRow - 1)
        nonesqures.push(max - maxRow)
        nonesqures.forEach((i)=>{
            squares[i].addClass('nonesqures')
        })
        squares.forEach((sq) => {
            sq.click((e) => {
                let d = $(e.target)
                let cls = d.attr('class')
                let match = /cell(\d\d?)/.exec(cls)
                let n = Number(match[1])

                click_square(n)
            })
        })
    }


    make_grid()
    // add_dom(1, 0)
              

    log1.text(1)
    log2.text(1)
})