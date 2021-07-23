$(() => {

    const grid = $('.grid')
    const count = items.length
    let checkedId = null


    createBoard()


    function createBoard(){
        for( let i = 0; i < count; i++){
            const item = $("<div></div>")
            item.attr("id", "cel" + i)
            item.attr("class", "item")
            const level =$("<span></span>")
            level.attr("class", "level")
            const topic =$("<span></span>")
            topic.attr("class", "topic")

            item.append(level)
            item.append(topic)

            level.text(items[i]['level'] + ' ')
            topic.text(items[i]['topic'])


            grid.append(item)

            item.click((e) => {
                if(checkedId){
                    $('#' + checkedId).removeClass('checked')
                }
                let id = e.target.id
                $('#' + id).addClass('checked')

                checkedId = id


            })
           
        }
    }


    $('.log1').text(count)
})