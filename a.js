function a() {
  this.name = "lsh";
  console.log("hi");
}

var b = new a();
console.log(b.name);
