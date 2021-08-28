$(() => {

    const grid = $('.grid')
    const count = items.length
    let checkedLevel = 0
    let checkedTopic = 0
    let topics = []
    let levels = []
    let quantity = $('.quantity')

   

    createBoard()


    showContent(0)


    function showContent(num){
        let item = items[num]
        let topic = $('<p></p>')
        topic.addClass("header")
        topic.text(num + ' ' + item.level + ' ' + item.topic +
        ' (' + item.en.length + ')')
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


    }



    // cookieSave(2)
    // cookieClear()
    // cookieRead()

    function cookieSave(name){
        document.cookie = 'key1=' + name + ';'
    }

    function cookieRead(){
        let mCookie = '0'
        let text = document.cookie
        let re = /key1=(\d+)/
        let match = re.exec(text)
        if( match){
            mCookie = match[1]
        }
        return mCookie
    }

    function cookieClear(){
        document.cookie = 'key1=333;' + 'expires=Mon, 05 Jul 1982 16:37:55 GMT;'
    }

    function mFullItem(mItem){
        let full = false
        // let l = mItem.en
        let keys = Object.keys(mItem)
        if(keys.includes('en')){
            let ens = mItem.en
            if( ens.length > 2 ){
                let len = 0
                len += ens[0].trim().length
                len += ens[1].trim().length
                len += ens[2].trim().length
                if (len > 5){
                    full = true
                }
            }
        }

        return full
    }

    function createBoard(){
        let cookieNum = cookieRead()
        console.log(cookieNum)
        $('.log1').text(cookieNum)
        let vQuantity = 0
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


            level.text(items[i]['level'] + ' ')
            if (mFullItem(items[i])){
                level.addClass('rounded')
                vQuantity += 1
            }
            topic.text(items[i]['topic'][0])
            item.append(level)
            item.append(topic)


            grid.append(item)
            if( i == cookieNum){
                $('.log2').text(topics[cookieNum].text())
                topics[cookieNum].addClass('checked')
                checkedTopic = cookieNum
            }

            topic.click((e) => {
                let num = $(e.target).attr('data')
                topics[checkedTopic].removeClass('checked')

                topics[Math.floor(num)].addClass('checked')
                checkedTopic = num

                $('.log1').text(num)
                $('.log2').text(topics[checkedTopic].text())
                cookieSave(num)
            })

            level.click((e) => {
                let num = $(e.target).attr('data')
                num = Math.floor(num)
                if(!mFullItem(items[num])){
                    return
                }
                levels[checkedLevel].removeClass('checked-level')

                levels[Math.floor(num)].addClass('checked-level')
                checkedLevel = num

                $('.content').html('')
                showContent(num)

            })
        }
        quantity.text(vQuantity)
}


})