
$('input').css('background',function(){
    return $(this).data('color');
});

$('input').on('click',function(){
    var coltext = $(this).data('color')
    if (checked()){    
        $('.main').css("color", coltext);

    }

    else{

    	$('body').css('background-color',coltext);
        }

});
function checked(){
    return $('#modify-texte').is(':checked');

}

