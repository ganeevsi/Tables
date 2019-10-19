
function fun()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var add=document.getElementById("add").value;
    var table=document.getElementById("mytable");
    
    var row=table.insertRow(1);
    var a=row.insertCell(0);
    var b=row.insertCell(1);
    var c=row.insertCell(2);
    var d=row.insertCell(3);

    a.innerHTML=name;
    b.innerHTML=email;
    c.innerHTML=phone;
    d.innerHTML=add;
    

}
