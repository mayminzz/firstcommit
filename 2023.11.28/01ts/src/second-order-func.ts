import { FirstOrderFunc, SecondOrderFunc } from "./function-signiture";

// const add:SecondOrderFunc<number, number> = (x:number):FirstOrderFunc<number, number> => (y:number):number => {return x + y};
export const add:SecondOrderFunc<number, number> = (x:number):FirstOrderFunc<number, number> => (y:number):number =>  x + y;
