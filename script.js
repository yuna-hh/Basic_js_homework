// 1번
const container = document.querySelector("#container");
const clickBox = document.querySelector(".box");

container.addEventListener("click", function (event) {
  const { target, currentTarget } = event;
  if (target === currentTarget) {
    return;
  }
  target.classList.add("clicked");
});

// 2번
function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result);

// 3번
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

// 4번
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 5번
for (let i = 1; i <= 10; i++) {
  console.log(i * 2);
}

// 6번
setTimeout(() => console.log("3초 후에 출력되는 텍스트입니다."), 3000);
