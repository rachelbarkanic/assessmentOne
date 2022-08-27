let password = "Meowmeow";

if (password.length > 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
console.log('Success');
} else {
    console.log('Fail');
}