//  문자열을 배열로 변환 하는 메서드 split

export const split = (str: string, delim: string = "_"): string[] =>
  str.split(delim);
