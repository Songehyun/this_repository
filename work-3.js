console.log("밑도 끝도없는 this : ", this);

function workThree(a, b) {
  console.log("함수 안에 this : ", this);
  return a + b;
}

console.log(workThree(1, 2));

let itsMe = {
  name: "송이현",
  age: 31,
  home: "대전",
  test: this,
};

console.dir("객체에서 보는 this :", itsMe);
