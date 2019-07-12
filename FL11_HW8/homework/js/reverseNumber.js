let reverseNumber = (a) => {
    let m = '';
    let negative = 1;
    if (a < 0) {
        a *= -1;
        negative = -1;
    }
    while (a > 0) {
        let b = a % 10;
        a -= b;
        a /= 10;
    if (b) {
        m += b;
    }
    }
    m *= negative;
    return m;
}
console.log(reverseNumber(-156543));
console.log(reverseNumber(156543));
console.log(reverseNumber(-1000000));
