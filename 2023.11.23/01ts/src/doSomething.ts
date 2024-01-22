import { ResultType } from "./resultType";

export const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs...");
  } catch (e) {
    return [false, e.message];
  }
};
