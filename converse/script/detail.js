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
