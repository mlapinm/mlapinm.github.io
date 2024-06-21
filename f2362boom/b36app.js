$(() => {
    let log1 = $('.log1')
    let log2 = $('.log2')
    let dbox = $('.dbox')
    let svg = undefined
    let g_north = undefined
    let p_north = undefined

    let setSvg = () => {
        svg = d3.select('.dbox')
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
        svg.append('circle')
        .attr('cx', 195)
        .attr('cy', 10)
        .attr('r', 10)
        .attr('stroke', 'yellow')
        .attr('fill', 'white')
    }

    let draw = () => {


        if(p_north){
            p_north.remove()
        }

        let data = [
            {x: 180, y: 370},
            {x: 220, y: 370},
            {x: 200, y: 20}
        ]

        var line = d3.svg.line()
        .x(function(d){return d.x;})
        .y(function(d){return d.y;}); 

        p_north = svg.append("path")
        p_north.attr("d", line(data))
        .style("fill", "blue")



        let angle = 90

        let date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        let t = h + m / 60

        log1.text(h + ' ' + m + ' ' + t)
        angle = 360 - (t * 15)

        p_north.attr('transform', `rotate(${angle}, 200, 200)`)

    }
    
    let create = () => {

        setSvg()
        draw()

        // log1.text(1)
        // log2.text(2)
    }

    create()

})