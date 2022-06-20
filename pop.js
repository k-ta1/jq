$(function() {
    $('.contents-list li').on('click',function(){
        var $contentsName = $(this).attr('class').split(' ')[1];
        var $contentsName = '.' + $contentsName + '-pop';
        $($contentsName).addClass('show').fadeIn();
        $('.pop-overlay').addClass('show').fadeIn();
        $('.o-pop-close').on('click',function(){
        $($contentsName).fadeOut();
        $('.pop-overlay').fadeOut();
    });
});
});

/* 以前のコード

$('.contents-anima').on('click',function(){
    $('.pop-anima-wrapper').addClass('show').fadeIn();
    $('.pop-overlay').addClass('show').fadeIn();6
});
$('.close').on('click',function(){
    $('.pop-anima-wrapper').fadeOut();
    $('.pop-overlay').fadeOut();    
});

$('.contents-liliylogo').on('click',function(){
    $('.pop-liliylogo-wrapper').addClass('show').fadeIn();
    $('.pop-overlay').addClass('show').fadeIn();6
});
$('.close').on('click',function(){
    $('.pop-liliylogo-wrapper').fadeOut();
    $('.pop-overlay').fadeOut();    
});

$('.contents-liliy').on('click',function(){
    $('.pop-liliy-wrapper').addClass('show').fadeIn();
    $('.pop-overlay').addClass('show').fadeIn();6
});
$('.close').on('click',function(){
    $('.pop-liliy-wrapper').fadeOut();
    $('.pop-overlay').fadeOut();    
});

$('.contents-kanmi').on('click',function(){
    $('.pop-kanmi-wrapper').addClass('show').fadeIn();
    $('.pop-overlay').addClass('show').fadeIn();6
});
$('.close').on('click',function(){
    $('.pop-kanmi-wrapper').fadeOut();
    $('.pop-overlay').fadeOut();    
});

$('.contents-cocoda').on('click',function(){
    $('.pop-cocoda-wrapper').addClass('show').fadeIn();
    $('.pop-overlay').addClass('show').fadeIn();6
});
$('.close').on('click',function(){
    $('.pop-cocoda-wrapper').fadeOut();
    $('.pop-overlay').fadeOut();    
});

*/