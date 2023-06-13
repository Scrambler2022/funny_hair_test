//은하철도 구구구단
var i=2;
var j=1;
<table>
    <tr>
        <td>2</td>
        <td>*</td>
        <td>1</td>
        <td>=</td>
        <td>2</td>
    </tr>
</table>
var htmlData = "<table>";
document.write(i + " * " + j + " = " +(i*j), "<br>");
for (var i=2; i<10; i++) {
    //document.write("[ "+ i +" 단 ]","<br>");
    for (var j=1; j<10; j++) {
        htmlData += "<tr>";
        htmlData += "<td>+i+</td>";
        htmlData += "<td>*</td>";
        htmlData += "<td>+j+</td>";
        htmlData += "<td>=</td>";
        htmlData += "<td>+(i+j)+</td>";
        htmlData += "</td>";
        //document.write(i + " * " + j + " = " +(i*j), " ");
    }
}
htmlData +="</table>";
document.write(htmlData);
//