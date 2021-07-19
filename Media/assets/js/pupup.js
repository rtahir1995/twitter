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

    $('#name').val('');
    $('#phone').val('');
    $('#email').val('');
    $('#dateBirthMonth').val('');
    $('#dateBirthDay').val('');
    $('#dateBirthYear').val('');

    $('.nameLabel').css({
        fontSize: '17px',
        top: '16px',
        color: 'rgb(83, 100, 113)'
    });
    $('.phoneLabel').css({
        fontSize: '17px',
        top: '16px',
        color: 'rgb(83, 100, 113)'
    });

    $('.emailLabel').css({
        fontSize: '17px',
        top: '16px',
        color: 'rgb(83, 100, 113)'
    });

} );


$('.popupContent').on('click', function(event) {
    event.stopPropagation();
});