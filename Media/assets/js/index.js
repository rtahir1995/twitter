// $.ajax({
//     url: '/form2.html',
//     method: 'GET',
//     // dataType: 'html'
// }).done(function (cavab) {
//     $('.sign').html(cavab)
// }).catch(function(xeta) {

// });

// var x = $('.fromSection')
// element.style.display = 'none';

// x.style.display = 'none'

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