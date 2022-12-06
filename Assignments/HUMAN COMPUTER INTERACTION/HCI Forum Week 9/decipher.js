function digitalDecipher(eMessage, key) {
    const alphabet = new Map([
        [1, "A"],
        [2, "B"],
        [3, "C"],
        [4, "D"],
        [5, "E"],
        [6, "F"],
        [7, "G"],
        [8, "H"],
        [9, "I"],
        [10, "J"],
        [11, "K"],
        [12, "L"],
        [13, "M"],
        [14, "N"],
        [15, "O"],
        [16, "P"],
        [17, "Q"],
        [18, "R"],
        [19, "S"],
        [20, "T"],
        [21, "U"],
        [22, "V"],
        [23, "W"],
        [24, "X"],
        [25, "Y"],
        [26, "Z"]
    ]);
    
    var result = "";
    const Key = key.toString().split("");

    console.log("split key: ", Key)
    console.log('key length: ', Key.length)
    
    for (var i = 0; i < eMessage.length; i++) {
    
        result += alphabet.get(eMessage[i] - Key[i % Key.length]);
    }
    
    return result;
}
    
console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));
