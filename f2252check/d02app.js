$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let box1 = $('.box1')
    let num = $('.num')
    let box2 = $('.box2')
    let caps = []

function getAbc(abc){
    let symbol0 = Math.floor('A'.charCodeAt(0))
    let symbol26 = Math.floor('Z'.charCodeAt(0))
    while(symbol0 <= symbol26){
        abc.push(String.fromCharCode(symbol0))
        symbol0 += 1
    }
}

function getCaps(a, caps){
    let parts = couples.filter(e => e[0][0] == a.toLowerCase())
    for(let c of parts){
        caps.push(c)
    }
}

function createAbc(){
    let abc = []
    getAbc(abc)
    abc.push('*')

    let alphas = []
    
    for(let a of abc){
        let alpfa = $('<div></div>')
        alpfa.addClass('alpfa')
        alpfa.text(a)
        alphas.push(alpfa)
        box1.append(alpfa)

        alpfa.click((e) => {
            let el = $(e.target)

            for(let el1 of alphas){
                el1.removeClass('selected')
            }
            el.addClass('selected')


            let cap = e.target.innerText
            let caps = []
            getCaps(cap, caps)

            showCaps(caps)
                    })
    }
}

function showCaps(caps){
    box2.empty()
    for(let cap of caps){
        let couple = $('<span></span>')
        couple.addClass('couple')
        let en = $('<span></span>')
        en.addClass('en')
        let ru = $('<span></span>')
        ru.addClass('ru')

        en.text(cap[0]) 
        ru.text(cap[1]) 
        couple.append(en)
        couple.append(' ' )
        couple.append(ru)
        box2.append(couple)

    }
    // box1.append(caps.length)
    num.text(caps.length)
}

createAbc()

getCaps('c', caps)

showCaps(caps)

log2.text()

log1.text()
    // log2.text(3333)
})