// class 생성자 함수를 활용해서 프로토타입 객체 생성
// 해당 프로토타입 객체를 활용 => 인스턴스 객체 생성
// 생성자함수 : 강사 존재여부, 학생 아이디, 수강참여 학생 리스트
// 생성자 함수를 생성!

// 인스턴스 객체 => 강사 존재 여부에 따라 강사의 이름 & 학생 리스트가 콘솔창에 출력되거나 혹은 강사가 존재하지 않는다면 학생 리스트만 콘솔창에 출력되게끔 하는 코드를 작성해보도록 하자

// class 생성자 함수
class lecture {
  constructor(hasTutor, lecID, members) {
    this.hasTutor = hasTutor;
    this.lecID = lecID;
    this.members = members;
  }
}
// 강사가 없을 때
let class1 = new lecture(false, "L001", ["Ahn", "Han", "Park"]);
// 강사가 있을 때
let class2 = new lecture(true, "L002", ["Lee", "Choi", "Kim"]);

let getStudents = (classRoom) => {
  let { hasTutor, lecID, members } = classRoom;
  // console.log(hasTutor);
  // console.log(lecID);
  // console.log(members);
  let tutor;
  let students;
  hasTutor ? ([tutor, ...students] = members) : ([...students] = members);
  return students;
};

console.log(getStudents(class1));
console.log(getStudents(class2));
