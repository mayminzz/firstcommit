// const range = (from: number, to: number): number[] => {
//   return from < to ? [from, ...range(from + 1, to)] : [];
// };


export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];
