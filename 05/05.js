//----- flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((acc, ele) => acc.concat(ele), []));
// → [1, 2, 3, 4, 5, 6]

//----- your won loop
function loop(value, testfn, updatefn, bodyfn) {
  for(let i=value; testfn(i); i=updatefn(i)) {
    bodyfn(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//------- everything
function every(array, test) {
  for(let ele of array) {
    if (!test(ele)) {
      return false;
    }
  }
  return true;
}

function every2(array, test) {
  return !array.some(n => !test(n))
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true

// ----- dominant writing direction
const SCRIPTS = [
  {
    name: "Latin",
    ranges: [[65, 91], [97, 123], [170, 171], [186, 187], [192, 215], [216, 247], [248, 697], [736, 741], [7424, 7462], [7468, 7517], [7522, 7526], [7531, 7544], [7545, 7615], [7680, 7936], [8305, 8306], [8319, 8320], [8336, 8349], [8490, 8492], [8498, 8499], [8526, 8527], [8544, 8585], [11360, 11392], [42786, 42888], [42891, 42927], [42928, 42936], [42999, 43008], [43824, 43867], [43868, 43877], [64256, 64263], [65313, 65339], [65345, 65371]],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_script"
  },
  {
    name: "Han",
    ranges: [[11904, 11930], [11931, 12020], [12032, 12246], [12293, 12294], [12295, 12296], [12321, 12330], [12344, 12348], [13312, 19894], [19968, 40939], [63744, 64110], [64112, 64218], [131072, 173783], [173824, 177973], [177984, 178206], [178208, 183970], [183984, 191457], [194560, 195102]],
    direction: "ltr",
    year: -1100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Chinese_characters"
  },
  {
    name: "Arabic",
    ranges: [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565], [1566, 1567], [1568, 1600], [1601, 1611], [1622, 1648], [1649, 1757], [1758, 1792], [1872, 1920], [2208, 2229], [2230, 2238], [2260, 2274], [2275, 2304], [64336, 64450], [64467, 64830], [64848, 64912], [64914, 64968], [65008, 65022], [65136, 65141], [65142, 65277], [69216, 69247], [126464, 126468], [126469, 126496], [126497, 126499], [126500, 126501], [126503, 126504], [126505, 126515], [126516, 126520], [126521, 126522], [126523, 126524], [126530, 126531], [126535, 126536], [126537, 126538], [126539, 126540], [126541, 126544], [126545, 126547], [126548, 126549], [126551, 126552], [126553, 126554], [126555, 126556], [126557, 126558], [126559, 126560], [126561, 126563], [126564, 126565], [126567, 126571], [126572, 126579], [126580, 126584], [126585, 126589], [126590, 126591], [126592, 126602], [126603, 126620], [126625, 126628], [126629, 126634], [126635, 126652], [126704, 126706]],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script"
  }
];

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script : 'none';
  }).filter(({name}) => name != 'none');

  let mainScript = scripts.reduce((n, script) => n.count > script.count ? n : script);
  return mainScript.name.direction;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(dominantDirection("你好呀，我是Kia！"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
let char = "مساء الخير"; // Arabic
console.log(char.charCodeAt(0));


