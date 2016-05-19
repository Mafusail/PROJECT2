$(document).ready(function() {

    /*validate form*/

    $("#loginform").validate({

        rules: {

            name: {
                required: true,
            },

            mail: {
                email: true,
                required: true,
            },

            telephon: {
                digits: true,
                minlength: 10,
                maxlength: 10,
            },
        },

        messages: {

            name: {
                required: "Поле 'Имя' <br>обязательно для заполнения",
            },

            mail: {
                email: "В e-mail адресе должен <br> присудстовать символ '@'! <br> Примере: UNIVERSITY@BIONIC-UNIVERSITY.COM",
                required: "Поле для e-mail обязательно для заполнения",
            },

            telephon: {
                digits: "Это поле содержит только цифры <br> Пример:  0443613450",
                minlength: "Пароль должен быть 10 символов",
                maxlength: "Пароль должен быть 10 символов",
            },

        }

    });



    /*tabs*/

    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function () {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    /*плавная прокрутка*/

    $("#navigation_a").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);
    });

});




