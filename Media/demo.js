"use strict";

// function date_birth_day_update(){
//     var monthSel = document.getElementById('date_birth_month').value;
//     var yearSel  = document.getElementById('date_birth_year').value;
//     if (monthSel === 12) {
//         monthSel = 0; 
//         yearSel++;
//     }




//     var date = new Date(yearSel, monthSel, 1);
//     date.setDate(0);
//     var maxDays = date.getDate();
//     var daySel = document.getElementById('date_birth_day');
//     var selected = daySel.value;
//     daySel.innerHTML = '<option value="0"></option>';
//     for (var i = 1; i <= maxDays; i++) {
//     var sel = selected == i ? ' selected' : '';
//     daySel.innerHTML += '<option value="'+i+'"'+sel+'>'+i+'</option>';
//     }
// }

// console.log(new Date());

// var date = new Date();




// function dateBirthDayUpdate() {
//     var monthSel = document.getElementById('dateBirthMonth').value;
//     var yearSel  = document.getElementById('dateBirthYear').value;

//     if (yearSel === '0') {
//         yearSel = 2020;
//     }

//     var date = new Date(yearSel, monthSel, 1);
//     date.setDate(0);
//     var maxDays = date.getDate();
//     var daySel = document.getElementById('dateBirthDay');
//     var selected = daySel.value;
//     for (var i = 1; i <= maxDays; i++) {
//         var sel = selected === i ? ' selected' : '';
//         console.log(`sel ${sel}`)
//         console.log(`selected ${selected}`)
//         console.log(`<option value="${i}" ${sel} > ${i}  </option>`)
//         daySel.innerHTML += ' <option value=" '+ i + ' " ' + sel + ' >'+ i +' </option>';
//         // daySel.innerHTML +=  `<option value="${i}" ${sel} > ${i}  </option>`;
//     }
//     console.log(maxDays);
// }

// var monthSel = 2;
// var yearSel  = 2020;
// var date = new Date(yearSel, monthSel);
// date.setDate(0);
// var maxDays = date.getDate();
// console.log(maxDays);




//   Начало Кода




// function dateBirthDayUpdate () {
//     var daySel = $('#dateBirthDay').val();
//     var monthSel = $('#dateBirthMonth').val();
//     var yearSel = $('#dateBirthYear').val();
//     var daySelOp = $('#dateBirthDay');
    
//     var yearSelOp = $('#dateBirthYear'); 
//     var yearSelect = new Date().getFullYear();

//     if (daysel === null & monthSel === null) {
//         for (let i = 1901; i <= yearSelect; i++) {

//             yearSelOp.append( `<option value="${i}" > ${i}  </option>`);
//         }
//     }


//     if (daysel !== null) {
//         for (let i = 1901; i <= yearSelect; i++) {
//             if (daysel <= maxDays) {
//                 yearSelOp.append( `<option value="${i}" > ${i}  </option>`);
//             }
//         }
//     }
    
//     // if (yearSel === null) {
//     //         yearSel = 2020;
//     //     };



//     yearSelOp.html(`<option value="0" selected="1" disabled="disabled" onchange="dateBirthDayUpdate();"></option>`);
//     var yearSelect = new Date().getFullYear();
//     for (let i = 1901; i <= yearSelect; i++) {
//         let sel = daySelected == i ? ' selected' : '';
//         daySelOp.append( `<option value="${i}" ${sel}> ${i}  </option>`);
//     }


//     var date = new Date(yearSel, monthSel);
//     date.setDate(0);
//     var maxDays = date.getDate();
//     var daySelected = daySelOp.val();



    
    
    
    
//     daySelOp.html(`<option value="0" selected="1" disabled="disabled" onchange="dateBirthDayUpdate();"></option>`);
//     for (let i = 1; i <= maxDays; i++) {
//         let sel = daySelected == i ? ' selected' : '';
//         daySelOp.append( `<option value="${i}" ${sel}> ${i}  </option>`);
//     };
// }

//Конец кода








/*
function dateBirthDayUpdate(){
    var monthSel = document.getElementById('dateBirthMonth').value;
    var yearSel  = document.getElementById('dateBirthYear').value;
    // if (monthSel === 12) {
    //     monthSel = 0; 
    //     yearSel++;
    // }




    var date = new Date(yearSel, monthSel);
    date.setDate(0);
    var maxDays = date.getDate();
    var daySel = document.getElementById('dateBirthDay');
    var selected = daySel.value;
    daySel.innerHTML = '<option value="0"></option>';
    for (var i = 1; i <= maxDays; i++) {
    var sel = selected == i ? ' selected' : '';
    daySel.innerHTML += '<option value="'+i+'"'+sel+'>'+i+'</option>';
    }
}
*/


// function dateBirthDayUpdate () {

//     var monthSel = $('#dateBirthMonth').val();
//     var yearSel = $('#dateBirthYear').val();
//     var daySelOp = $('#dateBirthDay');

//     var date = new Date(yearSel, monthSel);
//     date.setDate(0);
//     var maxDays = date.getDate();
//     var selected = daySelOp.val();
//     daySelOp.html(`<option value="0" selected="1" disabled="disabled" onchange="dateBirthDayUpdate();"></option>`);
//     for (let i = 1; i <= maxDays; i++) { 
//         var sel = selected == i ? ' selected' : '';
//         daySelOp.append( `<option value="${i}" ${sel}> ${i}  </option>`);
//     };

// }





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