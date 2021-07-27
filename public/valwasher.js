// // let checkEmpty1 = ()=>{
//     let firstName = document.getElementById('firstname')
//     let lastName = document.getElementById('lastname')
//     let userName= document.getElementById('username')
//     let Password = document.getElementById('password')
//     let DOB = document.getElementById('dateofbirth')
//     let employeeId = document.getElementById('employeeid')
//     let placeOfResidence = document.getElementById('placeofresidence')
//     let Nin = document.getElementById('nin')
//     let Gender = document.getElementById('gender')
//     let employeeType = document.getElementById('employeetype')

//     let firstNameError = document.getElementById('firstnameError')
//     let lastNameError = document.getElementById('lastnameError')
//     let userNameError = document.getElementById('usernameError')
//     let PasswordError = document.getElementById('passwordError')
//     let DOBError = document.getElementById('dateofbirthError')
//     let employeeIdError = document.getElementById('employeeidError')
//     let placeOfResidenceError = document.getElementById('placeofresidenceError')
//     let NinError = document.getElementById('ninError')
//     let GenderError = document.getElementById('genderError')
//     let employeeType = document.getElementById('employeetypeError')


// // For the regular expressions to be used 
// var NameReg = /^[A-Z]([a-z])+$/;
// var employeeIdReg = /^Zwash([0-9]{3})$/;
// var NinReg = /^[A-Z]{3}[0-9A-Z]{8}$/;

// var validation1 = () =>{
    
//     if (firstName.value.length < 8) {
//         firstNameError.innerHTML = ' Name Should be atleast 8 Characters ';
//         firstName.style.border = "1px solid red"
//         return false;
//     } else if (firstName.value.length >= 8 && firstName.value.match(NameReg)) {
//         firstNameError.innerHTML = '';
//         firstName.style.border = "1px solid green"
//     } else if (!(firstName.value.length <= 8 && firstName.value.match(NameReg))) {
//         firstNameError.innerHTML = 'Name start with Capital letter ';
//         firstName.style.border = "1px solid red"
//         return false;
//     } else if (firstName.value.length = 0) {
//         firstNameError.innerHTML = ''
//     }

//     if (lastName.value.length < 8) {
//         lastNameError.innerHTML = ' Name Should be atleast 8 Characters ';
//         lastName.style.border = "1px solid red"
//         return false;
//     } else if (lastName.value.length >= 8 && lastName.value.match(NameReg)) {
//         lastNameError.innerHTML = '';
//         lastName.style.border = "1px solid green"
//     } else if (!(lastName.value.length <= 8 && lastName.value.match(NameReg))) {
//         lastNameError.innerHTML = 'Name start with Capital letter ';
//         lastName.style.border = "1px solid red"
//         return false;
//     } else if (lastName.value.length = 0) {
//         lastNameError.innerHTML = 'Last name must be filled';
//         lastName.style.border = "1px solid red"

//     }

// }



// // }




// Declare variables to pick inputs from form
// var FirstName = document.getElementById('firstName');
// var LastName = document.getElementById('lastName');
// var DOB = document.getElementById('DateOfBirth');
// var Address = document.getElementById('address');
// var ZawashId = document.getElementById('ZawashId');
// var Gender = document.getElementById('gender');
// var Tel = document.getElementById('tel');
// var NationalId = document.getElementById('nationalid');

var firstName = document.getElementById('firstname')
var lastName = document.getElementById('lastname')
var userName= document.getElementById('username')
var Password = document.getElementById('password')
var DOB = document.getElementById('dateofbirth')
var employeeId = document.getElementById('employeeid')
var placeOfResidence = document.getElementById('placeofresidence')
var Nin = document.getElementById('nin')
var Gender = document.getElementById('gender')
var employeeType = document.getElementById('employeetype')

// var Submit = document.getElementById("submit");
//for the error IDs
// var FirstNameError = document.getElementById('firstNameerror');
// var LastNameError = document.getElementById('lastNameerror');
// var DOBError = document.getElementById('DateOfBirtherror');
// var AddressError = document.getElementById('addresserror');
// var ZawashIdError = document.getElementById('ZawashIderror');
// var GenderError = document.getElementById('gendererror');
// var TelError = document.getElementById('telerror');
// var NationalIdError = document.getElementById('nationaliderror');


