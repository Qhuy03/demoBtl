window.onload = function(){
    let user_login = localStorage.getItem('user_login');
    if(user_login){
        document.getElementById('login').remove();
        document.getElementById('register').remove();
        // var htmlObj = document.getElementsByClassName('action-header')[0];
        // htmlObj.innerHTML = htmlObj.innerHTML + `<a href="#"><i class="fa-regular fa-user">         Hello, Bro!</i></a>`;

        let $profile = document.createElement('a');
        $profile.href = "#";
        $profile.innerHTML = `<i class="fa-regular fa-user">         Hello, Bro!</i>`;

        let $bookMark = document.getElementsByClassName('bookmark-user')[0];
        $bookMark.before($profile);
    }
}