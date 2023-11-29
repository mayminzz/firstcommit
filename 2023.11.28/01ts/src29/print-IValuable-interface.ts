import { IValuable } from "./IValuable-interface";

// 제네릭 타입의 제약요건
// extends 상속
export const printValueT = <Q, T extends IValuable<Q>>(o: T) =>
  console.log(o.value);

export{IValuable}
