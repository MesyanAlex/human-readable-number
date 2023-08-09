module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number === 0) {
        return 'zero';        
    }
    if (number > 0 && number < 10) {
        return ones[number];
    }
    if (number < 100 && number % 10 === 0) {
        return tens[number/10];
    }
    if (number > 10 && number < 20) {
        return teens[number - 10];
    }
    if (number > 20 && number < 100 && number % 10 !== 0) {
        let firstNumber = Math.floor(number / 10);
        let secondNumber = number - (firstNumber * 10);
        return (tens[firstNumber] + ' ' + ones[secondNumber]);
    }
    if (number > 99 && number < 1000 && number % 100 === 0) {
        return (ones[(number / 100)] + ' hundred');
    }
    if (number > 100 && number < 1000 && number % 100 !== 0) {
        let firstNumber = Math.floor(number / 100);
        let secondNumber = Math.floor((number - (firstNumber * 100)) / 10);
        let thirdNumber = number - (firstNumber * 100) - (secondNumber * 10);
        if (secondNumber === 1 && thirdNumber !== 0) {
            return (ones[firstNumber] + ' hundred ' + teens[thirdNumber]);
        }
        if (secondNumber === 0) {
            return (ones[firstNumber] + ' hundred ' + ones[thirdNumber]);
        }
        if (thirdNumber === 0) {            
            return (ones[firstNumber] + ' hundred ' + tens[secondNumber]);
        }
        else {           
            return (ones[firstNumber] + ' hundred ' + tens[secondNumber] + ' ' + ones[thirdNumber]);
        }        
    }    
}
