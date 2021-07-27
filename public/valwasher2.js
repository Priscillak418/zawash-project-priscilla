let valwasher =()=>{
    let firstName = document.washer.firstname;
    let lastName = document.washer.lastname;
    let userName = document.washer.username;
    let Password = document.washer.password;
    let DOB = document.washer.dateofbirth;
    let employeeId = document.washer.employeeid;
    let placeOfResidence = document.washer.placeofresidence;
    let Nin = document.washer.nin;
    let Gender = document.washer.gender;
    let employeeType = document.washer.employeetype;





    let firstNameError=document.getElementById('firstnameError');
    let lastNameError = document.getElementById('lastnameError');
    let userNameError = document.getElementById('usernameError');
    let PasswordError = document.getElementById('passwordError');
    let DOBError = document.getElementById('dateofbirthError');
    let employeeIdError = document.getElementById('employeeidError');
    let placeOfResidenceError = document.getElementById('placeofresidenceError');
    let NinError = document.getElementById('ninError');
    let GenderError = document.getElementById('genderError');
    let employeeTypeError = document.getElementById('employeetypeError');

    

    if(firstName.value==''){
        firstName.style.border ='1px solid red'
        firstNameError.innerHTML='please fill in first name'
        firstNameError.style='color:red; font-size:10px;'
        return false;
    }
    else {
        firstName.style.border = "1px solid green"
        firstNameError.innerHTML = ""
    }
    if (lastName.value == '') {
        lastName.style.border = '1px solid red'
        lastNameError.innerHTML = 'please fill in last name'
        lastNameError.style = 'color:red; font-size:10px;'
        return false;
    }
    if (userName.value == '') {
        userName.style.border = '1px solid red'
        userNameError.innerHTML = 'please fill in user name'
        userNameError.style = 'color:red; font-size:10px;'
        return false;
    }
    if (Password.value == '') {
        Password.style.border = '1px solid red'
        PasswordError.innerHTML = 'please fill in password'
        PasswordError.style = 'color:red; font-size:10px;'
        return false;
    }
    if (DOB.value == '') {
        DOB.style.border = '1px solid red'
        DOBError.innerHTML = 'please fill in date of birth'
        DOBError.style = 'color:red; font-size:10px;'
        return false;
    }
    if (employeeId.value == '') {
        employeeId.style.border = '1px solid red'
        employeeIdError.innerHTML = 'please fill in employee id'
        employeeIdError.style = 'color:red; font-size:10px;'
        return false;
    }
    if (placeOfResidence.value == '') {
        placeOfResidence.style.border = '1px solid red'
        placeOfResidenceError.innerHTML = 'please fill in place of residence'
        placeOfResidenceError.style = 'color:red; font-size:10px;'
        return false;
    }
    if (Nin.value == '') {
        Nin.style.border = '1px solid red'
        NinError.innerHTML = 'please fill in Nin number'
        NinError.style = 'color:red; font-size:10px;'
        return false;
    }
    if (Gender.value == '') {
        Gender.style.border = '1px solid red'
        GenderError.innerHTML = 'please fill in gender'
        GenderError.style = 'color:red; font-size:10px;'
        return false;
    }
    if (employeeType.value == '') {
        employeeType.style.border = '1px solid red'
        employeeTypeError.innerHTML = 'please fill in employee type'
        employeeTypeError.style = 'color:red; font-size:10px;'
        return false;
    }

    
    




}