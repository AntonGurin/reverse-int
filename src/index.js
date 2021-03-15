module.exports = function reverse(n) {
    let num = n + "";
    if (num < 0) {
        return Math.abs(num);
    } else if (num >= 0) {
        return num.split("").reverse().join("");
    } else {
        return num;
    }
        parseInt(num);
}
