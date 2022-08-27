let password = "Meowmeow123!";

if (password.length > 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
    console.log('Success');
    } else if (/^\d/.test(password)) {
        console.log('Password cannot begin with a number');
    } else if (/\s/. test(password)) {
      console.log('Password cannot contain a space')
    } else {
      console.log('Fail - password does not meet specifications: must be more than 10 characters long and contain at least one number and one letter');
    }
    
    //Included a check to see if password starts with a number 
    //Included a check to see if password contains a space