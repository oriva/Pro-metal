

$('.go-modal').click(function(){
    $('.modal-form').addClass('show');
    $('.modal-form__data-type').val($(this).html());
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

$('form').on('submit', function(e){
    e.preventDefault();
    var data_info = $(this).serialize();
    var phone = $(this).find('.input--tel');
    if (phone.val().length != 16) {
        alert('Введите номер телефона полностью');
        return false;
    } else {
        $(this).trigger('reset');
        $.ajax({
            type: "POST", //Метод отправки
            url: "/forms/sendmail.php", //путь до php фаила отправителя
            data: data_info,
            success: function () {
                $('.modal-form').removeClass('show');
                $('.success').addClass('show');
                setTimeout(function () {
                    $('.success').removeClass('show');
                }, 2500);
            },
            error: function () {
                $('.modal-form').removeClass('show');
                $('.success').addClass('show');
                setTimeout(function () {
                    $('.success').removeClass('show');
                }, 2500);
            },
        });
    }
});