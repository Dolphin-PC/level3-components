export const transStrToNumber = (str: string): number => {
  return Number(str.replace(/[^0-9]/g, ""));
};
