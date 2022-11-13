 
 
 $("button").click(function(){
    $("ul").slideToggle();
 })

 $(function(){

    $(".box-1 img").fadeOut(5000);

    $(".box-1 img").fadeIn(5000);

    $(".box-2 img").slideUp(5000);

    $(".box-2 img").slideDown(5000);

  
 })

 $(function(){
    $(".box-3 img").animate({
        "margin-left":"400px",
        "opacity":"0",
        "heigth":"30px",
        "width":"30px",
        "margin-top":"50px"},6000);
 })

 $(function(){
    $(".box-4").delay(9000).fadeIn(3000);
 })

 
