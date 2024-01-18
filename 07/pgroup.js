class PGroup {
  constructor(members) {
    this.members = members;
  }
  add(value) {
    if (!this.has(value)) {
      let new_members = this.members.concat(value);
      return new PGroup(new_members);
    }
    return new PGroup(this.members);
  }
  delete(value) {
    if (this.has(value)) {
      return new PGroup(this.members.filter(x => x!==value));
    }
    return new PGroup(this.members);
  }
  has(value) {
    let index = this.members.indexOf(value);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false