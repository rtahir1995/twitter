'use strict';

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
        $('.phoneLabel').css({
            fontSize: '17px',
            top: '16px',
            color: 'rgb(83, 100, 113)'
        });
        $('#phone').val('');
        isEmail = true;
    } else if (isEmail === true) {
        $('.emailL').css({
            display: 'none'
        });

        $('.phoneL').css({
            display: 'block'
        });

        $('.labelChange').find('a').text('Use email instead');
        $('.emailLabel').css({
            fontSize: '17px',
            top: '16px',
            color: 'rgb(83, 100, 113)'
        });
        $('#email').val('');
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

// Birthday form 

function dateBirthDayUpdate () {

    var monthSel = $('#dateBirthMonth').val();
    var yearSel = $('#dateBirthYear').val();
    var daySelOp = $('#dateBirthDay');
    var yearSelOp = $('#dateBirthYear');


    var maxYear = new Date().getFullYear();
    var yearSelected = yearSel;
    yearSelOp.html(`<option value="0" selected="1" disabled="disabled"></option>`);
    for (let i = maxYear; i >= 1901; i--) {
        let sel = yearSelected == i ? ' selected' : '';
        yearSelOp.append( `<option value="${i}" ${sel}> ${i}  </option>`);
    }

    
    if (yearSel === null) {
        yearSel = 2020;
    };
    
    var date = new Date(yearSel, monthSel);
    date.setDate(0);
    var maxDays = date.getDate();
    var daySelected = daySelOp.val();
    daySelOp.html(`<option value="0" selected="1" disabled="disabled"></option>`);
    for (let i = 1; i <= maxDays; i++) { 
        let sel = daySelected == i ? ' selected' : '';
        daySelOp.append( `<option value="${i}" ${sel}> ${i}  </option>`);
    };
}

dateBirthDayUpdate();


//Select Month

$('.selectMonth').find('select').focus(function () {
    $('.selectMonth').find('label').css({
        borderColor: 'rgb(29, 161, 242)',
        boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
    });

    $('.monthLabel').css({
        color: 'rgb(29, 161, 242)'
    });

    $('.selectMonth').find('svg').css({
        fill: 'rgb(29, 161, 242)'
    });
})

$('.selectMonth').find('select').focusout(function () {
    $('.selectMonth').find('label').css({
        border: 'rgb(207, 217, 222) 1px solid',
        boxShadow: 'none'
    });

    $('.monthLabel').css({
        color: 'rgb(83, 100, 113)'
    });
    
    $('.selectMonth').find('svg').css({
        fill: 'rgb(83, 100, 113)'
    });
})

//Select Day

$('.selectDay').find('select').focus(function () {
    $('.selectDay').find('label').css({
        borderColor: 'rgb(29, 161, 242)',
        boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
    });

    $('.dayLabel').css({
        color: 'rgb(29, 161, 242)'
    });

    $('.selectDay').find('svg').css({
        fill: 'rgb(29, 161, 242)'
    });
});

$('.selectDay').find('select').focusout(function () {
    $('.selectDay').find('label').css({
        border: 'rgb(207, 217, 222) 1px solid',
        boxShadow: 'none'
    });

    $('.dayLabel').css({
        color: 'rgb(83, 100, 113)'
    });
    
    $('.selectDay').find('svg').css({
        fill: 'rgb(83, 100, 113)'
    });
});

//Select Year

$('.selectYear').find('select').focus(function () {
    $('.selectYear').find('label').css({
        borderColor: 'rgb(29, 161, 242)',
        boxShadow: 'rgb(29, 161, 242) 0px 0px 0px 1px'
    });

    $('.yearLabel').css({
        color: 'rgb(29, 161, 242)'
    });

    $('.selectYear').find('svg').css({
        fill: 'rgb(29, 161, 242)'
    });
})

$('.selectYear').find('select').focusout(function () {
    $('.selectYear').find('label').css({
        border: 'rgb(207, 217, 222) 1px solid',
        boxShadow: 'none'
    });

    $('.yearLabel').css({
        color: 'rgb(83, 100, 113)'
    });

    $('.selectYear').find('svg').css({
        fill: 'rgb(83, 100, 113)'
    });

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