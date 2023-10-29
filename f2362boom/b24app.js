
window.onload = () => {
    
    let date = new Date()
    date.setHours(12, 44, 0)
    

    let log1 = document.getElementsByClassName('log1')[0]
    let log2 = document.getElementsByClassName('log2')[0]
    log1.textContent = date
    log2.innerHTML = 22

    const BodyList = [
        'Moon', 'Venus', 'Mars',
        'Jupiter', 'Saturn', 'Sun'
    ];
    let azs = []
    for (let body of BodyList) {
        let a = []
        a.push(body)
        a.push(0)
        azs.push(a)

    }
    let dls = []

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

    let setSvg = () => {
        let svg = d3.select('.bbox')
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

        let q = BodyList.length
        for(let i=0;i<q;i++){
            cy = (q-i)*20
            r = 10
            let g = svg.append("g")
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
            dls.push(g)
        }
    }

    let draw = () => {
        let q = dls.length
        for(let i=0; i<q; i++){
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
        log2.innerHTML = date
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