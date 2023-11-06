
window.onload = () => {
    
    let date = new Date()
    date.setHours(12, 44, 0)

    let svg = undefined
    let i0 = 1
    let mg = undefined
    let rs = []
    let ys = []

    

    let log1 = document.getElementsByClassName('log1')[0]
    let log2 = document.getElementsByClassName('log2')[0]
    log1.textContent = date.toString().slice(0, 21)
    log2.innerHTML = 22


    const BodyList = [
        'Moon', 'Venus', 'Mars',
        'Jupiter', 'Saturn', 'Sun'
    ];
    let azs = []
    let dls = []
    for (let body of BodyList) {
        let a = []
        a.push(body)
        a.push(0)
        azs.push(a)

        dls.push(undefined)

    }
    

    let latitude = 60
    let longitude = 30
    let elevation = 0
    let observer = new Astronomy.Observer(latitude, longitude, elevation);
    function FormatCoord(x) {
        return x.toFixed(2);
    }

    let set_azs = (vdate) => {
        let k = 0
        for (let body of BodyList) {
            let equ_ofdate = Astronomy.Equator(body, vdate, observer, true, true);
            let hor = Astronomy.Horizon(vdate, observer, equ_ofdate.ra, equ_ofdate.dec, 'normal');
            let az = hor.azimuth
            az = az < 180 ? az + 180 : az - 180
            az = FormatCoord(az)
            azs[k][1] = az
            k += 1
        }
    }

  
    let setTable = (vazs) => {
        let table = document.getElementsByClassName('table')[0]
        table.innerHTML = ''
        let t = document.createElement('table')
        let c0, c1, r
        for(let a of vazs){
            r = t.insertRow()
            c0 = r.insertCell(0)
            c0.innerHTML = a[0]
            c1 = r.insertCell(1)
            c1.innerHTML = a[1]
        }
        table.appendChild(t)
    }

    let init_rs = () => {
        let vrs = [322.49030993194197, 164.92422502470643, 113.9200499375671, 89.44271909999159, 75.47184905645284, 66.66666666666667, 60.743690358483704]
        return vrs.reverse()
    }

    let init_ys = () => {
        let vys = [317.49030993194197, 154.92422502470643, 98.9200499375671, 69.44271909999159, 50.47184905645284, 36.66666666666667, 25.743690358483704]
        return vys.reverse()
    }

    rs = init_rs()
    ys = init_ys()

    let draw_m = (van) => {
        let an = van > 180? 360 - van: van

        let n1 = Math.floor(an / 180 * 14)

        let half = 0 
        if(n1 > 6){
            n1 = 13 - n1
            half = 1
        }
        if(n1 < 0){
            n1 = 0
        }

        // log2.innerHTML = `${an} ${n1}`

        if(mg){
            mg.remove()
        }
        
        if(an == 1){
            r = 40
        } else {
            r = 40
        }
        let r2 = 56.5685424949238
        let cy2 = 16.568542494923797
        let cx = 200
        let cy = 200
        let get_center = (alpha, r) => {
            let rx = 150
            let ry = 150
            let a = alpha * 2 * Math.PI / 360
            rx = r * Math.sin(a)
            ry = r * Math.cos(a)
            return {cx: rx, cy: ry}
        }
        let c = get_center(van, r) 

        cx = c.cx + cx
        cy = -c.cy + cy

        mg = svg.append("g")
        let a = mg.append('circle')
        .style("fill", "yellow")
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', r)

        let bcy = cy + ys[n1]
        let pi = Math.PI

        if(half){
            bcy = cy - ys[n1]

            var arc1 = d3.svg.arc()
            .innerRadius(rs[n1])
            .outerRadius(rs[n1] * 2)
            .startAngle(Math.PI / 2)                               
            .endAngle(Math.PI / 2 + Math.PI) 
    
            let b = mg.append("path")
            .attr("d", arc1)
            .style("fill", "white")
            .attr('transform', `translate(${cx},${bcy})`)

        } else {
            let b = mg.append('circle')
            .style("fill", "white")
            .attr('cx', cx)
            .attr('cy', bcy)
            .attr('r', rs[n1])
        }
    }


    let draw_p = () => {
        let q = BodyList.length
        for(let i=i0;i<q;i++){
            cy = (q-i)*20
            r = 10

            let g = dls[i]
            if(g){
                g.remove()
            }
            g = svg.append("g")
            let a = g.append('circle')
            .style("fill", "yellow")
            .attr('cx', 200)
            .attr('cy', cy)
            .attr('r', 10)
            if(i == 0){
                cy = 160
                r = 40
                a.attr('cy', cy)
                a.attr('r', r)
            }
            if(i == q-1){
                a.style("fill", "blue")
            }
            g.append("text")
            .attr('x', 200)
            .attr('y', cy)
            .attr('text-anchor', 'start')
            .style("font-size", "18px")
            .text(azs[i][0])
            dls[i] = g
        }

    }

    let setSvg = () => {
        svg = d3.select('.bbox')
        .append("svg")
        .attr("width", 400)
        .attr("height", 400)
        .attr("class", "svg")
        .style("border", "solid 1px lightgrey")
        .style("padding", "0px")


        svg.append('circle')
        .attr('cx', 200)
        .attr('cy', 200)
        .attr('r', 190)
        .attr('stroke', 'yellow')
        .attr('fill', 'white')

    }

    let draw = () => {
        draw_m(azs[0][1])
        draw_p()
        let q = dls.length
        for(let i=i0; i<q; i++){
            a = dls[i]
            angle = parseFloat(azs[i][1])
            a.attr('transform', `rotate(${angle}, 200, 200)`)
        }
        // parseFloat()


        // console.log(azs)
    }

    let mnext = (r) => {
        console.log(r)

        date.setDate(date.getDate() + r)
        log2.innerHTML = date.toString().slice(0, 21)
        set_azs(date)
        setTable(azs)
        draw()
    
    }

    let lbtn = document.querySelector(".bprev")
    let rbtn = document.querySelector(".bnext")
    lbtn.addEventListener("click", () => {
        mnext(-1)
    })

    rbtn.addEventListener("click", () => {
        mnext(1)
    })

    setSvg()
    set_azs(date)
    setTable(azs)
    draw()
    

}