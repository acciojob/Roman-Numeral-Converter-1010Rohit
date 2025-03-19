function convertToRoman(num) {
    const obj = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = '';

    // Iterate through each symbol-value pair
    for (let i = 0; i < obj.length; i++) {
        const [symbol, value] = obj[i];

        // While the number is greater than or equal to the current value
        while (num >= value) {
            result += symbol;  // Append the Roman numeral symbol
            num -= value;      // Subtract the value from the number
        }
    }

    return result;
}

// Test the function with the examples
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(36));   // Output: XXXVI
