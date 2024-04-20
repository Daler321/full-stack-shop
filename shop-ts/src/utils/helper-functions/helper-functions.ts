export function fixRounding(value: number, precision: number): number {
  var power = Math.pow(10, precision);
  return Math.round(value * power) / power;
}

export const discoundPrice = (
  price: number,
  discountPercentage: number
): string => {
  const disPrice = price * ((100 - discountPercentage) / 100);

  // const priceStr = (disPrice - Math.floor(disPrice)).toString();

  // return Math.floor(disPrice).toString() + '.' + priceStr.slice(2, 4);

  return fixRounding(disPrice, 2).toString();
};

export const addZeros = (num: number): string => {
  let str = num.toString();
  switch (str.length) {
    case 1:
      str += '.00';
      break;
    case 3:
      str += '0';
      break;
    default:
      break;
  }
  return str;
};
