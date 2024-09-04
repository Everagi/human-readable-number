module.exports = function toReadable(number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return ones[number];
    } else if (number < 20) {
        return teens[number - 10];
    } else if (number < 100) {
        return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + ones[number % 10] : '');
    } else if (number < 1000) {
        return ones[Math.floor(number / 100)] + ' hundred' + (number % 100 !== 0 ? ' ' + toReadable(number % 100) : '');
    } else if (number < 1000000) {
        const thousands = Math.floor(number / 1000);
        const remainder = number % 1000;
        return toReadable(thousands) + ' thousand' + (remainder !== 0 ? ' ' + toReadable(remainder) : '');
    } else {
        return 'NaN';
    }
}
