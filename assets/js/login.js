
const $clickLogin = document.getElementById('click-login');
const $clickRegister = document.getElementById('click-register');
const $boxMain = document.getElementById('box-main');
const $boxMainLogin = document.getElementById('box-main-login');

const handleRegister = (e) => {
    e.preventDefault();
    const $userName = document.getElementById('user-name').value;
    const $pass = document.getElementById('pass').value;
    const $endPass = document.getElementById('end-pass').value;
    if($pass != $endPass){
        alert('mật khẩu không trùng khớp');
    } else{
        const user = {
            username: $userName,
            pass: $pass
        }
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'http://127.0.0.1:5500/demoBtl/index.html';
        localStorage.setItem('user_login', user.username );
    }
}

const handleLogin = (e) => {
    e.preventDefault();
    const $userName = document.getElementById('user-name').value;
    const $pass = document.getElementById('pass').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if($userName == user.username && $pass == user.pass){
        window.location.href = 'http://127.0.0.1:5500/demoBtl/index.html';
        localStorage.setItem('user_login', user.username );
        // const user = localStorage.getItem('user')

    }
    
    
}



$boxMain?.addEventListener('submit', handleRegister);
$boxMainLogin.addEventListener('submit', handleLogin);