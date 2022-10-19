export const getRandomInteger = (min: number = 0, max: number = 1): number => {
  return Math.round(min + (max - min) * Math.random());
};


export const roundNearest100th = (num: number): number => {
  return Math.round(num * 100) / 100;
}