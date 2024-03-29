$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    log1.text('')
    log2.text('')
    let abox = $('.abox')
    let bbox = $('.bbox')
    

    let to_mm_ss = (i) => {
        /* */
        let res = i
        let k = Math.floor(i / 10)
        let mm = Math.floor(k/60)
        let ss = Math.floor(k%60)
        ss = ss.toString()
        ss = ss.length == 1? '0'+ss: ss
        res = `${mm}:${ss}`

        return res
    }

    let ai = 6000
    let bi = 6000
    let asec = ai/10
    let bsec = bi/10
    abox.text(to_mm_ss(ai))
    bbox.text(to_mm_ss(bi))
    let bfirst = false
    let bsecond = false

    bfirst = true


    ai = 6008
    bi = 6008
    let a = 0
    let b = 0
    let abint = 0
    let start = () => {
        abint = setInterval(() => {
            if(bfirst){
                a = Math.floor(ai/10)
                if(asec != a){
                    asec = a
                    abox.text(to_mm_ss(ai))
                }
                ai -= 1
            }
            if(bsecond){
                b = Math.floor(bi/10)
                if(bsec != b){
                    bsec = b
                    bbox.text(to_mm_ss(bi))
                }
                bi -= 1
            }
            let r1 = 5400
            r1 = 0
            if(ai == r1 || bi == r1){
                clearInterval(abint) 
            }

        }, 100)

    }

    // start()

    abox.click(() => {
        bfirst = false
        bsecond = true
        if(abint == 0){
            start()
        }else{
            bi += 1
        }
    })

    bbox.click(() => {
        bsecond = false
        bfirst = true
        if(abint == 0){
            start()
        }else{
            ai += 1
        }
    })


})