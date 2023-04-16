const $field = document.querySelector('textarea');
const $comments = document.getElementById('comment-box');
const $count = document.getElementById('count');





let comments_arr = [];

if(!localStorage.commentData){localStorage.commentData = [];}
else{
  comments_arr = JSON.parse(localStorage.commentData);
}

let userName = localStorage.getItem('user_login');
const display_comments = () => {
    let date = new Date();
    let currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    let dateTime = currentDate+" "+strTime;
  let list = '<ul>';
   comments_arr.forEach(comment => {

    list += `<li>
    <div class="post-comment">
    <div class="list">
        <div class="comment-avt">
            <div class="user-image"><img src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg" alt=""></div>
        </div>
        <div class="user">
            <div class="user-meta">
                <div class="comment-info">
                    <div class="name">${userName}</div>
                    <div class="day">${dateTime}</div>
                </div>
                <div class="info-btn">
                <button onclick="colorFunction" id="heart"><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="comment-post">${comment}</div>
        </div>
        
    </div>
</li>`;
;
  })
  list += '</ul>';
  $comments.innerHTML = list;
}

submit.onclick = function(event){
    event.preventDefault();
    const content = $field.value;
    if ( userName === null) {
      alert("Đăng nhập để comment")
    } else if (content.length > 0){
      comments_arr.unshift(content);
      localStorage.commentData = JSON.stringify(comments_arr);
      display_comments();
      $field.value = '';
    }
    // let countValue = $count.innerHTML;
    // countValue = countValue * 1 + 1;
    // $count.innerHTML = countValue;


}
window.addEventListener('load', display_comments);


