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


// Email or Phone choice 

var isEmail = false;

$('.labelChange').find('a').on('click', function (e) {
    e.preventDefault();
    
    if (isEmail === false) {
        
        $('.phoneL').css({
            display: 'none'
        });
    
        $('.emailL').css({
            display: 'block'
        });

        $('.labelChange').find('a').text('Use phone instead');

        isEmail = true;
    } else if (isEmail === true) {
        $('.emailL').css({
            display: 'none'
        });

        $('.phoneL').css({
            display: 'block'
        });

        $('.labelChange').find('a').text('Use email instead');
        
        isEmail = false;
    }
});


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

// Focus and Wrong Email Label

var wrongEmail = false;

$('.emailInput').find('input').focus(function () {
    if(wrongEmail === false) {
        $('.emailL').find('label').css({
            borderColor: 'rgb(29, 161, 242)',
            boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
        });
    
        $('.emailLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(29, 161, 242)'
        });

        $('.emailError').css({
            visibility: 'hidden'
        });
    } else if (wrongEmail === true) {
        $('.emailL').find('label').css({
            borderColor: 'rgb(224, 36, 94)',
            boxShadow: 'rgb(224, 36, 94) 0px 0px 0px 1px'
        });
    
        $('.emailLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(224, 36, 94)'
        });

        $('.emailError').css({
            visibility: 'visible'
        });
    } 

});

$('.emailInput').find('input').focusout(function () {
    let emailInput = $('.emailInput').find('input').val();


    if (wrongEmail === false) {
        $('.emailL').find('label').css({
            borderColor: 'rgb(207, 217, 222)',
            boxShadow: 'none'
        })
    } else {
        $('.emailL').find('label').css({
            boxShadow: 'none'
        })
    }
    
    if (emailInput === '' & wrongEmail === false) {
        $('.emailLabel').css({
            fontSize: '17px',
            top: '16px',
            color: 'rgb(83, 100, 113)'
        });

    } if (emailInput === '' & wrongEmail === true) {
        $('.emailLabel').css({
            fontSize: '17px',
            top: '16px',
            color: 'rgb(83, 100, 113)'
        });

    } else {
        $('.emailLabel').css({
            color: 'rgb(83, 100, 113)'
        });
    }
});



$('#email').on('input', function (){
    let emailInput = $('.emailInput').find('input').val();
    let emailCounter = emailInput.length;

    if (emailCounter === 0) {
        $('.emailL').find('label').css({
            borderColor: 'rgb(224, 36, 94)',
            boxShadow: 'rgb(224, 36, 94) 0px 0px 0px 1px'
        });

        $('.emailLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(224, 36, 94)'
        });

        $('.emailError').css({
            visibility: 'visible'
        });

        wrongEmail = true;
    } else {
        $('.emailL').find('label').css({
            borderColor: 'rgb(29, 161, 242)',
            boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
        });
        
        $('.emailLabel').css({
            fontSize: '13px',
            top: '5px',
            color: 'rgb(29, 161, 242)'
        });

        $('.emailError').css({
            visibility: 'hidden'
        });

        wrongEmail = false;
    }
});


//Select Month

$('.selectMonth').find('select').focus(function () {
    $('.selectMonth').find('label').css({
        borderColor: 'rgb(29, 161, 242)',
        boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px',
        fill: 'rgb(29, 161, 242)'
    });

    $('.monthLabel').css({
        color: 'rgb(29, 161, 242)'
    })
})

$('.selectMonth').find('select').focusout(function () {
    $('.selectMonth').find('label').css({
        border: 'rgb(207, 217, 222) 1px solid',
        boxShadow: 'none',
        fill: 'rgb(207, 217, 222)'
    });

    $('.monthLabel').css({
        color: 'rgb(83, 100, 113)'
    })  
})

//Select Day

$('.selectDay').find('select').focus(function () {
    $('.selectDay').find('label').css({
        borderColor: 'rgb(29, 161, 242)',
        boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px',
        fill: 'rgb(29, 161, 242)'
    });

    $('.dayLabel').css({
        color: 'rgb(29, 161, 242)'
    })
});

$('.selectDay').find('select').focusout(function () {
    $('.selectDay').find('label').css({
        border: 'rgb(207, 217, 222) 1px solid',
        boxShadow: 'none',
        fill: 'rgb(207, 217, 222)'
    });

    $('.dayLabel').css({
        color: 'rgb(83, 100, 113)'
    })  
});

//Select Year

$('.selectYear').find('select').focus(function () {
    $('.selectYear').find('label').css({
        borderColor: 'rgb(29, 161, 242)',
        boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px',
        fill: 'rgb(29, 161, 242)'
    });

    $('.yearLabel').css({
        color: 'rgb(29, 161, 242)'
    })
})

$('.selectYear').find('select').focusout(function () {
    $('.selectYear').find('label').css({
        border: 'rgb(207, 217, 222) 1px solid',
        boxShadow: 'none',
        fill: 'rgb(207, 217, 222)'
    });

    $('.yearLabel').css({
        color: 'rgb(83, 100, 113)'
    })  
})

// NEXT BUTTON

$('input').on('input', function() {
    let nameCounter = $('#name').val().length;
    let phoneCounter = $('#phone').val().length;
    let emailCounter = $('#email').val().length;
    let monthCounter = $('.selectMonth').find('select option:selected').val();
    let dayCounter = $('.selectDay').find('select option:selected').val();
    let yearCounter = $('.selectYear').find('select option:selected').val();

    if (nameCounter !== 0 & (phoneCounter !== 0 || emailCounter !== 0) & monthCounter > 0 & dayCounter > 0 & yearCounter > 0) {
        $('.nextSignUp').css({
            opacity: '1'
        });

        $('.nextSignUp').removeAttr('disabled');
    } else {
        $('.nextSignUp').css({
            opacity: '0.5'
        });

        $('.nextSignUp').prop('disabled', true);
    }
});

$('select').on('change', function() {
    let nameCounter = $('#name').val().length;
    let phoneCounter = $('#phone').val().length;
    let emailCounter = $('#email').val().length;
    let monthCounter = $('.selectMonth').find('select option:selected').val();
    let dayCounter = $('.selectDay').find('select option:selected').val();
    let yearCounter = $('.selectYear').find('select option:selected').val();

    if (nameCounter !== 0 & (phoneCounter !== 0 || emailCounter !== 0) & monthCounter > 0 & dayCounter > 0 & yearCounter > 0) {
        $('.nextSignUp').css({
            opacity: '1'
        });

        $('.nextSignUp').removeAttr('disabled');
    } else {
        $('.nextSignUp').css({
            opacity: '0.5'
        });

        $('.nextSignUp').prop('disabled', true);
    }
});