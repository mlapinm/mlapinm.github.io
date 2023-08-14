$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let spbox = $('.spbox')
    spbox.prop('min', 4)
    spbox.prop('max', 10)

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let qu = Number($('.qu').text())
    let pqu = 0
    let iplays = []
    let plays = []

    let get_who = (num) => {
        return alphabet.slice(0, num)
    }


    let get_ipairs = (num) => {

        let res = []
        let ls = []
        for(let i = 0; i < num; i++){
            ls.push(i)
        }
        let als = ls.slice()
        for(let i = 0; i < num; i++){
            let x = als[i]
            let bx = [x, ...als.slice(0, i).concat(als.slice(i+1))]

            for(let j = i + 1; j < num; j++){
                let bls = [x, als[j]]
                res.push(bls)
            }
        }
        return res
    }

    let get_pairs = (icouples) => {
        let res = []
        icouples.forEach((e) => {
            let pair = [alphabet[e[0]], alphabet[e[1]]].join('')
            res.push(pair)
        })
        return res
    }

    let get_iplays = (icouples) => {
        let res = []
        icouples.forEach((ei, i) => {
            icouples.forEach((ej, j) => {
                let couple = [ei, ej]
                if(!(ei.includes(ej[0]) || ei.includes(ej[1])) && i < j){
                    res.push(couple)
                }
            })
        })
        return res
    }

    let get_plays = (iplays) => {
        let res = []
        iplays.forEach((e) => {
            let a = e[0]
            let b = e[1]
            let ab = alphabet[a[0]] + alphabet[a[1]]
            ab += '-'
            ab += alphabet[b[0]] + alphabet[b[1]]
            res.push(ab)
        })
        return res
    }

    let make = (num) => {
        qu = num
        $('.qu').text(qu)
        let who = get_who(qu)
        $('.who').text(who)
        let icouples = []
        icouples = get_ipairs(qu)
        couples = get_pairs(icouples)
        $('.pairs').text(couples.join(' '))
        pqu = icouples.length
        $('.pqu').text(pqu)
    
        iplays = get_iplays(icouples)
        plays = get_plays(iplays)
        $('.plays').text(plays.join(' '))
        let plq = iplays.length
        $('.plq').text(plq)
    }

    make(4)
    spbox.on('input', (e) => {

        let val = spbox.val()
        make(val)

    })



    log1.text(qu)
    log2.text(1)
})