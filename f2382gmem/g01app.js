$(() => {
  $('.log1').text("01")

  function move(num){
    switch(num){
      case 1:
        $('.move').css('fill', 'green')
        break;
        case 2:
          $('.move').css('fill', 'blue')
          break;
        case 3:
          $('.move').css('fill', 'red')
          break;
        case 4:
          $('.move').css('fill', 'yellow')
          break;
              
    }
    $('.log1').text(num)
    // $('.move').css('fill', 'green')
  }

  $('.up').click(() => {
    move(1)
  })
  
  $('.right').click(() => {
    move(2)
  })
  
  $('.down').click(() => {
    move(3)
  })
  
  $('.left').click(() => {
    move(4)
  })
  
  $('.up').hover (
    function() {
      $('.log1').text(333)
      // $('.description').html($(this).attr('description-data'));
      // $('.description').fadeIn();
    },
    function() {
      $('.log1').text(444)
      // $('.description').fadeOut(50);
    }
  )
    

})





$('.up').hover (
	function() {
    $('.log1').text(333)
		// $('.description').html($(this).attr('description-data'));
		// $('.description').fadeIn();
	},
	function() {
    $('.log1').text(444)
		// $('.description').fadeOut(50);
	}
)
