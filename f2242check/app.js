$(() => {

    const grid = $('.grid')
    const count = items.length
    let checkedId = null

   

    createBoard()

    let text = document.cookie
    let re = /.*cel(\d+)/y
    let match = re.exec(text)

    let idNum = 0
    if(match){
        idNum = match[1]
        $('.log2').text(idNum)
    }
    $('#cel' + idNum).addClass('checked')
    $('.log2').text('#cel' + idNum)
    checkedId = "cel" + idNum

    text = $("#cel" + idNum).text()
    $('.log1').text(idNum + ' ' + text)



    function createBoard(){
        for( let i = 0; i < count; i++){
            const item = $("<div></div>")
            item.attr("id", "cel" + i)
            item.attr("class", "item")
            const level =$("<span></span>")
            level.attr("class", "level")
            const topic =$("<span></span>")
            topic.attr("class", "topic")

            // item.append(level)
            // item.append(topic)

            item.text(items[i]['level'] + ' ' + items[i]['topic'][0])
            level.text(items[i]['level'] + ' ')
            topic.text(items[i]['topic'][0])


            grid.append(item)





            item.click((e) => {
                // $.cookie('cookie_name', 'cookie_value')
                // document.cookie('test', 'test value', 2);

                // document.cookie = 'cel10; expires=Mon, 05 Jul 1982 16:37:55 GMT;'

                if(checkedId){
                    $('#' + checkedId).removeClass('checked')
                }
                let id = e.target.id
                // document.cookie = id
                $('.log2').text(id)
                $('#' + id).addClass('checked')

                let idNum = 0
                re = /cel(\d+)/y
                let match = re.exec(id)
                if(match){
                    idNum = match[1]
                }
            
                let text = $("#" + id).text()
                $('.log1').text(idNum + ' ' + text)

                checkedId = id

                document.cookie = 'key1='+ id + "cel;"

            })
           
        }
    }


    // $('.log1').text(count)
})