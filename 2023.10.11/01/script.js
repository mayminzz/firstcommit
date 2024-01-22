// let str = "<table border=`1`>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// // table과 tr은 들어가는 요소가 있으니까 나눠준것
// str += "</tr>";
// str += "</table>";
// document.write(str);

// 할당 (대입)연산자 : += -= *= /= %=
let str = `<table border=1>`;;
str += "<tr>";
str +="<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str +="</table>";
document.write(str);