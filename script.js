const container = document.querySelector(".container");
const name = document.querySelector(".name");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");
//-------------------------------------------------

// 1번
const peoples = [
  {
    name: "철수",
    age: 19,
    gender: "남자",
  },
  {
    name: "짱구",
    age: 20,
    gender: "남자",
  },
  {
    name: "유리",
    age: 21,
    gender: "여자",
  },
];

// 2번
peoples.forEach(function (people) {
  let peopleTemplate = `
        <div class="peopleBox">
          <h2 class="name">이름: ${people.name}</h3>
          <h4 class="age">나이: ${people.age}</h4>
          <h4 class="gender">성별: ${people.gender}</h4>
          <hr />
        </div>`;
  container.insertAdjacentHTML("beforeend", peopleTemplate);
});

// 3번
const findWoman = peoples.find((woman) => {
  return woman.gender === "여자";
});

console.log(findWoman);

// 4번
const filteredMan = peoples.filter((man) => {
  return man.gender === "남자";
});
console.log(filteredMan);

// 5번
const plusTen = peoples.map((newAge) => {
  return { ...newAge, age: newAge.age + 10 };
});
console.log(plusTen);
console.log(peoples);

console.log("---------------------");
// 6번

const sortAge = [...peoples];

sortAge.sort((a, b) => {
  return b.age - a.age;
});

console.log(sortAge);
console.log(peoples);

// 7번
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;
console.log(user);
