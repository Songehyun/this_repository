class ItsMe {
  constructor() {
    (this.name = "송이현"), (this.age = 31), (this.home = "대전");
  }
  sentence() {
    return this.name + "은 미남이다.";
  }
}

let itsMe = new ItsMe();
console.log(itsMe);
