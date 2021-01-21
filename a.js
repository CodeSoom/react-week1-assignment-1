function a() {
  this.name = "lsh";
  this.say = () => {
    console.log("say ok");
    return 10;
  };
}

const b = new a();

console.log(b.say());
