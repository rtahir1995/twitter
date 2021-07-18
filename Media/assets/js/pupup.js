// PUPUP EFFECT
$('.signUpButton').on('click', function () {
    $('.popupSection').css({
        display: 'block'
    });
} );

$('.popup').on('click', function () {
    $('.popupSection').css({
        display: 'none'
    });
} );


$('.popupContent').on('click', function(event) {
    event.stopPropagation();
});