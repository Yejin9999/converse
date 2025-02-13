//상품 썸네일
//1. 각각의 작은 썸네일 이미지에 마우스올리면
//2. 위 1번 대상에만 테두리 적용(다른 요소들은 테두리 제거)
//3. 위 1번 대상이 우측 큰 이미지에 나타났다.
//DOM Node : 작은썸네일이미지, 우측 큰이미지
// 속성, 메소드 , 이벤트 : 1.'mouseover' 마우스를 올렸다. 2. classList 테두리가 적용된다. 제거된다. 3. 나타났다. image변수 src변경

const thumNail = document.querySelectorAll ('.photo .thumnail a img');
const bigImage = document.querySelector ('.photo .big img');
console.log(thumNail , bigImage);
console.log(thumNail[0].src , bigImage.src);
console.log(thumNail[0].parentElement);

//모든함수에 적용되는 값 
function thum_remove() {
    thumNail[0].parentElement.classList.remove('active');
    thumNail[1].parentElement.classList.remove('active');
    thumNail[2].parentElement.classList.remove('active');
}

function bigSrc(num){
    return bigImage.src = `./images/bigimg${num}.jpg`; 
}

//썸네일(thum.jpg)에 마우스를 올렸을 떄 큰 이미지 경로가 그에 맞는 big.jpg로 변경
thumNail[0].addEventListener('mouseover',()=>{
    bigSrc(0);
    thum_remove();
    thumNail[0].parentElement.classList = 'active';
})
thumNail[1].addEventListener('mouseover',()=>{
    bigSrc(1);
    thum_remove();
    thumNail[1].parentElement.classList = 'active';
})
thumNail[2].addEventListener('mouseover',()=>{
    bigSrc(2);
    thum_remove();
    thumNail[2].parentElement.classList = 'active';
})

//주문금액 + 주문수량 js
let price = 67500; //주문금액 (콤마치면 문자처리되니까 x)
let number = 0; //주문수량
let totalPrice = 0; // 총 가격 저장변수
const productNum = document.querySelector('#product_num'); //수량표시dom
const plusBtn = document.querySelector('#plus'); //수량증가버튼dom
const minusBtn = document.querySelector('#minus'); //수량감소버튼DOM
const orderPrice = document.querySelector('.order_price .price'); //price만 적으면 다른게 잡힐 수있으니까 그 부모까지 적어주기
console.log(productNum, plusBtn,minusBtn, orderPrice);


//수량 주문금액 초기값 세팅하기
productNum.value = number; //productNum은 input이니까 속성에 값을 넣기위해 .value를 적어야함
orderPrice.innerText = price*number; //금액*수량 

//1. +버튼 클릭 시
plusBtn.addEventListener('click',()=>{
    //2. 수량 1 증가(최종수량1)
    number++; //증감연산자
    productNum.value = number;
    //3. 수량에 따라 주문금액이 증가 67500*1
    totalPrice = price*number;
    orderPrice.innerText = totalPrice.toLocaleString('ko-kr');
})

//1. -버튼 클릭 시
minusBtn.addEventListener('click',()=>{
    //2. 수량 1 감소
    number--;
    productNum.value = number;
    //3. 수량 감소에 따라 주문금액 감소
    totalPrice = price*number;
    orderPrice.innerText = totalPrice.toLocaleString('ko-kr');
})

//======장바구니 팝업 js

const cartPopup = document.querySelector('.cart_open_bg');
const cartBtn = document.querySelector('#cart_btn');
const shoppingBtn = document.querySelector('.cart_open_bg .link a');
console.log(cartPopup, cartBtn, shoppingBtn);

//1. 'cartPopup'초기값: 팝업 숨기기
cartPopup.style.display = 'none';
//2. 'cartBtn' 장바구니 클릭 시
//3. 팝업 보이기
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block';
    document.body.style.overflow = 'hidden'; //화면세로로 짧게 할 시 스크롤없애기 안움직이게 하는법
})
//4.'shoppingBtn' 팝업 내 '쇼핑계속하기' 클릭 시
//5. 팝업 숨기기
shoppingBtn.addEventListener('click',()=>{
    cartPopup.style.display ='none';
    document.body.style.overflow = 'auto'; // auto 설정 시내용이 넘치면 스크롤 만들어지고 아니면 안만들어짐
})