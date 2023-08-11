$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let grid = $('.grid')
    let max = 81
    let maxRow = 9
    let squares = []
    let bcolors = ['#777', '#888', '#999', '#AAA', '#BBB', '#CCC', '#DDD', '#EEE', '#FFF', '#FFF']
    bcolors.reverse()
    let figs = []
    let fig = []
    let numbers = []
    let sfigs = [
        [
            '400050032',
            '010090705',
            '753004196',
            '001070000',
            '609001250',
            '000500613',
            '304008001',
            '000400078',
            '000763029'
        ], 
        [
            '000260000',
            '040003500',
            '807000100',
            '006005302',
            '000009470',
            '700408000',
            '002000000',
            '180370249',
            '000890601'
        ]
    ]

    let get_numbers = (num) => {
        let res = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let r = Math.floor(num / maxRow)
        let c = num % maxRow
        if(fig[r][c] != 0){
            res = [fig[r][c]]
            return res
        }
        let rr = fig[r].filter((e) => e != 0)
        let cc = []
        for(let r = 0; r < maxRow; r++){
            cc.push(fig[r][c])
        }
        cc = cc.filter((e) => e != 0)
        let qu = [Math.floor(r / 3), Math.floor(c / 3)]
        let qq = []
        for(let i = qu[0] * 3; i < qu[0] * 3 + 3; i++){
            for(let j = qu[1] * 3; j < qu[1] * 3 + 3; j++){
                qq.push(fig[i][j])
            }
        }

        qq = qq.filter((e) => e != 0)
        let all = rr.concat(cc).concat(qq)
        all.sort()
        all = [...new Set(all)]
        res = res.filter((e) => !all.includes(e))

        return res
    }

    let get_fig = (sfig) => {
        let res = []
        let q = sfig.length
        for(let i = 0; i < q; i++){
            let s = sfig[i]
            let sq = s.length
            let ls = []
            for(let j = 0; j < sq; j++){
                ls.push(Number(s[j]))
            }
            res.push(ls)
        }
        return res
    }

    let set_figs = () => {
        let q = sfigs.length
        for(let i = 0; i < q; i++){
            let afig = get_fig(sfigs[i])
            figs.push(afig)
        }

        fig = figs[1]
        let k = 0 
        for(let r = 0; r < maxRow; r++){
            for(let c = 0; c < maxRow; c++){
                let num = fig[r][c]
                if(num != 0){
                    squares[k].text(num)
                }

                k += 1
            }
        }


    }


    let tbackground = () => {
        for(let i = 0; i < maxRow; i++){
            squares[i].css('background-color', bcolors[i])
        }
    }

    let check_sq = () => {
        numbers = []
        for(let i=0;i<max;i++){
            let ls = get_numbers(i)
            numbers.push(ls)
            let k = ls.length
            squares[i].css('background-color', bcolors[k])
        }
    }

    let set_btns = (n, ls) => {
        let btns = $('.btns')
        btns.empty()
        ls.forEach((e) => {
            let btn = $('<button></button')
            btn.addClass('btn')
            btn.text(e)
            btns.append(btn)
            btn.click((o) => {
                let e = $(o.target)
                let num = Number(e.text())

                squares[n].text(num)

                let r = Math.floor(n / maxRow)
                let c = n % maxRow

                fig[r][c] = num

                check_sq()


                console.log(num, n)

            })
        })

    }

    let click_square = (n) => {


        let ls = numbers[n]

        let s = ''
        ls.forEach((e) => {
            s += e + ' '
        })
        log1.text(s)

        set_btns(n, ls)

    }


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
                let n = Number(match[1])

                click_square(n)
            })
        })


        // tbackground()
    }

    
    make_grid()
    set_figs()
    check_sq()

})
