$(() => {
  $('.log1').text("01")
  
  $('.up').click(() => {
    $('.log1').text(1)
  })
  
  $('.right').click(() => {
    $('.log1').text(2)
  })
  
  $('.down').click(() => {
    $('.log1').text(3)
  })
  
  $('.left').click(() => {
    $('.log1').text(4)
  })
  

})





$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(50);
	}
)
