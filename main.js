function getfile(file,callback){
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
     if (xhr.readyState === 4 && xhr.status == "200") {
       callback(xhr.responseText);
     }
   };
   xhr.send();
}
getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
  eduinfo(data.education);
  skills(data.skills);
});

var main=document.querySelector('.flex-parent');

function basicinfo(basic){
 var profile=document.getElementById("basics");
 var img=document.createElement("img");
 img.classList.add("profile_img","profile_circle");
 img.src=basic.photo;
 profile.appendChild(img);
 var name=document.createElement("h2");
 name.innerHTML=basic.name;
 profile.appendChild(name);
 var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var email=document.createElement("h3");
   email.innerHTML=basic.email;
   profile.appendChild(email);

}
var right=document.createElement("div");
right.classList.add("content-child");

main.appendChild(right);
//edu div
var e1=document.createElement("div");
e1.classList.add("edu");
right.appendChild(e1);

var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.textContent=("Education Details");
e1.appendChild(h1);

function eduinfo(education){
  for(i in education){
    //course
    var h2=document.createElement("h3");
    h2.classList.add("c1");
    h2.textContent=education[i].course;
    h1.appendChild(h2);

    //college creation
    var h3=document.createElement("h3");
    h3.classList.add("c1");
    h3.textContent=education[i].college;
    h2.appendChild(h3);
    //Data getting
      var ul=document.createElement("ul");
      ul.classList.add("c1");
      h3.appendChild(ul);
    //for(j in eduaction.data){
      var li=document.createElement("li");
      li.textContent=education[i].data;
  //  }
    ul.appendChild(li);
  }
}
function skills(food){
  var table=document.createElement("table");
  var row="";
  for(var k=0;k<food.length;k++){
    row+="<tr><td><strong>"+food[k].name+"</strong></td><td>"+food[k].info+"</td></tr>";
  }
  table.innerHTML=row;
  right.appendChild(table);
}
