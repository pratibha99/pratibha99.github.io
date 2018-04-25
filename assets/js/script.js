$(document).ready(function()  {

	$('.item').hover(function() { // jQuery Function Number #1
        $(this).find('.img-title').show(); // jQuery Function Number #2
    }, function() {
    $( this ).find( ".img-title" ).remove(); // jQuery Function Number #3
    });



    $('.menuitem').hover(function(){
    	$(this).css('border-color', 'white'); // jQuery Function Number #4
    });

    $('.fa').click(function() { // jQuery Function Number #5
    	$(this).attr("target", "_blank"); // jQuery Function Number #6
    });


})



    
    
    