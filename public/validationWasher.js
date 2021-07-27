
// Declare variables to pick inputs from form
var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var userName = document.getElementById('username');
var Password = document.getElementById('password');
var DOB = document.getElementById('dateofbirth');
var employeeId = document.getElementById('employeeid');
var placeOfResidence = document.getElementById('placeofresidence');
var Nin = document.getElementById('nin');
var Gender = document.getElementById('gender');
var employeeType = document.getElementById('employeetype');

// var Submit = document.getElementById("submit");
//for the error IDs
var firstNameError = document.getElementById('firstnameError');
var lastNameError = document.getElementById('lastnameError');
var userNameError = document.getElementById('usernameError');
var PasswordError = document.getElementById('passwordError');
var DOBError = document.getElementById('dateofbirthError');
var employeeIdError = document.getElementById('employeeidError');
var placeOfResidenceError = document.getElementById('placeofresidenceError');
var NinError = document.getElementById('ninError');
var GenderError = document.getElementById('genderError');
var employeeTypeError = document.getElementById('employeetypeError');




// For the regular expressions to be used 
var NameReg = /^[A-Z]([a-z])+$/;
var employeeIdReg = /^Zwash([0-9]{3})$/;
var NinReg = /^[A-Z]{3}[0-9A-Z]{8}$/;



var validation=()=>{
//This is for the Zawash Id
// letvalidateemployeeId=()=> {

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
        firstNameError.innerHTML = ''
    }

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
        lastNameError.innerHTML = 'Last name must be filled';
        lastName.style.border = "1px solid red"

    }
    

    if (DOB.value == "") {
        DOB.style.border = "1px solid red"
        DOBError.innerHTML = "Please fill field"
        return false;
    }
    else {
        DOB.style.border = "1px solid green"
        DOB.innerHTML = ""
    }

    // if(Gender.value == "") {
    //     Gender.style.border = "1px solid red"
    //     GenderError.innerHTML = "Please fill field"
    //     return false;
    // }
    // else {
    //     Gender.style.border = "1px solid green"
    //     GenderError.innerHTML = ""
    // }

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
// }

    if(placeOfResidence.value == "") {
        placeOfResidence.style.border = "1px solid red"
        placeOfResidenceError.innerHTML = "Please fill field"
        return false;
    }
    else {
        placeOfResidence.style.border = "1px solid green"
        placeOfResidenceError.innerHTML = ""
    }



///national ID check
// letvalidateNin=()=>{

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
// }
    //gender
     if(Gender.value == "") {
        Gender.style.border = "1px solid red"
        GenderError.innerHTML = "Please fill field"
        return false;
    }
    else {
        Gender.style.border = "1px solid green"
        GenderError.innerHTML = ""
    }

    //employeetype
    if (employeeType.value == "") {
        employeeType.style.border = "1px solid red"
        employeeTypeError.innerHTML = "Please fill field"
        return false;
    }
    else {
        employeeType.style.border = "1px solid green"
        employeeTypeError.innerHTML = ""
    }

//This is for validating the first name
// letvalidateFirstName=()=>{

    
// }
//This is for validating the last name

// letvalidateLastName=()=>{

    
// }


//CHECKING WHETHER THE FIELDS ARE EMPTY
// var validate = () => {

    //Package
    
    // //Make
    // // if (Tel.value == "") {
    // //     Tel.style.border = "1px solid red"
    // //     TelError.innerHTML = "Please fill field"
    // //     return false;
    // // }
    // else {
    //     Tel.style.border = "1px solid green"
    //     TelError.innerHTML = ""
    // }
    ////DOB
    

}
//This is used to merge all the fuctions into one grand function that i then call on the form
// let myvalidations = () => {
//     validate();
//     validateLastName();
//     validateFirstName();
//     validateemployeeId();
//     validateNin();
//     return false;
// }

    // function myvalidations(){
    //     var validation = true;
    //     validation &= validate();
    //     validation &= validateFirstName();
    //     validation &= validateLastName();
    //     validation &= validateNationalID();
    //     validation &= validateZawashID();
    //     return validation;

    //   }






