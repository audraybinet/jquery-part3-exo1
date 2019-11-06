$(function(){
var count = 0;
  $("button").click(function(){
    count++;
    $('#result').val(+count);
  })
})
