var users = [{
    name: "YourName",
    surname: 'YourSurname',
    email: 'youremail@gmail.com',
    phoneNumber: 'YourPhoneNumber',
    dateOfBirth: 'YourDateOfBirth'
},
{
    name: "YourName2",
    surname: 'YourSurname2',
    email: 'youremail2@gmail.com',
    phoneNumber: 'YourPhoneNumber2',
    dateOfBirth: 'YourDateOfBirth2'
},
{
    name: "YourName3",
    surname: 'YourSurname3',
    email: 'youremail3@gmail.com',
    phoneNumber: 'YourPhoneNumber3',
    dateOfBirth: 'YourDateOfBirth3'
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


// New

var isEmail = true;

$('#email_to_phone').on('click', function (e) {
    e.preventDefault();
});

$(this).html($(this).data('email-text'))

$('#email').attr({
    type: 'tel',
    placeholder: 'phone',
    id: 'phone',
    name: 'phone'
});


data-email-text="use phone instead"
data-phone-text="use email instead"