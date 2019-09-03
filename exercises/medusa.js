

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
    }
    stare(victim) {
      if (this.statues.length < 3) {
      this.statues.push(victim);
      victim.stoned = true;
      }
      else {
        this.statues.push(victim);
        this.statues.shift();
        victim.stoned = true;
                }
// if a new victim is added to an array when it has 3 items in it, drop the first one
// stare(victim) needs to make victim.stoned = true
      }
    }
    //if this.statues.length === 3
    //stop adding to array
  // }

module.exports = Medusa;
