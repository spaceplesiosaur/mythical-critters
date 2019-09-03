class Wizard {
constructor(wizardData) {
    this.name = wizardData.name;
    this.bearded = true;
    if (wizardData.bearded === false) {
      this.bearded = false
    }
    this.rested = true;
    this.magic = 0;

  }
  incantation(string) {
    string = string.toUpperCase();
    return string
  }
  cast() {
    this.magic++;
    if (this.magic >= 3) {
      this.rested = false;
      return "I SHALL NOT CAST";
    } else {
      return "MAGIC BULLET";
    }
  }
}

module.exports = Wizard;
