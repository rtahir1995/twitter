"use strict"

// PUPUP EFFECT
$('.signUpButton').on('click', function () {
    $('.popupSection').css({
        visibility: 'visible'
    });
} );

$('.popup').on('click', function () {
    $('.popupSection').css({
        visibility: 'hidden'
    });
} );


$('.popupContent').on('click', function(event) {
    event.stopPropagation();
});