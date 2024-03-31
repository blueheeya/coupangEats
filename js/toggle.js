
//스크롤
document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById("logo");
    var links = document.querySelectorAll(".textscroll");
    var background = document.querySelector(".hunWrap")
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
        // 스크롤 위치 가져오기
        var scrollPosition = window.scrollY;

        
        links.forEach(function(link) {
           
            if (scrollPosition > 100) { // 스크롤 어느정도 내렸을 때
                link.classList.add("scrolled"); // 스크롤 시 색상 변경 클래스 추가
            } else {
                link.classList.remove("scrolled"); // 스크롤이 맨 위에 있을 때 기본 색상으로 복원
            }
            console.log(link);
        });
        // 스크롤 위치에 따라 로고 변경
        if (scrollPosition > 100) { // 스크롤 어느정도 내렸을 때
            logo.src = "./images/header_logo_active.png"; // 스크롤 이미지로 변경
            background.style.backgroundColor = "white"
        } else {
            logo.src = "./images/header_logo.png"; // 초기 이미지로 변경
            background.style.background = "none"
           
        }
    });
});
let click = false
document.addEventListener("click",function () {
    const dropbar =document.querySelector(".dropbar")
    if(window.innerWidth <= 991){
        if(click){
            dropbar.style.display = "none";
            click = false
        }else{
            dropbar.style.display = "block";
            click = true
        }
    }
})

// console.log("toggle");