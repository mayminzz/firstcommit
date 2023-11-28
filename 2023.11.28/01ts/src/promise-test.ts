Promise.reject(new Error("에러 발생 사유")).catch((err: Error) =>
  console.log("err:", err.message)
);
Promise.resolve(1)
  .then((value: number) => {
    console.log(value);
    return Promise.resolve(true);
  })
  .then((value: boolean) => {
    console.log(value);
    return [1, 2, 3];
  })
  .then((value: number[]) => {
    console.log(value);
    return { name: "KWON", age: 24 };
  })
  .then((value: { name: string; age: number }) => {
    console.log(value);
  });

  // 리턴값을 받아서 다음 then에서 출력이 된다.