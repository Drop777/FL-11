let isInteger = (a) => {
    if (Math.round(a) === a || (Math.round(a) + 1) === a) {
        return true;
    } else {
        return false;
    }
}
console.log(isInteger(18));
console.log(isInteger(5.0));
console.log(isInteger(5.1));