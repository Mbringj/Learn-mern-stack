function calculateTax(amount, format) {
    var calcAmount = amount * 1.2;
    return format ? "$".concat(calcAmount.toFixed(2)) : calcAmount.toString();
}
var taxValue = calculateTax(100, false);
console.log(taxValue);
