class Centaur {

  constructor(name) {
    this.name = name;
    this.breed = 'Palomino';
    this.cranky = false;
    this.standing = true;
    this.fatigue = 0;
    this.standing = true;
    this.layingDown = false;
  }
  amItiredYet() {
    if (this.fatigue >= 3) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }

  shoot() {
    this.fatigue++;
    this.amItiredYet();
    if (this.cranky === false) {
      return 'Twang!!!';
    } else {
      return 'NO!';
    }

  }
  run() {
    this.fatigue++;
    this.amItiredYet();
    if (this.cranky === false) {
      return 'Clop clop clop clop!!!';
  } else {
    return 'NO!';
    }
  }
  sleep() {
    if (this.fatigue < 3) {
      return 'NO!';
    } else {
      this.fatigue = 0;
      this.amItiredYet();
      return 'ZZZZ';
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
    this.fatigue = 3;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
    // this.cranky = true;
  }
  drinkPotion() {
    if (this.fatigue >= 3) {
      this.cranky = false;
    } else {
      this.cranky = true;
    }
    if (this.layingDown === true) {
      return 'Not while I\'m laying down!';
    }
  }

}

module.exports = Centaur;