var firstNameError = document.getElementById('firstnameError');
 var lastNameError = document.getElementById('lastnameError');
var userNameError = document.getElementById('usernameError');
 var PasswordError = document.getElementById('passwordError');
 var DOBError = document.getElementById('dateofbirthError');
 var employeeIdError = document.getElementById('employeeidError');
 var placeOfResidenceError = document.getElementById('placeofresidenceError');
var NinError = document.getElementById('ninError');
var GenderError = document.getElementById('genderError');
var employeeType = document.getElementById('employeetypeError');



// For the regular expressions to be used 
var NameReg = /^[A-Z]([a-z])+$/;
var employeeIdReg = /^Zwash([0-9]{3})$/;
var NinReg = /^[A-Z]{3}[0-9A-Z]{8}$/;



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


var validate = () => {

    //Package
    if (userName.value == "") {
        userName.style.border = "1px solid red"
        userNameError.innerHTML = "Please fill field"
        return false;
    }
    else {
        userName.style.border = "1px solid green"
        userNameError.innerHTML = ""
    }
    //Make
    if (Password.value == "") {
        Password.style.border = "1px solid red"
        PasswordError.innerHTML = "Please fill field"
        return false;
    }
    else {
        Password.style.border = "1px solid green"
        PasswordError.innerHTML = ""
    }
    ////DOB
    if (DOB.value == "") {
        DOB.style.border = "1px solid red"
        DOBError.innerHTML = "Please fill field"
        return false;
    }
    else {
        DOB.style.border = "1px solid green"
        DOB.innerHTML = ""
    }

}





//This is for the Zawash Id
let validateemployeeId = () => {

    if (!(employeeId.value.length == 8)) {
        employeeIdError.innerHTML = ' Zwash ID Should have 8 Characters ';
        employeeId.style.border = "1px solid red"
        return false;
    } else if ((employeeId.value.length == 8) && (employeeId.value.match(employeeIdReg))) {
        employeeIdError.innerHTML = '';
        employeeId.style.border = "1px solid green"
    } else if (!(employeeId.value.match(employeeIdReg))) {
        employeeIdError.innerHTML = 'Zwash ID starts with Zwash and 3 numbers follow  ';
        employeeId.style.border = "1px solid red"
        return false;
    } else if (employeeId.value.length = 0) {
        employeeIdError.innerHTML = '';

    }
}


var validate3 = () => {
    if (placeOfResidence.value == "") {
        placeOfResidence.style.border = "1px solid red"
        placeOfResidenceError.innerHTML = "Please fill field"
        return false;
    }
    else {
        placeOfResidence.style.border = "1px solid green"
        placeOfResidenceError.innerHTML = ""
    }
}



///national ID check
let validateNin = () => {

    if (!(Nin.value.length == 11)) {
        NinError.innerHTML = ' National ID have 11 Characters';
        Nin.style.border = "1px solid red"
        return false;
    } else if (Nin.value.length == 11 && Nin.value.match(NinReg)) {
        NinError.innerHTML = '';
        Nin.style.border = "1px solid green"
    } else if (!(Nin.value.length == 11 && Nin.value.match(NinReg))) {
        NinError.innerHTML = 'Starts with 3 Capital letters then 8 other charcters ';
        Nin.style.border = "1px solid red"
        return false;
    } else if (Nin.value.length = 0) {
        NinError.innerHTML = '';

    }
}


var validate2 = () => {
    if (Gender.value == "") {
        Gender.style.border = "1px solid red"
        GenderError.innerHTML = "Please fill field"
        return false;
    }
    else {
        Gender.style.border = "1px solid green"
        GenderError.innerHTML = ""
    }

    if (employeeType.value == "") {
        employeeType.style.border = "1px solid red"
        employeeTypeError.innerHTML = "Please fill field"
        return false;
    }
    else {
        employeeType.style.border = "1px solid green"
        employeeTypeError.innerHTML = ""
    }
}





//This is for validating the first name

//This is for validating the last name



//CHECKING WHETHER THE FIELDS ARE EMPTY

//This is used to merge all the fuctions into one grand function that i then call on the form
let myvalidations = () => {
    validatefirstName();
    validatelastName();
    validate();
    validateemployeeId();
    validate3();
    validateNin();
    validate2();

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






