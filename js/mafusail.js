$(document).ready(function(){

    $("#loginform").validate({

        rules:{

            name:{
                required: true,
            },

            mail:{
                email: true,
            },

            telephon:{
                digits: true,
                minlength: 10,
                maxlength: 10,
            },
        },

        messages:{

            name:{
                required: "Это поле обязательно для заполнения",
            },

            mail:{
                email: "Это поле обязательно для заполнения",
            },

            telephon:{
                digits: "Это поле содержит только цыфры",
                minlength: "Пароль должен быть 10 символов",
                maxlength: "Пароль должен быть 10 символов",
            },

        }

    });


    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
});