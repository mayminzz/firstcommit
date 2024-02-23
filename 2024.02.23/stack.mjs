import { LinkedList } from "./LinkedList.mjs";
class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }
}

export { Stack };
