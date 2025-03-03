export default function conversionData(data: string): string {
  const reversData = reverseString(data);
  console.log('Reversed data:', reversData);
  if(reversData.includes('.')) {
    return reversData.replace(/\./g, '-');
  } else {
    return reversData.replace(/-/g, '.');
  }
}

function reverseString(str: string): string {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
