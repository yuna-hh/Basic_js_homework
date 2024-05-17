// 1초에 1씩 카운트되게 만든후
// 카운트 5에 종료 콘솔로그 출력

const counterBox = document.querySelector("#counter");
let count = Number(counterBox.textContent);

const timer = () => {
  if (count < 5) {
    count = count + 1;
    counterBox.textContent = count;
  } else {
    clearInterval(timer);
    console.log("종료");
  }
};
setInterval(timer, 1000);
