function login()
{
    var email=document.getElementById("Uname").value;
    var pass=document.getElementById("Pass").value;


    var email1=localStorage.getItem("email");
    var pass1=localStorage.getItem("password");

    if(email==email1 && pass==pass1)
    {
        window.open("mainpage.html")
    }

    else
    {
        alert("Password is not correct");
    }
}
function validateform()
{

var name=document.myform.form3Example1cg.value;  
    if (name==null || name=="")
    {  
        alert("Name can't be blank"); 
        return false;  
    }

var x=document.myform.form3Example3cg.value;
if (x==null || x=="")
    {  
        alert("email can't be blank");  
        return false;  
    }

var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  

var firstpassword=document.myform.form3Example4cg.value;  
var secondpassword=document.myform.form3Example4cdg.value;  

if(firstpassword==null || firstpassword=="")
{
    alert("Password can't be blank"); 
    return false;
}

if(secondpassword==null || secondpassword=="")
{
    alert("Password can't be blank"); 
    return false;
}



  
if(firstpassword==secondpassword)
{  
    var name=document.myform.form3Example1cg.value;
var x=document.myform.form3Example3cg.value;
var secondpassword=document.myform.form3Example4cdg.value;


localStorage.setItem("name",name);
localStorage.setItem("email",x);
localStorage.setItem("password",secondpassword);


// const data =e =>
// {
//     let formdata=JSON.parse(localStorage.getItem('formdata')) || [];

//     formdata.push
//     (
       
//         name=document.myform.form3Example1cg.value,
//         x=document.myform.form3Example3cg.value,
//      secondpassword=document.myform.form3Example4cdg.value
    
//     );

//     localStorage.setItem('formdata',JSON.stringify(formdata));
    
// }
return true;  
}  
else
{
alert("password must be same!");  

return false;  
} 

}