// let inputUserCMT = document.querySelector('#input-user-comment');
// let ulShow = document.querySelector("#ul-show-comment");
// let commentUserShow = document.querySelector("#input-comment");

// let valueInputUserCMT;

// inputUserCMT.addEventListener("change" , (event)=> {
//     const tagLi = document.querySelectorAll("#ul-show-comment li");

//     valueInputUserCMT = inputUserCMT.value;

//     let html = `<li>
//                     <div class="action-comment-user">
//                         <div class="left-action-comment-user">
//                             <img src="./assets/images/glx_trade.png" alt="">
//                         </div>
//                             <div class="right-action-comment-user">
//                                 <div class="input-comment" id="input-comment">
//                                     <p>${valueInputUserCMT}</p>
//                                 </div>
//                         </div>
//                      </div>
//                 </li>`;
//     tagLi[tagLi.length -1].insertAdjacentHTML("afterend", html);

// })


// console.log(ulShow);

window.onload = function(){
    let user_login = localStorage.getItem('user_login');

    if(user_login){
        console.log('Đã login');
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
