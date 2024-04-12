$('#first').focus()
$('input').focus(function(){
    $(this).css('background-color', '#efefef')
})
$('input').blur(function(){
    $(this).css('background-color', 'white')
})
$('.myclass').click(function() { $(this).slideUp() });
$(document).keypress(function(event){
    key= String.fromCharCode(event.which)
    if(key >= 'a' && key <= 'z' ||
        key >= 'A' && key <= 'Z' ||
        key >= '0' && key <= '9')
    {
        $('#result').html("You pressed : " + key)
        event.preventDefault();
    }
})
