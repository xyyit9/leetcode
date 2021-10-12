/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function (s) {
    const numStack = []
    const strStack = []
    let num = 0
    let result = ''
    // 3[a2[c]]
    // numStack 3  2
    // strStack '' a 
    for (let char of s) {
        if (!isNaN(char)) {
            num = num * 10 + parseInt(char)
        } else if (char == '[') {
            strStack.push(result)
            numStack.push(num)
            num = 0
            result = ''
        } else if (char === ']') {
            const total = numStack.pop()
            result = strStack.pop() + result.repeat(total)
        } else {
            result += char
        }
    }
    return result
};