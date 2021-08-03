$(() => {
    let k = 0
    let display_menu = false
    let items = []
    let checkedItems = []

    function getItems(){
        spls.forEach((v,i) => {
            items.push(v.name)     
        })
    }


    function displayMenu(){
        if(display_menu){
            $(".menu").css("display", "none")
            display_menu = false
        }else{
            $(".menu").css("display", "block")
            display_menu = true
        }
    }


    $(".menu_button").click(() => {
        displayMenu()
    })

    function addMainContent(name){
        let text = '44 '
        $(elms).each((i, v) => {
            text += v.name
        })


        
        $('.main_content').text('33 ' + name + ' 33 ' + text)

    }



    function createMenu(){
        for(let i = 0;i<items.length;i++){
            let item = $("<span></span>")
            item.text(items[i])
            $('.menu_content').append(item)
            item.click((e) => {
                if($(e.target).hasClass('checked')){
                    $(e.target).removeClass('checked')
                    checkedItems.indexOf(e.target.outerText) !== -1 
                    && checkedItems.splice(checkedItems.indexOf(e.target.outerText), 1)
                }else{
                    $(e.target).addClass('checked')
                    checkedItems.push(e.target.outerText)
                    $('.span_all').removeClass('checked')
                }
                $(".menu_header").text(checkedItems)
                if(checkedItems.length == 0){
                    $('.span_all').addClass('checked')
                }
            })
        }
        $('.span_all').click((e) => {
            if($(e.target).hasClass('checked')){
            }else{
                checkedItems = []
                $('.menu_content').children().each((i, e) => {
                    if($(e).hasClass('checked')){
                        $(e).removeClass('checked')
                    }
                })
                $(e.target).addClass('checked')
            }
            $(".menu_header").text(checkedItems)
        })
    }

    getItems()
    display_menu = false
    displayMenu()
    createMenu()
    addMainContent('name1')





    // $('.log1').text(spls[0]['name'])
    // $('.log2').text(elms[1]['name'])
    // $('.log3').text(spls.length)
})