$(() => {
    let log1 = $('.log1')
    let bbox = $('.bbox')
    let ww = 20
    let hh = 6
    let wr = 24
    let io = ""

    let pp = (...arguments) => {
        //print console.log
        // pp(1, 2, 3, 'aa')
        console.log(...arguments)
    }

    let aio = [
         "0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0",
        "0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0",
       "0 0 0 0 0 0 0 0 0 1 1 0 0 0 1 0 0 0 0 0",
      "0 0 0 0 0 0 1 1 0 1 0 1 0 0 0 1 0 0 0 0",
     "0 0 0 1 1 0 1 0 1 0 1 1 0 0 0 0 0 0 0 0",
    "1 1 0 1 0 1 0 1 0 1 0 1 0 0 0 0 0 0 0 0",
   "1 0 0 0 1 0 1 0 1 1 0 0 0 0 0 0 0 0 0 0",
  "0 1 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
 "0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
    ]

    let get_field = (io) => {
        let a = io[0]
        pp(a.split(' ').join('').length)
        io = io.join(' ')
    
        let ls = io.split(' ')
        io = ls.join('')
        return io
    }
    let afield = get_field(aio)
    let asvg = d3.select('.abox')
    .append("svg")
    .attr("width", 400)
    .attr("height", 300)
    .attr("class", "svg")
    .style("border", "solid 1px lightgrey")
    .style("padding", "10px")


    io = [
         "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
        "0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 1 1 1 0",
       "0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 0",
      "0 1 0 0 0 1 0 1 0 1 0 1 0 0 1 1 0 1 0 0",
     "0 0 1 1 0 1 0 1 0 0 1 1 0 0 0 1 0 1 0 0",
    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
    ]
    let field = get_field(io)
    i = 3
    let rects = []

    let svg = d3.select('.bbox')
    .append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .attr("class", "svg")
    .style("border", "solid 1px lightgrey")
    .style("padding", "10px")

    let bsvg = d3.select('.cbox')
    .append("svg")
    .attr("width", 400)
    .attr("height", 250)
    .attr("class", "svg")
    .style("border", "solid 1px lightgrey")
    .style("padding", "10px")

    let dsvg = d3.select('.dbox')
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .attr("class", "svg")
    .style("border", "solid 1px lightgrey")
    .style("padding", "10px")

    let fsvg = d3.select('.fbox')
    .append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .attr("class", "svg")
    .style("border", "solid 1px lightgrey")
    .style("padding", "10px")

    
    let mrect = (x=0, y=0, awr=wr, fill="#eee", psvg=svg) => {

        var rect = psvg.append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", awr) 
        .attr("height", awr) 
        .style("fill", fill)
        .style("stroke", "#666666")
        .style("stroke-width", 0.5);
        return rect
    }

    let mwhrect = (x=0, y=0, awr=wr, ahr=wr, fill="#eee", psvg=svg) => {

        var rect = psvg.append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", awr) 
        .attr("height", ahr) 
        .style("fill", fill)
        .style("stroke", "#666666")
        .style("stroke-width", 0.5);
        return rect
    }

    let draw = (s, rects) => {
        ls = s.split('')
        ls.forEach((e, i) => {
            if(e == 1){
                rects[i].style("fill", "#aaa")
            }
        })
    }

    let create = (vsvg, hh=6) => {

        let rects = []
        for(let y = 0; y < hh; y++){
            for(let x = 0; x < ww; x++){
                let rect = mrect((hh - y) * 0.5 * wr 
                + x * wr, y * wr, awr=wr, fill="#eee", psvg=vsvg)
                rects.push(rect)
            }
        }
        return rects
    }

    let bcreate = () => {
        let hh = 3
        let ww = 8
        let aw = 48
        let bw = 8
        let af = "#eee"
        let bf = "#ddd"
        let dfig = (x, y) => {
            mrect(x, y, aw, af, bsvg)
            mrect(x + aw, y, bw, bf, bsvg)  
        }

        for(let y = 0; y < hh; y++){
            for(let x = 0; x < ww; x++){
                x1 = bw * (hh - y) + x * aw
                y1 = y * aw + x * bw
                dfig(x1, y1)
            }
        }
    }

    let dcreate = () => {
        let hh = 3
        let ww = 8
        let aw = 8
        let ah = 24
        let bw = 8
        let af = "#eee"
        let bf = "#ddd"
        let dfig = (x, y) => {
            mwhrect(x, y, aw, ah, af, dsvg)
            mwhrect(x+aw, y, ah, aw, af, dsvg)
            
            // mwhrect(x + aw, y, bw, aw, bf, dsvg)  
        }
        ww = 16
        hh = 12
        for(let y = 0; y < ww; y++){
            for(let x = 0; x < hh; x++){
                x1 = x * (ah + aw) + y * aw
                // x1 = 0
                y1 = (hh - x) * (ah - aw)  + ah + y * aw
                // console.log(x1)

                dfig(x1, y1)
            }
        }
    }

    let fcreate = () => {
        let hh = 3
        let ww = 8
        let ah = 24
        let aw = 8
        aw = ah / 3
        let bw = 8
        let af = "#eee"
        let bf = "#ddd"

        let dfig = (x, y, ch=0) => {
            let bch = ch == 0 ? 1 : 0
            let nk = ah / aw
            for(let u = 0; u < nk; u++){
                let a = ch * ah
                let b = bch * ah
                mwhrect(x + aw * u + a, y, aw, ah, af, fsvg)
                mwhrect(x + b, y + aw * u, ah, aw, af, fsvg)

            }
            
        }
        ww = 10
        hh = 6
        for(let y = 0; y < hh; y++){
            for(let x = 0; x < ww; x++){

                // x1 = x * 2 * ah + ah * (y % 2)
                x1 = x * 2 * ah
                // x1 = 0
                y1 = y * ah
                // console.log(x1)

                dfig(x1, y1, y%2)
            }
        }
    }



    let arects = []
    arects = create(asvg, 9)
    draw(afield, arects)

    rects = create(svg, 6)
    draw(field, rects)

    bcreate()
    dcreate()
    fcreate()

    log1.text('22')
})
