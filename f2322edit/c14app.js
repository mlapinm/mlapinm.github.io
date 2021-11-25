$(() => {
    let log1 = $('.log1')
    let edit = $('.edit')
    let button1 = $('.button1')
    let timer = 0

    function append(text1){
        navigator.clipboard.readText().then(clipText => {

            // edit[0].value += '\n' + clipText + '\n'
            // let el = edit[0]
            // el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px";
    
        })

    }

    button1.click(()=>{
        text = button1.text()
        if(text == 'Stop'){
            clearInterval(timer)


            button1.text('Start')
        }else{
            timer = setInterval(
                () => {
                   append(555)
                } 
                ,
                1500
              );
        
            button1.text('Stop')
        }


        
    })

    timer = setInterval(
        () => {
           append(555)
        } 
        ,
        1500
      );



    append(555)
    append(555)
    





    log1.text('321')

})