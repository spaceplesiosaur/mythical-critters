class Dragon {
  constructor(name){
    this.name = name;
    this.rider = "Eragon";
    this.color = "blue"
    this.hungry = true;
    this.meals = 1;
  }
  eat() {
    if (this.meals < 3) {
      this.meals++;
    } else {
      this.hungry = false;
    }
  }
}



module.exports = Dragon;
