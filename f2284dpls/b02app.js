$(() => {
    let k = 0
    let display_menu = false
    let items = []
    let checkedItems = []

    function getItems(){
        elms.forEach((v,i) => {
            v.tags.forEach((v2, i2) => {
                if(items.indexOf(v2) < 0 && v2.length>0){
                    items.push(v2)     
                }
            })
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

    function addMainContent(tags){
        let supplies = []
        let text = ''
        tags.forEach((tag, i) => {  //
            $(elms).each((i, v) => {
                if(v.tags.indexOf(tag)>=0){
                    if(supplies.indexOf(v.name)<0){
                        supplies.push(v.name)
                    }
                }
            })
        })
        if(tags.length == 0){

            $(spls).each((i, v) => {
                supplies.push(v.name)
            })
        }    
        $('.main_content').empty();
        let spl = null
        let elm = null
        supplies.forEach((v,i) => {
            spl = null
            elm = null
            let item = $("<div></div>")
            item.addClass('bordered')
            $(spls).each((is, vs) => {
                if(v == vs.name){
                    spl = vs
                }
            })
            $(elms).each((ie, ve) => {
                if(v == ve.name){
                    elm = ve
                }
            })
            text = ''
            if(spl){
                text += spl.quanity + ' '
                text += spl.box + ' '
                text += spl.name + ' '
            }
            if(elm){
                // text += elm.name + ' '
                text += elm.description + ' '
            }
            item.text(text)
            $('.main_content').append(item)
        })
    }



    function createMenu(){
        for(let i = 0;i<items.length;i++){
            let item = $("<span></span>")
            item.text(items[i])
            $('.menu_content').append(item)
            $('.menu_content').append(' ')
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
                $(".menu_header").text(checkedItems.join(' '))
                if(checkedItems.length == 0){
                    $('.span_all').addClass('checked')
                }
                addMainContent(checkedItems)
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
            $(".menu_header").text(checkedItems.join(' '))
            addMainContent(checkedItems)
        })
    }

    getItems()
    display_menu = false
    displayMenu()
    createMenu()
    addMainContent([])



    // $('.log1').text(spls[0]['name'])
    // $('.log2').text(elms[1]['name'])
    // $('.log3').text(spls.length)
})