class Node {
  //next  = null => 현재 노드가 마지막이라는 경우
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  printAll() {
    let currentNode = this.head;
    let text = "[";

    //현재 node가 null이 아닐시 까지 반복한다
    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      //다음 노드가 존재한다면 ", "를 문자열에 추가한다.
      if (currentNode != null) {
        text += ", ";
      }
    }

    // 문자열을 완성하고 "]"를 추가합니다.
    text += "]";
    console.log(text);
  }

  //삽입한 위치의 index, 삽입할 data
  insertAt(index, data) {
    // 인덱스가 유효한 범위를 벗어나면 에러를 발생시킵니다.
    if (index > this.count || index < 0) {
      throw new Error("생성가능한 연결리스트 범위를 넘어갔습니다.");
    }

    //새로운 노드 생성
    let newNode = new Node(data);

    //만약에 index가 0이라면  새로운 노드를 head로 지정
    if (index === 0) {
      // 여기서 this.head는 현재 리스트의 헤드 노드를 가리키고 있습니다. 따라서 새로운 노드인 newNode의 next 속성에 현재의 헤드 노드를 할당함으로써, 새로운 노드가 리스트의 맨 앞에 추가되고 기존의 헤드 노드는 새로운 노드의 다음 노드가 되는 것입니다.
      newNode.next = this.head;
      this.head = newNode;

      //인덱스가 0이 아니라면 삽입할 위치 직전의 인덱스 값을 찾는다.
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  //맨 끝에 새로운 노드를 삽입하는 메서드
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  //주어진 인덱스에 해당하는 노드를 삭제하는 메서드
  // 삭제할 노드의 index
  deleteAt(index) {
    // 인덱스가 유효한 범위를 벗어나면 에러를 발생시킵니다.
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없는 인덱스입니다!");
    }
    // 헤드 노드를 가리키는 변수를 선언합니다.
    let currentNode = this.head;

    // 만약 인덱스가 0이라면, 헤드 노드를 삭제합니다.
    if (index === 0) {
      // 삭제할 노드를 저장합니다.
      let deleteNode = this.head;
      // 헤드를 다음 노드로 변경합니다.
      this.head = this.head.next;
      // 리스트의 노드 개수를 감소시킵니다.
      this.count--;
      // 삭제된 노드를 반환합니다.
      return deleteNode;
    } else {
      // 인덱스가 0이 아니라면, 삭제할 노드의 직전 노드를 찾습니다.
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      // 삭제할 노드를 저장합니다.
      let deleteNode = currentNode.next;
      // 현재 노드의 다음 노드를 삭제할 노드의 다음 노드로 변경합니다.
      currentNode.next = currentNode.next.next;
      // 리스트의 노드 개수를 감소시킵니다.
      this.count--;
      // 삭제된 노드를 반환합니다.
      return deleteNode;
    }
  }

  // 리스트의 마지막 노드를 삭제하는 메서드
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  // 주어진 인덱스에 해당하는 노드를 반환하는 메서드
  //반환할 노드의 index
  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 초과하였습니다.");
    }

    let currentNode = this.head;
    // 주어진 인덱스까지 노드를 탐색합니다.
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 리스트의 모든 요소를 제거하여 리스트를 비우는 메서드
  clear() {
    this.head = null;
    this.count = 0;
  }
}

export { Node, LinkedList };
