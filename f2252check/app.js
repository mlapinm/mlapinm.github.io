$(() => {

    const grid = $('.grid')
    const count = items.length
    let checkedLevel = 0
    let checkedTopic = 0
    let topics = []
    let levels = []

   

    createBoard()

    let text = document.cookie
    let re = /.*cel(\d+)/y
    let match = re.exec(text)

    let idNum = 0
    if(match){
        idNum = match[1]
    }

    $('.log1').text(idNum)
    $('.log2').text(text)

    showContent(78)


    function showContent(num){
        let item = items[num]
        let topic = $('<p></p>')
        topic.addClass("header")
        topic.text(item.topic)
        $(".content").append(topic)


        item.en.forEach((e, i)=>{
            let enLine = $('<p></p>')
            enLine.addClass('en-line')
            enLine.text(e)
            $(".content").append(enLine)
            if(i < item.ru.length){
                let ruLine = $('<p></p>')
                ruLine.addClass('ru-line')
                ruLine.text(item.ru[i])
                $(".content").append(ruLine)
            }


        })


        // $(".content").text(items[num].en)
        // $(".content").text(items[num].ru)
    }

    function createBoard(){
        for( let i = 0; i < count; i++){
            const item = $("<div></div>")
            item.attr("id", "cel" + i)
            item.attr("class", "item")
            let level =$("<div></div>")
            level.attr("class", "level")
            level.attr("data", i)

            const topic =$("<div></div>")
            topic.attr("class", "topic")
            topic.attr("data", i)

            levels.push(level)
            topics.push(topic)


            // item.text(items[i]['level'] + ' ' + items[i]['topic'][0])
            level.text(items[i]['level'] + ' ')
            topic.text(items[i]['topic'][0])
            item.append(level)
            item.append(topic)


            grid.append(item)

            topic.click((e) => {
                let num = $(e.target).attr('data')
                topics[checkedTopic].removeClass('checked')

                topics[Math.floor(num)].addClass('checked')
                checkedTopic = num

                $('.log1').text(num)
                $('.log2').text(topics[checkedTopic].text())
            })

            level.click((e) => {
                let num = $(e.target).attr('data')
                levels[checkedLevel].removeClass('checked')

                levels[Math.floor(num)].addClass('checked')
                checkedLevel = num

                $('.content').html('')
                showContent(num)


            })





           
        }
    }


    // $('.log1').text(count)
})