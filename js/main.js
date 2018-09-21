$('.this-is-mebel button').click(function(){
    $('.modal-form').addClass('show');
});
$('.go-modal').click(function(){
    $('.modal-form').addClass('show');
});

$('.modal-form .closed').click(function(){
    $('.modal-form').removeClass('show');
});

$(document).mousedown(function (e) {
    var div = $(".modal-form .row");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('html').removeClass('overfloff');
        $('.modal-form').removeClass('show');
    }
});

$('.scroll-weed-everyday').click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href')
        , top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 1000);
});
$('form').on('submit', function(){
    
});