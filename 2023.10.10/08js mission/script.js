// 알고리즘 순서
/*
1. 사용자로부터 화씨온도를 받기
2. 화씨온도 정의
3. 섭씨온도 정의
4. 
*/

// let fah = parseFloat(prompt("변화할 화씨온도를 입력해주세요!"));
// let cel = ((fah - 32) / 1.8).toFixed(1);
// alert(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`);

//  1인치는 2.54cm
// let inc = parseFloat(prompt("변화할 인치를 입력해주세요."));
// let cm = ((inc) * 2.54).toFixed(1); 
// alert(`${inc}인치는 ${cm}cm입니다.`)

let inc = parseFloat(prompt("변화할 인치를 입력하세요."));
let cm = (inc * 2.54).toFixed(2);
alert(`${inc}인치는 ${cm}cm입니다.`)