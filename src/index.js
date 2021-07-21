module.exports = function toReadable(number) {
    const singleDigits = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundredParts = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    let arrNumber = String(number).split("");
    if (number === 0) {
        return "zero";
    }

    if (number < 100) {
        if (number < 20) {
            return arrNumber.length > 1
                ? singleDigits[Number(arrNumber[0] + arrNumber[1]) - 1]
                : singleDigits[Number(arrNumber[0]) - 1];
        } else if (number % 10 === 0) {
            return dozens[arrNumber[0] - 2];
        } else {
            return (
                dozens[arrNumber[0] - 2] +
                " " +
                singleDigits[Number(arrNumber[1]) - 1]
            );
        }
    }

    if (number < 1000) {
        if (number % 100 === 0) {
            return hundredParts[arrNumber[0] - 1];
        } else if (number % 100 < 20) {
            return (
                hundredParts[Number(arrNumber[0]) - 1] +
                " " +
                singleDigits[Number(arrNumber[1] + arrNumber[2]) - 1]
            );
        } else if ((number % 100) % 10 === 0) {
            return (
                hundredParts[Number(arrNumber[0]) - 1] +
                " " +
                dozens[Number(arrNumber[1]) - 2]
            );
        } else {
            return (
                hundredParts[Number(arrNumber[0]) - 1] +
                " " +
                dozens[Number(arrNumber[1]) - 2] +
                " " +
                singleDigits[Number(arrNumber[2]) - 1]
            );
        }
    }
};
