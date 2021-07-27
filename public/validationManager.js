
// Declare variables to pick inputs from form
var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var userName = document.getElementById('username');
var Password = document.getElementById('password');
var phoneNumber = document.getElementById('phonenumber');
var Gender = document.getElementById('gender');

// var Submit = document.getElementById("submit");
//for the error IDs
var firstNameError = document.getElementById('firstnameError');
var lastNameError = document.getElementById('lastnameError');
var userNameError = document.getElementById('usernameError');
var PasswordError = document.getElementById('passwordError');
var phoneNumberError = document.getElementById('phonenumberError');
var GenderError = document.getElementById('genderError');



// For the regular expressions to be used 
var NameReg = /^[A-Z]([a-z])+$/;
// var ZawashIdReg = /^Zwash([0-9]{3})$/;
// var NationalIdReg = /^[A-Z]{3}[0-9A-Z]{8}$/;


//This is for the Zawash Id
// let validateFirstName = () => {

//     if (!(firstName.value.length == 8)) {
//         fistNameError.innerHTML = ' First name Should have 8 Characters ';
//         firstName.style.border = "1px solid red"
//         return false;
//     } else if ((firstName.value.length == 8) && (firstName.value.match(NameReg))) {
//         firstNameError.innerHTML = '';
//         firstName.style.border = "1px solid green"
//     } else if (!(firstName.value.match(NameReg))) {
//         firstNameError.innerHTML = 'Zwash ID starts with Zwash and 3 numbers follow  ';
//         ZawashId.style.border = "1px solid red"
//         return false;
//     } else if (ZawashId.value.length = 0) {
//         ZawashIdError.innerHTML = '';

//     }
// }



///national ID check
// let validateNationalID = () => {

//     if (!(NationalId.value.length == 11)) {
//         NationalIdError.innerHTML = ' National ID have 11 Characters';
//         NationalId.style.border = "1px solid red"
//         return false;
//     } else if (NationalId.value.length == 11 && NationalId.value.match(NationalIdReg)) {
//         NationalIdError.innerHTML = '';
//         NationalId.style.border = "1px solid green"
//     } else if (!(NationalId.value.length == 11 && NationalId.value.match(NationalIdReg))) {
//         NationalIdError.innerHTML = 'Starts with 3 Capital letters then 8 other charcters ';
//         NationalId.style.border = "1px solid red"
//         return false;
//     } else if (NationalId.value.length = 0) {
//         NationalIdError.innerHTML = '';

//     }
// }

//This is for validating the first name
let validatefirstName = () => {

    if (firstName.value.length < 8) {
        firstNameError.innerHTML = ' Name Should be atleast 8 Characters ';
        firstName.style.border = "1px solid red"
        return false;
    } else if (firstName.value.length >= 8 && firstName.value.match(NameReg)) {
        firstNameError.innerHTML = '';
        firstName.style.border = "1px solid green"
    } else if (!(firstName.value.length <= 8 && firstName.value.match(NameReg))) {
        firstNameError.innerHTML = 'Name start with Capital letter ';
        firstName.style.border = "1px solid red"
        return false;
    } else if (firstName.value.length = 0) {
        firstNameError.innerHTML = '';

    }
}
//This is for validating the last name

let validatelastName = () => {

    if (lastName.value.length < 8) {
        lastNameError.innerHTML = ' Name Should be atleast 8 Characters ';
        lastName.style.border = "1px solid red"
        return false;
    } else if (lastName.value.length >= 8 && lastName.value.match(NameReg)) {
        lastNameError.innerHTML = '';
        lastName.style.border = "1px solid green"
    } else if (!(lastName.value.length <= 8 && lastName.value.match(NameReg))) {
        lastNameError.innerHTML = 'Name start with Capital letter ';
        lastName.style.border = "1px solid red"
        return false;
    } else if (lastName.value.length = 0) {
        lastNameError.innerHTML = '';

    }
}




//CHECKING WHETHER THE FIELDS ARE EMPTY
var validate = () => {

    //username
    if (userName.value == "") {
        userName.style.border = "1px solid red"
        userNameError.innerHTML = "Please fill field"
        return false;
    }
    else {
        userName.style.border = "1px solid green"
        userNameError.innerHTML = ""
    }
    //password
    if (Password.value == "") {
        Password.style.border = "1px solid red"
        PasswordError.innerHTML = "Please fill field"
        return false;
    }
    else {
        Password.style.border = "1px solid green"
        PasswordError.innerHTML = ""
    }
    //phonenumber
    if (phoneNumber.value == "") {
        phoneNumber.style.border = "1px solid red"
        phoneNumberError.innerHTML = "Please fill field"
        return false;
    }
    else {
        phoneNumber.style.border = "1px solid green"
        phoneNumberError.innerHTML = ""
    }

    //gender
    if (Gender.value == "") {
        Gender.style.border = "1px solid red"
        GenderError.innerHTML = "Please fill field"
        return false;
    }
    else {
        Gender.style.border = "1px solid green"
        GenderError.innerHTML = ""
    }

}
//This is used to merge all the fuctions into one grand function that i then call on the form
let validationsmanager= () => {
    
    validatefirstName();
    validateLastName();
    validate();
    // validateuserName();
    // validatePassword();
    // validatephoneNumber();
    // validateGender();
    return false;
}

    // function myvalidations(){
    //     var validation = true;
    //     validation &= validate();
    //     validation &= validateFirstName();
    //     validation &= validateLastName();
    //     validation &= validateNationalID();
    //     validation &= validateZawashID();
    //     return validation;

    //   }






