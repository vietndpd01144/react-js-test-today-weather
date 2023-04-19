export const capitalizeString = (str: string) => {
  let chars = str.toLowerCase().split('');

  chars[0] = chars[0].toUpperCase();

  return chars.join('');
}

export const percentFormat = (num: number | string) => {
  return `${num}%`
}

export const temperatureFormat = (temp: number | string): string => {
  return `${temp}°C`
}