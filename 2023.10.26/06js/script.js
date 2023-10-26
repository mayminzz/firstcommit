/**
pet이라는 이름의 클래스를 만든 후 하나의 인스턴스 객체를 만들어보세요
pet(name, color) run()이라는 메서드를 가지고 있어야 한다. 
run() 매서드는 반려동물의 name속성 값과 함께 "is running"이라는 문자를 알림창에 표시할수 있도록 정의
 */

class pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running`);
  }
}

const pet1 = new pet("여름이", "갈색");
pet1.run();

// 방금 만들었던 pet class 상속받는 cat 이라는 클래스를 만들어 주세요 고양이의 품종을 의미하는 breed 프로퍼티를 추가해주세요 고양이의 이름 색상 품종을 한번에 표기할 수 있는 viewinfo라는 매서드 추가 cat class f를 활용해서 인스턴트 객체를 만드어주시고, viewinfo() 매서드를 실행시켜주세요

class cat extends pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo() {
    alert(
      `이름은 ${this.name}, 샐깔은 ${this.color}, 품종은 ${this.breed}입니당`
    );
  }
}

const cat1 = new cat("여름이", "brown", "요크셔테리어");
cat1.viewInfo();
