function palindrome(str) {
    return str.split("").every((character, index) => {
        return character ===str[str.length - index - 1];
    });
}

console.log(palindrome("patel"));
console.log(palindrome("wow"));