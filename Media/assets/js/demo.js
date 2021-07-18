'use strict'



var pupup = false;

$('.signUpButton').on('click', function () {
    if (pupup === true) {
        $('.pupup').empty();
        pupup = false;
    } else if (pupup === false) {
        $.ajax({
            url: '././pupup.html',
            method: 'GET'
        }).done(function (data) {
            $('.pupup').html(data);
        });
        pupup = true;
    };
});

$(document.body).on('click', ".popupBody", function () {
    if (pupup === true) {
        $('.pupup').empty();
        pupup = false;
    } else if (pupup === false) {
        $.ajax({
            url: '././pupup.html',
            method: 'GET'
        }).done(function (data) {
            $('.pupup').html(data);
        });
        pupup = true;
    };
});

$(document.body).on('click', '.popupContent', function(event) {
    event.stopPropagation();
});



