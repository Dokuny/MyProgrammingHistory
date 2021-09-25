const toggleBtn = document.querySelector('.navbar_toggleBtn');
const navIcons = document.querySelector('.navbar_icons');
const navMenu = document.querySelector('.navbar_menu')

toggleBtn.addEventListener('click',()=>{
    navIcons.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 애드 이벤트 리스너로 이벤트별 함수 설정
// classList.toggle() 은 껏다 켯다 하는 전등같은 느낌.
// 즉 위를 해석해보면 click시마다 classlist에 active라는 클래스를 넣고 빼고 하는거임
