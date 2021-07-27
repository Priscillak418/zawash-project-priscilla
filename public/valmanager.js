let checkEmpty = () =>{
    let firstName = document.getElementById('firstname')
    let lastName = document.getElementById('lastname')
    let userName = document.getElementById('username')
    let Password = document.getElementById('password')
    let phoneNumber = document.getElementById('phonenumber')
    let Gender = document.getElementById('gender')

    let firstNameError = document.getElementById('firstnameError')
    let lastNameError = document.getElementById('lastnameError')
    let userNameError = document.getElementById('usernameError')
    let PasswordError = document.getElementById('passwordError')
    let phoneNumberError = document.getElementById('phonenumberError')
    let GenderError = document.getElementById('genderError')

    //Condition to check if 
    if (firstName.value == '') {
     //Define action to check if first name field is empty
        firstNameError.style = "color:red; font-size: 10px;"
        firstNameError.innerHTML = "please enter a first name"
    }

    if (lastName.value == '') {
        //Define action to check if last name field is empty
        lastNameError.style = "color:red; font-size: 10px;"
        lastNameError.innerHTML = "please enter a last name"
    }

    if (userName.value == '') {
        //Define action to check if username field is empty
        userNameError.style = "color:red; font-size: 10px;"
        userNameError.innerHTML = "please enter a username"
    }

    if (Password.value == '') {
        //Define action to check if password field is empty
        PasswordError.style = "color:red; font-size: 10px;"
        PasswordError.innerHTML = "please enter a password"
    }

    if (phoneNumber.value == '') {
        //Define action to check if phone number field is empty
        phoneNumberError.style = "color:red; font-size: 10px;"
        phoneNumberError.innerHTML = "please enter a phone number"
    }

    if (Gender.value == '') {
        //Define action to check if gender field is empty
        GenderError.style = "color:red; font-size: 10px;"
        GenderError.innerHTML = "please enter your gender"
    }




}
