const splash = document.querySelector('.splash');
$('.input-email').on('input', checkLoginInput);
$('.input-pw').on('input', checkLoginInput);


// splash 화면 구현
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 3000)
})


// 로그인 시 이메일 비밀번호 모두 작성하면 버튼 활성화 구현
let email;
let pw;

/////////////////////////// checkLoginInput 함수 리팩토링 가능. 최종본으로 확정되면 리팩토링 ㄱㄱ!
function checkLoginInput() {
    email = $('input[name=input-email]').val();
    pw = $('input[name=input-pw]').val()
    let target = $("button.login-button");
    if (email && pw){
        target.attr("onClick", "location.href='none'"); //////////////// 버튼 활성화 주소 변경해줘야 함!
        target.html("<img src='img/login-button-activated.png'>");
    }
    else {
        target.attr("onClick", "location.href='#none'");
        target.html("<img src='img/login-button.png'>");
    }
}