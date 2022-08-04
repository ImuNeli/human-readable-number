module.exports = function toReadable (number) {
  const zero = 'zero';
  const firstTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['', 'hundred', 'thousand', 'million', 'billion', 'trillion'];
  const numberString = number.toString();

  if (number === 0) {
      return zero;
  }

  if (number < 20) {
      return firstTwenty[number];
  }

  if (numberString.length === 2) {
      return (tens[numberString[0]] + ' ' + firstTwenty[numberString[1]]).trim();
  }

  if (numberString.length === 3) {
      if (numberString[1] === '0' && numberString[2] == '0') return firstTwenty[numberString[0]] + ' hundred';
      else {
          return (firstTwenty[numberString[0]] + ' ' + hundreds[1] + ' ' + toReadable(+(numberString[1] + numberString[2]))).trim();
      }
  }
}
