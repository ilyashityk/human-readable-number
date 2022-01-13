module.exports = function toReadable (number) {
    const strNumber = number.toString();
    const lastChar = parseInt(strNumber[strNumber.length - 1]);
    const secondCharFromEnd = parseInt(strNumber[strNumber.length - 2]);
    const lastTwoChars = parseInt(secondCharFromEnd.toString() + lastChar.toString());
    const thirdCharFromEnd = parseInt(strNumber[strNumber.length - 3]);
    const lastThreeChars = parseInt(thirdCharFromEnd.toString() + secondCharFromEnd.toString() + lastChar.toString());
    const beforeTen = (n = lastChar) => {
      if (n === 1) return 'one';
      if (n === 2) return 'two';
      if (n === 3) return 'three';
      if (n === 4) return 'four';
      if (n === 5) return 'five';
      if (n === 6) return 'six';
      if (n === 7) return 'seven';
      if (n === 8) return 'eight';
      if (n === 9) return 'nine';
    }
    const beforeHundred = () => {
      if (lastTwoChars === 10) return 'ten';
      if (lastTwoChars === 11) return 'eleven';
      if (lastTwoChars === 12) return 'twelve';
      if (lastTwoChars === 13) return 'thirteen';
      if (lastTwoChars === 14) return 'fourteen';
      if (lastTwoChars === 15) return 'fifteen';
      if (lastTwoChars === 16) return 'sixteen';
      if (lastTwoChars === 17) return 'seventeen';
      if (lastTwoChars === 18) return 'eighteen';
      if (lastTwoChars === 19) return 'nineteen';
      if (lastTwoChars === 20) return 'twenty';
      if (lastTwoChars === 30) return 'thirty';
      if (lastTwoChars === 40) return 'forty';
      if (lastTwoChars === 50) return 'fifty';
      if (lastTwoChars === 60) return 'sixty';
      if (lastTwoChars === 70) return 'seventy';
      if (lastTwoChars === 80) return 'eighty';
      if (lastTwoChars === 90) return 'ninety';
      if (lastTwoChars < 30) return ('twenty ' + beforeTen());
      if (lastTwoChars < 40) return ('thirty ' + beforeTen());
      if (lastTwoChars < 50) return ('forty ' + beforeTen());
      if (lastTwoChars < 60) return ('fifty ' + beforeTen());
      if (lastTwoChars < 70) return ('sixty ' + beforeTen());
      if (lastTwoChars < 80) return ('seventy ' + beforeTen());
      if (lastTwoChars < 90) return ('eighty ' + beforeTen());
      if (lastTwoChars < 100) return ('ninety ' + beforeTen());
    }
    const beforeThousand = () => {
      if (lastTwoChars === 0) return (beforeTen(thirdCharFromEnd) + ' hundred');
      if (lastTwoChars < 10) return (beforeTen(thirdCharFromEnd) + ' hundred ' + beforeTen());
      return (beforeTen(thirdCharFromEnd) + ' hundred ' + beforeHundred());
    }
    if (number === 0) return 'zero';
    if (number < 10) return beforeTen();
    if (number < 100) return beforeHundred();
    if (number < 1000) return beforeThousand();
    else return 'Write integer number from 0 to 999';
  }
