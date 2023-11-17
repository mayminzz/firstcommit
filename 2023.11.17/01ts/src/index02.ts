export interface IPerson {
  name: string;
  age: number;
}
export interface ICompany {
  name: string;
  age: number;
}

// default값을 넣게 되면 얘만 메인으로 가져가겠다는 의미 여러가지를 정의해놓았다면 사용하지 않음
export interface INameable {
  name: string;
}

export interface INumberable {
  age: number;
}
