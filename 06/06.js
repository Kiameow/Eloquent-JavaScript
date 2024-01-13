//--------a vector type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//----------groups
class Group {
  constructor() {
    this.members = [];
  }
  add(value) {
    if (this.members.indexOf(value) === -1) {
      this.members.push(value);
    }
  }
  delete(value) {
    let index = this.members.indexOf(value);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }
  has(value) {
    if (this.members.indexOf(value) === -1) {
      return false;
    } 
    return true;
  }
  static from(iterObj) { 
    let group = new Group;
    for(let i=0; i<iterObj.length; i++) {
      group.add(iterObj[i]);
    }
    return group
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

//----------iterable groups
class GroupIterator {
  constructor(group) {
    this.group = group;
    this.pos = 0;
  }

  next() {
    if (this.pos === this.group.members.length) 
      return {done: true};

    let value = this.group.members[this.pos];
    this.pos++;
    return {value, done: false};
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

//---------borrowing a method
let map = {one: true, two: true, hasOwnProperty: true};
// console.log(map.hasOwnProperty("one")); → wrong

console.log(Object.hasOwnProperty.call(map, "one"));
// → true