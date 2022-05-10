function reverseInt(n){
    let r =n.toString().split("").reverse().join("");

    return Math.sign(n) * parseInt(r);
}

var newNumber = reverseInt(-895)
console.log(newNumber);