import { LinkedList } from "./LinkedList.mjs";
class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  //  메서드는 스택에 데이터를 추가하는 역할을 합니다. 이때 링크드 리스트의 insertAt() 메서드를 사용하여 데이터를 스택의 맨 위에 추가합니다. 스택은 데이터를 위에서부터 쌓아 올리는 구조이므로, insertAt(0, data)를 사용하여 새로운 데이터를 스택의 맨 위에 삽입합니다.
  push(data) {
    this.list.insertAt(0, data);
  }
}

export { Stack };
