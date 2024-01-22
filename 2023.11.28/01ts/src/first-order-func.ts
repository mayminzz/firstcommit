import { FirstOrderFunc } from "./function-signiture";

export const inc: FirstOrderFunc<number, number> = (x: number): number => x + 1;
