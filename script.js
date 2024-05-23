const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// 7 - 1
localStorage.setItem(
  "user",
  JSON.stringify({
    이름: "병수",
    나이: 20,
    주소: "시골",
  })
);

// 7 - 2
const savedUser = JSON.parse(localStorage.getItem("user"));
// console.log(savedUser);

// 7 - 3
localStorage.setItem(
  "user",
  JSON.stringify({
    ...savedUser,
    나이: 30,
  })
);

// 7 - 4
localStorage.removeItem("user");

// API

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
