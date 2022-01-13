module.exports = function toReadable (number) {
    const strNumber = number.toString();
    const lastChar = parseInt(strNumber[strNumber.length - 1]);
    const penultimateChar = parseInt(strNumber[strNumber.length - 2]);
    const lastTwoChars = parseInt(strNumber[strNumber.length - 2] + strNumber[strNumber.length - 1]);
    const beforeTen = () => {
      switch (lastChar) {
        case 1:
          return 'one';
        case 2:
          return 'two';
        case 3:
          return 'three';
        case 4:
          return 'four';
        case 5:
          return 'five';
        case 6:
          return 'six';
        case 7:
          return 'seven';
        case 8:
          return 'eight';
        case 9:
          return 'nine';
      }
    }
    const beforeHundred = () => {
      switch (lastTwoChars) {
        case 11:
          return 'eleven';
        case 12:
          return 'twelve';
        case 13:
          return 'thirteen';
        case 14:
          return 'fourteen';
        case 15:
          return 'fifteen';
        case 16:
          return 'sixteen';
        case 17:
          return 'seventeen';
        case 18:
          return 'eighteen';
        case 19:
          return 'nineteen';
      }
    }
    const beforeThousand = () => {
  
    }
    if (number === 0) return 'zero';
    if (number < 10) return beforeTen();
    if (number < 100) return beforeHundred();
    if (number < 1000) return beforeThousand();
  }
