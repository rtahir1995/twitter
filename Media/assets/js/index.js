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