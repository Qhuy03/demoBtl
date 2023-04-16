let idValue;

// get film id from url
let queryString = window.location.search;
const params = new URLSearchParams(queryString);
const filmId = params.get('filmId');


// get film from localstorage by id
dataFilmLocalStorage = localStorage.getItem('film'); 
dataFilm =JSON.parse(dataFilmLocalStorage);
// console.log(dataFilm);

for (const itemt of dataFilm) {
    if(itemt.id == filmId) {
        valuePresent = itemt;
        console.log(valuePresent)
        break;
    }
}

// clickSHowFirm
let itemtEle = document.querySelectorAll(".itemt");
let itemtImgPresent;
let itemPresent;
let showMoreDetailFirm = document.querySelector(".container-more-detail-firm");


//     for (const itemt of itemtEle) {
//         itemt.addEventListener("click", function(event) {
            
            
//             itemtImgPresent = this.children[0].children[0].src;
//             console.log(this.children[0].children[0]); 

//             localStorage.setItem('imgPresent', this.children[0].children[0].src);
//         })
// }

// itemtImgPresent = localStorage.getItem('imgPresent');


// infomationFirm 


showMoreDetailFirm.innerHTML = `
<div class="left-more-detail-firm">
<div class="itemt-img-firm">
    <img src="${valuePresent.anh_phim}" alt="">
    <div class="container-buton-itemt-img-firm">
        <div class="buton-itemt-img-firm"><a href="#">Tải phim</a></div>
        <div class="buton-itemt-img-firm"><a href="#">Xem phim</a></div>
    </div>
</div>

</div>
<div class="right-more-detail-firm">
<div class="container-detail-firm-text">
    <div class="title-detail-firm">
        <h2>${valuePresent.ten_phim}</h2>
            <span>Till The End Of The Moon (2023)</span>
            <span>${valuePresent}</span>
    </div>
    <div class="container-content-detail-firm">
        <div>
            <p>Trạng thái:</p>
            <span>${valuePresent}</span>
        </div>
        <p>Thời lượng: ${valuePresent.thoi_luong} / tập</p>
            <p>Số tập: ${valuePresent.so_tap}</p>
            <p>Tình trạng: Hoàn tất</p>
            <p>Ngôn ngữ: Phụ đề Việt</p>
            <p>Năm sản xuất: ${valuePresent.nam_san_xuat}</p>
            <p>Quốc gia: ${valuePresent.quoc_gia}</p>
            <p>Thể loại: <a href="#">${valuePresent.the_loai}</a></p>
        <p>Diễn viên: <a href="#">${valuePresent.dien_vien}</a></p>
    </div>
    <div class="feedback-firm">
        <div class="action-feedback-firm">
            <div class="like-action-feedback-firm div-btn" >
                <i class="fa-sharp fa-solid fa-thumbs-up"></i>
                <p>Thích</p>
                <span>3</span>
            </div>
            <div class="share-action-feedback-firm div-btn">
                <p>Chia sẻ</p>
            </div>
            <div class="bookmark-action-feedback-firm div-btn">
                <i class="fa-sharp fa-solid fa-bookmark"></i>
                <p>Lưu vào fa</p>
            </div>
        </div>
    </div>
</div>
</div>
`