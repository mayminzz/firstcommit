import { IValuable } from "./IValuable-interface";

export class Valuable<T> implements IValuable<T> {
  constructor(public value: T) {}
}

export { IValuable };
