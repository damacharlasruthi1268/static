// function loadJSON(file) {
//   return new promise(resolve,reject)=>{
//     return fetch(file).then(responce=>{
//       if(responce.ok){
//         resolve(response).json());
//       }
//       else{
//         reject(new Error('error'));
//       }
//
//     })
//   })
// }
// var fetchData=loadJSON("dynamic.json")
// fetchData.then(data=>{
//   console.log(data);
// })
// var child2=document.querySelector("#child2")
// function career(car){
//   var h2=document.createElecment("h1")
//   h2.textContent="career objective";
//   child2.appendChild(h2);
//
//   var heading=document.CreateElement()
//   child2.appendChild(heading);
//
//     var p=document.createElement("p")
//     p.textContent=car.info;
//       child2.appendChild(p);
//     }
//
//
// }
function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadyStatechange=function(){
    if(xhr.readtState===4 && xhr.status=="200"){
      callback(xhr.responseText);

    }
  };
  xhr.send(null);
}
getfile("dynamic.json",function(text){
Let data=JSON.parse(text);
console.log(data);
})
var child2=document.querySelector("#child2")
function career(c){
  var chead=document.createElement("h2");
  chead.textContent="career objective"
  child2.appendChild(chead);

  var chr=document.createElement("hr")
  child2.appendChild(chr);

  var cp=document.createElement("p")
  cp.textContent=c.info;
  child2.appendChild(cp);

}
function education(edu){
  var ehead=document.createElement("h2")
  ehead.textContent="educational details";
  child2.appendChild(ehead);

  var ehr=document.createElement("hr")
  child2.appendChild(ehr);


  Let etable=document.createElement("table");
  etable.border="1";

  var tr1="<tr><td>degree</td><td>institution</td><td>year of passing</td><td>gpa</td></tr>;"
  var tr2="";
  for(i=0;i<edu.length;i++){
    tr2=tr2+1+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institution+"</td><td>"+edu[i].yearofpassing+0"</td><td>"+edu[i].percentation+"</td></tr>";


  }
  etable.innerHTML=tr1+tr2;
  child2.appendchild(etable);
}
