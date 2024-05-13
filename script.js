// 문제 2
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".title").textContent = "제목아니다";
});
// 문제 3
function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(4, 6); //확인 완

// 문제 4

function isEvenOrOdd(num) {
  if (num % 2 === 0) console.log("짝수 입니다.");
  else console.log("홀수 입니다.");
}
isEvenOrOdd(1); // 확인 완

const name = "병수";
const age = 20;
console.log("이름:", name);
console.log("나이:", age);
