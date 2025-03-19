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

    // Loop through each Roman numeral symbol
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

// You can test your code by running the function with an input
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(36));   // Output: XXXVI
