class Werewolf {
  constructor(name) {
    this.name = name;
    this.location = "Basement lair";
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }
    //needs to change hungry to true
    // change needs to switch human and wolf booleans every time it runs

  eat(victim) {
    if (this.hungry === true) {
      victim.alive = false;
      this.change();
      //don't put this under a return!! return means done!
      return victim.name;
    } else {
      return 'did not eat';
    }
  }
}




module.exports = Werewolf;
