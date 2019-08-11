

// let menuHandler = false;
function viewContent(menu) {

    var content = menu.getElementsByTagName("p")[1];
    //메뉴의 2번째 p태그 값
    content.classList.toggle("viewContent");
    //보이게 해주는 클래스를 없다면 추가 ,있으면 제거


    // if (menuHandler == true) {

    //     // menu.removeChild(menu.lastChild);
    //     //메뉴의 마지막 자식을 지움
    //     menuHandler = false;
    // } else {
    //     let content = document.createElement('p');
    //     //p태그 생성
    //     content.classList.add("contentCss");
    //     //css 클래스 지정
    //     content.innerText = "아코디언 content";
    //     //p값 바꾸기
    //     menu.appendChild(content);
    //     //메뉴자식 p태그로 설정

    //     menuHandler = true;
    // }
    // console.log(menuHandler);

}