//Phone
$(function () {
    $('.input--tel').mask('+7(999)999-99-99');

    $('.input--tel').on('focus', function () {
        if ($(this).val().length === 0) {
            $(this).val('+7(');
        }
    });
    $('.input--tel').on('focusout', function () {
        if ($(this).val().length <= 4) {
            $(this).val('');
        }
    });

    $('.input--tel').keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }

        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

$('.this-is-mebel button').click(function(){
    $('.mebel-form').addClass('show');
    $('.mebel-form__name').html($(this).parents().eq(2).find('span.name').html());
    $('.mebel-name').val($(this).parents().eq(2).find('span.name').html());
    $('.mebel-form__price-data').html($(this).parents().eq(2).find('.price-data').html());
    $('.mebel-price').val($(this).parents().eq(2).find('.price-data').html());
    $('.mebel-form__pic').attr('src', '../img/1px.jpg');
    $('.mebel-form__pic').attr('src', $(this).parents().eq(2).find('img').attr('src'));
});
$('.mebel-form .closed').click(function(){
    $('.mebel-form').removeClass('show');
});

$('.success .closed').click(function(){
    $('.success').removeClass('show');
});

$('.mebel-form__main').on('submit', function(e){
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
            url: "/forms/sendmebel.php", //путь до php фаила отправителя
            data: data_info,
            success: function () {
                $('.mebel-form').removeClass('show');
                $('.success').addClass('show');
                setTimeout(function () {
                    $('.success').removeClass('show');
                }, 2500);
            },
            error: function () {
                $('.mebel-form').removeClass('show');
                $('.success').addClass('show');
                setTimeout(function () {
                    $('.success').removeClass('show');
                }, 2500);
            },
        });
    }
});


$('.mebel-form__main .arrow').on('click', function () {
    var count = $('.mebel-form__count-data label');
    if($(this).hasClass('left')&&count.html()>2){
        count.html(count.html() - 1);
    } else if($(this).hasClass('right')) {
        count.html(parseInt(count.html()) + 1);
        $('.mebel-form__main .left').removeClass('disable');
    } else if($(this).hasClass('left')&&count.html()==2){
        count.html(count.html() - 1);
        $('.mebel-form__main .left').addClass('disable');
    }
    $('.mebel-count').val(count.html());
});