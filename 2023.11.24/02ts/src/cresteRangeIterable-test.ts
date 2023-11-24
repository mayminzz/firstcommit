import { createRangeIterable } from "./cresteRangeIterable";

const iterator = createRangeIterable(1, 4);
while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}
