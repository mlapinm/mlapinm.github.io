$(document).ready(()=>{


    $(()=>{
        $('article h4').click(()=>{
            $('article h4').next().slideToggle();
        })
    })

    $('h3').click(()=>{
        $('h3').next().slideToggle(1000)
        console.log($(this))
    })

})

