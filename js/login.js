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
canvas  = $('#pad')[0]
context = canvas.getContext("2d")
pendown = false
$('#pad').mousemove(function(event)
{
    var xpos = event.pageX - canvas.offsetLeft
    var ypos = event.pageY - canvas.offsetTop
    if (pendown) context.lineTo(xpos, ypos)
    else         context.moveTo(xpos, ypos)
    context.stroke()
})
$('#pad').mousedown(function() { pendown = true  } )
$('#pad')  .mouseup(function() { pendown = false } )
