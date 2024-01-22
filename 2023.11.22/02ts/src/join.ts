// 배열에서 join이라는 메서드
// split <-> 배열의 아이템으로 구분되어 있는 요소들 하나로 합쳐서 문자여롤 ㅁ나들어주는 메서드 :join

export const join = (strArray: string[], delim: string = ""): string =>
  strArray.join(delim);
