let a1 = +prompt('x for dot A');
let a2 = +prompt('y for dot A');
let b1 = +prompt('x for dot B');
let b2 = +prompt('y for dot B');
let c1 = +prompt('x for dot C');
let c2 = +prompt('y for dot C');
const half = 2;
let isMidDot = true;
if ((a1 + b1) / half === c1 && (a2 + b2) / half === c2) {
    isMidDot = true;
} else {
    isMidDot = false;
}
console.log(isMidDot);