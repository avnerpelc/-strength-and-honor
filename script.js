$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.logo-imagem').addClass("logo-imagem-visivel");
            $('.logo-texto').addClass("logo-imagem-texto");
        }else{
            $('.navbar').removeClass("sticky");
            $('.logo-imagem').removeClass("logo-imagem-visivel");
            $('.logo-texto').removeClass("logo-imagem-texto");
        }
    });

     var typed = new Typed(".typing", {
         strings:["Jiu-Jitsu Brazilian", "Self-Defense", "Judo"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Righteousness", "Loyalty","Honor","Respect","Honesty","Courage ","Consistency" ],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});