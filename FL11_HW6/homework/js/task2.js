let a = +prompt('Enter size A');
let b = +prompt('Enter size B');
let c = +prompt('Enter size C');
if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    if (a === b && a === c && b === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}