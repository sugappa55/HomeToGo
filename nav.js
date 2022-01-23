function SHOW(){
  //  document.querySelector("#hidden").style.border="1px solid red";
    document.querySelector("#hidden").style.right="-1%";
    document.querySelector("#hidden").style.transition="0.5s ease";
    //document.querySelector("#hidden").style.display="block";
    document.getElementById("left").style.display="none";
    document.querySelector("#button").style.display="none"
   // document.querySelector("#hidden").style.width="600px"

}
function HIDE(){
  document.querySelector("#hidden").style.right="-110%";
  document.querySelector("#hidden").style.transition="0.5s ease";
  document.getElementById("left").style.display="block"
  document.querySelector("#button").style.display="block"

}
var arr=document.getElementsByClassName("block");
var array=document.getElementsByClassName("hide");
//console.log(array)
for(var i=0;i<arr.length;i++){
  var count=0;
  var index=i;
  arr[i].addEventListener("click",function(event,index){
    count++;
  if(count%2==1) event.target.nextElementSibling.style.display="block"
  else event.target.nextElementSibling.style.display="none"
 
  })
}
var details={
  images:["https://cdn2.hometogo.net/large/e_v4/64d/4f1/d083f8fcd8b14a96e8b2d2de57.jpg","https://cdn2.hometogo.net/large/e_v4/e83/1ce/038cb4187d76ef03b23eb4a6eb.jpg","https://cdn2.hometogo.net/small/v1/7b6/e95/bcd7e4b5ec96a817a36c482e61.jpg","https://cdn2.hometogo.net/large/v1/9e2/012/d2cbdab18bf97674d00deb9cc0.jpg"],
size:"1440 ft² Apartment.2 bedrooms.2 guests",
price:266,
location:"North myrtle Beach,Sounth Salifornia",
title:"CHARMING APARTMENT FOR BEACH GETAWAY WITH OUTDOOR POOL + OCEAN VIEWS"
}
var details_arr=details.size.split(".")
var main_image=document.getElementById("main_image");
main_image.src=details.images[0];

var title=document.getElementById("title")
title.textContent=details.title

var width=document.getElementById("width")
width.textContent=details_arr[0]

var left_title=document.getElementById("name")
left_title.textContent=details_arr[0]
var left_location=document.getElementById("location")
left_location.textContent=details.location;
var left_details=document.getElementById("details")
left_details.textContent=details.size
var price=document.getElementById("price")
price.textContent=`from $${details.price}`




/* mapping images   */


var images_div=document.getElementById("images");
var arr=details.images
arr.map((elem)=>{
  var div=document.createElement("div")
var img=document.createElement("img");
img.src=elem;
img.addEventListener("click",()=>{
  main_image.src=elem
})
div.append(img)
images_div.append(div)
})

/* mapping images   */


/*   count div    */


var people_count=document.getElementById("people_count")
//console.log(people_count.textContent)
const limit=+(details_arr[2][0])*2
var people=0;
var adults=0;
var childs=0;



function child(event){
  let Event=event.target.textContent;
  if(Event=="-"){
         if(childs>0){
           people--;
           childs--;
           event.target.nextElementSibling.textContent=childs;
           people_count.textContent=`${people} Guests (${adults} adults and ${childs} childs )`
         }
    }

    else{
      if(childs<limit-adults && childs<=people&&people<=limit){
        people++
       childs++;
       event.target.previousElementSibling.textContent=childs
       people_count.textContent=`${people} Guests (${adults} adults and ${childs} childs )`
      }
      else{
        alert("people limit exceeded")
      }
     } 
    }


    function adult(event){
      let Event=event.target.textContent;
      if(Event=="-"){
             if(adults>0){
               people--;
               adults--;
               event.target.nextElementSibling.textContent=adults;
               people_count.textContent=`${people} Guests (${adults} adults and ${childs} childs )`
             }
        }
    
        else{
          if(adults<limit-childs && adults<=people&&people<=limit){
            people++
           adults++;
           event.target.previousElementSibling.textContent=adults
           people_count.textContent=`${people} Guests (${adults} adults and ${childs} childs )`
          }
          else{
            alert("people limit exceeded")
          }
         } 
        }

/*    count div    */



/*        date        */


let date_set=false
let date_count=0;
var date1=null
var date2=null
var time= new Date()
var current_date=time.getDate();
function date(event,value){
  //console.log(event.target.id,value)
  if(event.target.id=="date1")date1=value;
  else date2=value
date_count++
 if(date_count>=2){
//console.log(current_date >= +(date1[3]+date1[4]));
if(  (current_date <= +(date1[3]+date1[4]))&&  (+(date1[3]+date1[4]) < +(date2[3]+date2[4])) && ( (+(date2[3]+date2[4]))-(+(date1[3]+date1[4])) >=1)){
alert("dates set")
console.log(current_date,  +(date1[3]+date1[4]), +(date2[3]+date2[4]))
date_set=true


 }
 else {
   alert("invalid dates");
   console.log(current_date,(+(date1[3]+date1[4]) , +(date2[3]+date2[4])))
   date_count=0
 }
}

}


/*       date        */
document.querySelector("iframe").src=`https://maps.google.com/maps?q=${details.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`

/*     final function      */


function theGoodPart(){
  alert("fetching the details,please wait")
 setTimeout(function(){
  if(date_set){
    details.check_in=date1;
    details.check_out=date2;
    if(people>0){
      details.People=people;
      details.adults=adults;
      details.childs=childs;
      localStorage.setItem("stay_details",JSON.stringify(details))
      console.log(details)
      alert("details fetching successful")
    }
    else alert("please set no.of adults & childs")
  }
  else alert("please set date")
 },3000)
}



/*      final function         */



 /*  JQUERY   */

$(document).ready(function(){
  $("#date1").datepicker()
  $("#date2").datepicker()


$("#count_div").click(function(){
  $("#display_count_div").toggle()
})


})


 /*  JQUERY   */

