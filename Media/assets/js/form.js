// var users = [{
//     name: "YourName",
//     surname: 'YourSurname',
//     email: 'youremail@gmail.com',
//     phoneNumber: 'YourPhoneNumber',
//     dateOfBirth: 'YourDateOfBirth'
// },
// {
//     name: "YourName2",
//     surname: 'YourSurname2',
//     email: 'youremail2@gmail.com',
//     phoneNumber: 'YourPhoneNumber2',
//     dateOfBirth: 'YourDateOfBirth2'
// },
// {
//     name: "YourName3",
//     surname: 'YourSurname3',
//     email: 'youremail3@gmail.com',
//     phoneNumber: 'YourPhoneNumber3',
//     dateOfBirth: 'YourDateOfBirth3'
// }];

// function validateForm (element) {
//     var name = $('#name').val();
//     var surname = $('#surname').val();
//     var email = $('#email').val();
//     $('.error-input').removeClass('error-input');

//     if (element.id === 'name') {
//         if (!name.trim()) {
//             let mainDiv = $('#name').parent();
//             mainDiv.addClass('error-input');
//             var span = (mainDiv).find('span');
//             span.html('Write your name, please!');
//         }
//     } else if (element.id === 'surname') {
//         if (!surname.trim()) {
//             console.log('Please, write your surname');
//         }
//     } else if (element.id === 'email') {
//         if (!email.trim()) {
//             console.log('Please, write your email');
//         } else if (email.indexOf('@') === -1) {
//             console.log('Please, write your correct email')
//         } else {
//             for (let user of users) {
//                 if (email.toLowerCase() === user.email) {
//                     console.log('This email has already been taken.')
//                     break;
//                 }; 
//             }; 
//         };
//     }
// }

// $('#name, #surname, #email').on('input', function (){
//     validateForm(this);
// });


// // New

// var isEmail = true;

// $('#email_to_phone').on('click', function (e) {
//     e.preventDefault();
// });

// $(this).html($(this).data('email-text'))

// $('#email').attr({
//     type: 'tel',
//     placeholder: 'phone',
//     id: 'phone',
//     name: 'phone'
// });


// data-email-text="use phone instead"
// data-phone-text="use email instead"




// Focus and Wrong Name Label
var wrongName = false;

$('.nameInput').find('input').focus(function () {
    if(wrongName === false) {
        $('.nameL').find('label').css({
            borderColor: 'rgb(29, 161, 242)',
            boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
        });
    
        $('.nameLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(29, 161, 242)'
        });

        $('.nameError').css({
            visibility: 'hidden'
        });
    } else if (wrongName === true) {
        $('.nameL').find('label').css({
            borderColor: 'rgb(224, 36, 94)',
            boxShadow: 'rgb(224, 36, 94) 0px 0px 0px 1px'
        });
    
        $('.nameLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(224, 36, 94)'
        });

        $('.nameError').css({
            visibility: 'visible'
        });
    } 

    $('.nameCounter').css({
        visibility: 'visible'
    });
});

$('.nameInput').find('input').focusout(function () {
    let nameInput = $('.nameInput').find('input').val();


    if (wrongName === false) {
        $('.nameL').find('label').css({
            borderColor: 'rgb(207, 217, 222)',
            boxShadow: 'none'
        })
    } else {
        $('.nameL').find('label').css({
            boxShadow: 'none'
        })
    }
    
    if (nameInput === '' & wrongName === false) {
        $('.nameLabel').css({
            fontSize: '17px',
            top: '16px',
            color: 'rgb(83, 100, 113)'
        });
        $('.nameCounter').css({
            visibility: 'visible'
        });
    } if (nameInput === '' & wrongName === true) {
        $('.nameLabel').css({
            fontSize: '17px',
            top: '16px',
            color: 'rgb(83, 100, 113)'
        });
        $('.nameCounter').css({
            visibility: 'visible'
        });
    } else {
        $('.nameLabel').css({
            color: 'rgb(83, 100, 113)'
        });
        $('.nameCounter').css({
            visibility: 'hidden'
        });
    }
});



$('#name').on('input', function (){
    let nameInput = $('.nameInput').find('input').val();
    let nameCounter = nameInput.length;
    $('.nameCounter').text(`${nameCounter} / 50`)

    if (nameCounter === 0) {
        $('.nameL').find('label').css({
            borderColor: 'rgb(224, 36, 94)',
            boxShadow: 'rgb(224, 36, 94) 0px 0px 0px 1px'
        });

        $('.nameLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(224, 36, 94)'
        });

        $('.nameError').css({
            visibility: 'visible'
        });

        wrongName = true;
    } else {
        $('.nameL').find('label').css({
            borderColor: 'rgb(29, 161, 242)',
            boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
        });
        
        $('.nameLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(29, 161, 242)'
        });

        $('.nameError').css({
            visibility: 'hidden'
        });

        wrongName = false;
    }
});


// Focus and Wrong Phone Label
var wrongPhone = false;

$('.phoneInput').find('input').focus(function () {
    if(wrongPhone === false) {
        $('.phoneL').find('label').css({
            borderColor: 'rgb(29, 161, 242)',
            boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
        });
    
        $('.phoneLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(29, 161, 242)'
        });

        $('.phoneError').css({
            visibility: 'hidden'
        });
    } else if (wrongPhone === true) {
        $('.phoneL').find('label').css({
            borderColor: 'rgb(224, 36, 94)',
            boxShadow: 'rgb(224, 36, 94) 0px 0px 0px 1px'
        });
    
        $('.phoneLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(224, 36, 94)'
        });

        $('.phoneError').css({
            visibility: 'visible'
        });
    } 

});

$('.phoneInput').find('input').focusout(function () {
    let phoneInput = $('.phoneInput').find('input').val();


    if (wrongPhone === false) {
        $('.phoneL').find('label').css({
            borderColor: 'rgb(207, 217, 222)',
            boxShadow: 'none'
        })
    } else {
        $('.phoneL').find('label').css({
            boxShadow: 'none'
        })
    }
    
    if (phoneInput === '' & wrongPhone === false) {
        $('.phoneLabel').css({
            fontSize: '17px',
            top: '16px',
            color: 'rgb(83, 100, 113)'
        });

    } if (phoneInput === '' & wrongPhone === true) {
        $('.phoneLabel').css({
            fontSize: '17px',
            top: '16px',
            color: 'rgb(83, 100, 113)'
        });

    } else {
        $('.phoneLabel').css({
            color: 'rgb(83, 100, 113)'
        });
    }
});



$('#phone').on('input', function (){
    let phoneInput = $('.phoneInput').find('input').val();
    let phoneCounter = phoneInput.length;

    if (phoneCounter === 0) {
        $('.phoneL').find('label').css({
            borderColor: 'rgb(224, 36, 94)',
            boxShadow: 'rgb(224, 36, 94) 0px 0px 0px 1px'
        });

        $('.phoneLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(224, 36, 94)'
        });

        $('.phoneError').css({
            visibility: 'visible'
        });

        wrongPhone = true;
    } else {
        $('.phoneL').find('label').css({
            borderColor: 'rgb(29, 161, 242)',
            boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
        });
        
        $('.phoneLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(29, 161, 242)'
        });

        $('.phoneError').css({
            visibility: 'hidden'
        });

        wrongPhone = false;
    }
});