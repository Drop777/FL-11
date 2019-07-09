let email = prompt('Enter your e-mail:');
const minEmailLenght = 6;
const minNewPassLenght = 5;
let emailUser = 'user@gmail.com';
let emailAdmin = 'admin@gmail.com';
let emailUserPass = 'UserPass';
let emailAdminPass = 'AdminPass';
if (!email) {
    alert('Canceled')
} else if (email.length < minEmailLenght) {
    alert('I don"t know any emails having name length less than 6 symbols')
} else if (email === emailUser || email === emailAdmin) {
    let pass = prompt('Enter your password:')
    if (!pass) {
        alert('Canceled');
    } else if (email === emailUser && pass === emailUserPass || email === emailAdmin && pass === emailAdminPass) {
        let want = confirm('Do you want to change your password?');
        if (want === true) {
            let oldPass = prompt('Enter old password:')
            if (!oldPass) {
                alert('Canceled.')
            } else if (email === emailUser && pass === oldPass || email === emailAdmin && pass === oldPass) {
                let newPass = prompt('Enter new pass:')
                if (newPass.length < minNewPassLenght) {
                    alert('It’s too short password. Sorry.')
                } else {
                    let secondNewPass = prompt('Entet new pass again:')
                    if (newPass !== secondNewPass) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.')
                    }
                }
            } else {
                alert('Invalid old pass.');
            }
        } else {
            alert('You have failed the change.')
        }
    } else {
        alert('Wrong pass!')
    }
} else {
    alert('I dont know you!')
}

