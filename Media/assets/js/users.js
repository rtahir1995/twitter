'use strict';



var users = [{
    username: 'Elshad',
    name: "Elshad",
    surname: 'Aghazade',
    email: 'elshad_aghazade@gmail.com',
    phoneNumber: '+994509781589',
    dateOfBirth: '01.01.1995'    
}, {
    username: 'Tahir',
    name: "Tahir",
    surname: 'Rahimov',
    email: 'tahir_rahimov@gmail.com',
    phoneNumber: '+994555458599',
    dateOfBirth: '01.01.1995'
}, {
    username: 'Ayxan',
    name: "Ayxan",
    surname: 'Nematov',
    email: 'ayxan_nematov@gmail.com',
    phoneNumber: '+994705621303',
    dateOfBirth: '01.01.1995'
}, {
    username: 'Baba',
    name: "Baba",
    surname: 'Kazımov',
    email: 'baba_kazimov@gmail.com',
    phoneNumber: '+994704311712',
    dateOfBirth: '01.01.1995'
}, {
    username: 'Cavad',
    name: "Cavad",
    surname: 'Pashayev',
    email: 'cavad_pashayev@gmail.com',
    phoneNumber: 'YourPhoneNumber3',
    dateOfBirth: '01.01.1995' 
}];

function validateForm (element) {
    var name = $('#name').val();
    var surname = $('#surname').val();
    var email = $('#email').val();
    $('.error-input').removeClass('error-input');

    if (element.id === 'name') {
        if (!name.trim()) {
            let mainDiv = $('#name').parent();
            mainDiv.addClass('error-input');
            var span = (mainDiv).find('span');
            span.html('Write your name, please!');
        }
    } else if (element.id === 'surname') {
        if (!surname.trim()) {
            console.log('Please, write your surname');
        }
    } else if (element.id === 'email') {
        if (!email.trim()) {
            console.log('Please, write your email');
        } else if (email.indexOf('@') === -1) {
            console.log('Please, write your correct email')
        } else {
            for (let user of users) {
                if (email.toLowerCase() === user.email) {
                    console.log('This email has already been taken.')
                    break;
                }; 
            }; 
        };
    }
}

$('#name, #surname, #email').on('input', function (){
    validateForm(this);
});