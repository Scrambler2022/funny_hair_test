var num=100;
var str="200.3";
var num2=parseInt(str);

document.write(num+str,"<br>");

var  num2 =parseInt(str); // 정수형 타입으로 형변환
var  num4 =parseFloat(str);  // 실수형 타입으로 형변환
var  num3 =Number(str);  // 정수형,실수형 모든 타입으로 형변환
document.write(num+num2,"<br>");
document.write(num+num3,"<br>");