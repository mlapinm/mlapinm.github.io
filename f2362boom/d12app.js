$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let grid = $('.grid')
    let max = 16
    let maxRow = 4
    let row = 0
    let ls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
    let squares = []
    let start = false

    let set_ls = () => {
        for(let i = 0; i < max; i++){
            squares[i].text(ls[i])
            if(ls[i] == 0){
                squares[i].css('color', 'white')
            }else{
                squares[i].css('color', 'black')
            }
        }
    }

    let get_pair = (n) => {
        let r = Math.floor(n / maxRow)
        let c = n % maxRow
        let br = -1
        let bc = -1
        let pts = []
        if(r > 0){
            pts.push([r-1, c])
        }
        if(c < maxRow - 1){
            pts.push([r, c + 1])
        }
        if(r < maxRow -1){
            pts.push([r + 1, c])
        }
        if(c > 0){
            pts.push([r, c - 1])
        }
        let ipts = []
        pts.forEach((e) => {
            ipts.push(e[0] * maxRow + e[1])
        })
        let ni = -1
        ipts.forEach((e) => {
            if(ls[e] == 0){
                ni = e
            }
        })

        // console.log(r, c, ipts, ni)
        if(ni != -1){
            return [n, ni]
        }


    }

    let get_q = () => {
        let bls = []
        ls.forEach((e) => {
                bls.push(e)
        })
        // bls = bls.slice(0, -1)
        let dls = []
        for(let i = 0; i < maxRow; i++){
            let bit = bls.slice(i*maxRow, (i+1)*maxRow)
            if(!(i % 2)){
                dls = dls.concat(bit)
            }else{
                dls = dls.concat(bit.reverse())
            }
        }
        let xls = []
        dls.forEach((e) => {
            if(e != 0){
                xls.push(e)
            }
        })
        dls = xls

        let q = dls.length
        let even = 0
        let odd = 0
        let r = []
        for(let i = 0; i < q - 1; i++){
            for(let j = i + 1; j < q; j++)
            {
                r.push([i, j])
                if(dls[i] < dls[j]){
                    even += 1
                }else{
                    odd += 1
                }
            }
        }

        // console.log(odd, even)
        
        // console.log(dls)
        // console.log(bls)

        return odd
    }


    let make_grid = () => {

        for( let i = 0; i < max; i++){
            let square = $('<div></div>')
            square.addClass('square')

            square.addClass('cell' + i)

            squares.push(square)
            grid.append(square)
        }
        squares.forEach((sq) => {
            sq.click((e) => {
                if(!start){
                    return
                }
                let d = $(e.target)
                let cls = d.attr('class')
                let match = /cell(\d\d?)/.exec(cls)
                let n = match[1]
                let pair = get_pair(n)
                if(pair){
                    let a = pair[0]
                    let b = pair[1]
                    let u = ls[a]
                    ls[a] = ls[b]
                    ls[b] = u
                    set_ls()
                    let k = get_q()
                    $('.prop').text(k)
                }
                // console.log(n, pair)
            })
        })
    }

    make_grid()
    set_ls()
    let k = get_q()
    $('.prop').text(k)

    $('.bstart').click(() => {
        if(!start){
            start = true
            $('.brand').attr('disabled', 'disabled')
            $('.brepl').attr('disabled', 'disabled')
        }
    })


    $('.brand').click(() => {
        log1.text('brand')
        let q = ls.length
        ls = ls.slice(0, -1)
        ls.sort(() => 0.5 - Math.random())
        ls.push(0)
        set_ls()
        let k = get_q()
        $('.prop').text(k)

    })

    $('.brepl').click(() => {
        $('.brepl').css('color', 'bisque')
    })

})