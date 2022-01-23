var popup_div =document.getElementById("s11")
// function del(){
//     console.log("here")
//     document.getElementById("s5").value=""
// }


//  function popup() {

//  document.getElementById("s11").innerHTML=""
//     var div1 = document.createElement("div")
//     div1.setAttribute("id","s13")
//     popup_div.append(div1)

    
//  }
 function popup() {

    window.location.href="search.html"
 }


 var propData= JSON.parse(localStorage.getItem("prop"))
 console.log(propData)
//  display(propData)

 var data = [
   {
     image:["https://cdn2.hometogo.net/large/v1/edf/c5d/bd75661718a313504124c6ca88.jpg",
     "https://cdn2.hometogo.net/large/v1/49e/83c/46fcd121790836dff839a40eba.jpg",
    "https://cdn2.hometogo.net/large/v1/001/09d/18f7489cf3acace79471533452.jpg",
    "https://cdn2.hometogo.net/large/v1/7c3/522/5866f39321409700c84c4b458e.jpg",
    "https://cdn2.hometogo.net/large/v1/d69/893/2816da7cbfd619c302f01545d3.jpg"],
        imgUrl:"https://cdn2.hometogo.net/large/v1/edf/c5d/bd75661718a313504124c6ca88.jpg",
       feature:"1440 ft² Apartment.2 bedrooms.2 guests",
       name1:"nice resort in fort Myers with pool,Barbecue",
        price:"300",
       location:"📍panama City Beach,Bay Country",
 
   },
   {
     image:["https://cdn2.hometogo.net/medium/v1/029/cf7/5b88f93dd5ea48f54fba4dba3b.jpg",
     "https://cdn2.hometogo.net/large/v1/99c/58a/cd98a09a271fb1b9b802d85853.jpg",
     "https://cdn2.hometogo.net/large/v1/9cb/9b5/dbbce3ce1b830850b0d4e38dc0.jpg",
     "https://cdn2.hometogo.net/large/v1/031/de4/375ef8c07cbac029d276af4c18.jpg",
     "https://cdn2.hometogo.net/large/v1/cd3/75b/030ebd5155f32bada907c663eb.jpg"],
    imgUrl:"https://cdn2.hometogo.net/medium/v1/029/cf7/5b88f93dd5ea48f54fba4dba3b.jpg",
    feature:"1440 ft² Apartment.1 bedrooms.2 guests",
    name1:"Resort in city Beach with pool ",
    price:"50",
    location:" 📍Lee country",

},
 {
   image:["https://cdn2.hometogo.net/medium/v1/51f/191/6ee865bbe9a550a2392126fcec.jpg",
   "https://cdn2.hometogo.net/large/v1/c60/348/145d02586b7ba370ea06ffe776.jpg",
   "https://cdn2.hometogo.net/large/v1/777/016/744e2bf2875eaeb7283cc12576.jpg",
   "https://cdn2.hometogo.net/large/v1/e0b/952/8050f8dc88c5d70ef01b5a04c6.jpg",
   "https://cdn2.hometogo.net/large/v1/88d/c6b/a1c71918bafd17c3db60bde107.jpg"],
  imgUrl:"https://cdn2.hometogo.net/medium/v1/51f/191/6ee865bbe9a550a2392126fcec.jpg",
  feature:"1440 ft² Apartment.3 bedrooms.2 guests",
  name1:"The Commodore",
  price:"100",
  location:"📍 In florida",

}
,
{ image:["https://cdn2.hometogo.net/medium/v1/266/fcf/fc435c1f46d9960593950aa201.jpg",
  "https://cdn2.hometogo.net/large/v1/38a/ad0/98cca26da9b0ac6ebec83ea50a.jpg",
  "https://cdn2.hometogo.net/large/v1/68d/d27/c3e6225fe072a9a19b415d188d.jpg",
  "https://cdn2.hometogo.net/large/v1/845/d44/cad2fa829a2cf3b97f15aeee37.jpg",
  ""],
  imgUrl:"https://cdn2.hometogo.net/medium/v1/266/fcf/fc435c1f46d9960593950aa201.jpg",
  feature:"1440 ft² Apartment.2 bedrooms.2 guests",
  name1:"Grand Panama Beach Resort By Resorts",
  price:"120",
  location:"📍 Florida Beach",

},
{ image:["https://cdn2.hometogo.net/medium/v1/8af/f36/ea62649353210a1c6643c64faf.jpg"],
  imgUrl:"https://cdn2.hometogo.net/medium/v1/8af/f36/ea62649353210a1c6643c64faf.jpg",
  feature:"1440 ft² Apartment.6 bedrooms.7 guests",
  name1:"Grand Resort with barbecue",
   price:"101",
  location:"📍 Florida Mountain ",

},
{ image:[],
  imgUrl:"https://cdn2.hometogo.net/large/v1/bca/f8c/a9ac80dcdb367514108b1e5a38.jpg",
  feature:"1440 ft² Apartment.2 bedrooms.4 guests",
  name1:"Grand Resort with barbecue",
   price:"100",
  location:"📍 Florida Mountain ",

}
,{ image:["https://cdn2.hometogo.net/large/v1/71a/2cd/fd6db9a0b9d13bfdcaf07e32f2.jpg",
  "https://cdn2.hometogo.net/large/v1/f2d/d50/56954014f257003029a76b639b.jpg",
  "https://cdn2.hometogo.net/large/v1/70f/d7a/acc4e9d0d6aae52cfc3aaa5c9f.jpg",
  "https://cdn2.hometogo.net/large/v1/9db/512/dc76a26a1ad9bf41f3b15abd9b.jpg",
  "https://cdn2.hometogo.net/large/v1/3e7/abc/ad3bfe12ff39a644359ba8d32f.jpg"],

  imgUrl:"https://cdn2.hometogo.net/large/v1/71a/2cd/fd6db9a0b9d13bfdcaf07e32f2.jpg",
  feature:"1440 ft² Apartment.1 bedrooms.2 guests",
  name1:"Villa in Poinciana with pool & Barbecue",
   price:"487",
  location:"📍 Poinciana Polk Country",

},
{ image:["https://cdn2.hometogo.net/large/v1/719/b6e/d2a8b3c9cd66e8d24fa4c62e74.jpg",
   "https://cdn2.hometogo.net/large/v1/838/be8/76fcf3d8af2edb12f3344b25dd.jpg",
   "https://cdn2.hometogo.net/large/v1/fac/3f3/7f7021b4e485d9b5a88e8f8d82.jpg",
   "https://cdn2.hometogo.net/medium/v1/eba/8ab/194dfdec07f7084b42907f77ee.jpg",
   "https://cdn2.hometogo.net/large/v1/4f8/c16/ad8a6a47a6537f5d5e5275bd9b.jpg"],
  imgUrl:"https://cdn2.hometogo.net/large/v1/719/b6e/d2a8b3c9cd66e8d24fa4c62e74.jpg",
  feature:"1440 ft² Apartment.3 bedrooms.2 guests",
  name1:"Grand Resort with barbecue",
   price:"1008",
  location:"📍 JCaksonville ,Duval Country",

},
{ image:["https://cdn2.hometogo.net/large/v1/ab1/9ec/d0db6bf67e708b6150cc8baee0.jpg",
  "https://cdn2.hometogo.net/large/v1/f39/7a3/497c6146f2f2dc8f5d4eedda9f.jpg",
  "https://cdn2.hometogo.net/large/v1/e6c/967/936a114d1b4327e655c4e2d773.jpg",
  "https://cdn2.hometogo.net/large/v1/5be/6b4/235c95692c690983357937f28d.jpg",
  "https://cdn2.hometogo.net/large/v1/d26/c00/d9f1ee615f0e5a4cfbb93edb49.jpg"],
  imgUrl:"https://cdn2.hometogo.net/large/v1/ab1/9ec/d0db6bf67e708b6150cc8baee0.jpg",
  feature:"1440 ft² Apartment.5 bedrooms.6 guests",
  name1:"Pirate's Bay Marina",
   price:"1001",
  location:"📍 Fort Walton Beach  ",

},
{ image:["https://cdn2.hometogo.net/large/v1/ce2/8e7/356b2eb85a5b4e44c799c09fea.jpg",
 "https://cdn2.hometogo.net/large/v1/e26/dd8/aa34b4f0e3a725eb03b11edb68.jpg",
 "https://cdn2.hometogo.net/large/v1/20f/7f4/a73ff420a4b5bff53d94fd43d1.jpg",
 "https://cdn2.hometogo.net/large/v1/090/d93/24e5f35a553f0c3ba9f6f9e1fe.jpg",
 "https://cdn2.hometogo.net/large/v1/253/543/c601ef27e17527379bf2c62cbf.jpg",],

  imgUrl:"https://cdn2.hometogo.net/large/v1/ce2/8e7/356b2eb85a5b4e44c799c09fea.jpg",
  feature:"1440 ft² Apartment.3 bedrooms.2 guests",
  name1:"House in Panama city Beach ",
   price:"3267",
  location:"📍 panama beach bay country ",

},
{ image:["https://cdn2.hometogo.net/large/v1/1ae/b8c/d50e0a5c3caf9d90b84a3b0a6b.jpg",
  "https://cdn2.hometogo.net/large/v1/127/8ed/5e45324e32d78c851c8cd6f6bf.jpg",
  "https://cdn2.hometogo.net/large/v1/b86/ea5/c88c73fca740d1981ede32cdbf.jpg",
  "https://cdn2.hometogo.net/large/v1/ece/5df/e4b2f2cea0dda4146c08eb4c87.jpg"],
  imgUrl:"https://cdn2.hometogo.net/large/v1/1ae/b8c/d50e0a5c3caf9d90b84a3b0a6b.jpg",
  feature:"1440 ft² Apartment.2 bedrooms.4 guests",
  name1:"Grand Resort with barbecue",
   price:"2567",
  location:"📍 Kissimmee Osceola Country ",

}


 ]
 display(data,propData)
 localStorage.setItem("search",JSON.stringify(data))
//  console.log(data)

 
 

// my api key =AIzaSyDHq_hS4EEQjpU1_ce4lTmLDcDc1zkwbIs

var data1 = [
  { image:["https://cdn2.hometogo.net/large/v1/ab1/9ec/d0db6bf67e708b6150cc8baee0.jpg",
  "https://cdn2.hometogo.net/large/v1/f39/7a3/497c6146f2f2dc8f5d4eedda9f.jpg",
  "https://cdn2.hometogo.net/large/v1/e6c/967/936a114d1b4327e655c4e2d773.jpg",
  "https://cdn2.hometogo.net/large/v1/5be/6b4/235c95692c690983357937f28d.jpg",
  "https://cdn2.hometogo.net/large/v1/d26/c00/d9f1ee615f0e5a4cfbb93edb49.jpg"],
  imgUrl:"https://cdn2.hometogo.net/large/v1/ab1/9ec/d0db6bf67e708b6150cc8baee0.jpg",
  feature:"1440 ft² Apartment.3 bedrooms.4 guests",
  name1:"Pirate's Bay Marina",
   price:"1001",
  location:"📍 N.I.T1 faridabad",

},
{ image:["https://cdn2.hometogo.net/large/v1/ce2/8e7/356b2eb85a5b4e44c799c09fea.jpg",
 "https://cdn2.hometogo.net/large/v1/e26/dd8/aa34b4f0e3a725eb03b11edb68.jpg",
 "https://cdn2.hometogo.net/large/v1/20f/7f4/a73ff420a4b5bff53d94fd43d1.jpg",
 "https://cdn2.hometogo.net/large/v1/090/d93/24e5f35a553f0c3ba9f6f9e1fe.jpg",
 "https://cdn2.hometogo.net/large/v1/253/543/c601ef27e17527379bf2c62cbf.jpg",],

  imgUrl:"https://cdn2.hometogo.net/large/v1/ce2/8e7/356b2eb85a5b4e44c799c09fea.jpg",
  feature:"1440 ft² Apartment.1 bedrooms.2 guests",
  name1:"House in Panama city Beach ",
   price:"3267",
  location:"📍 town park faridabad ",

},
{ image:["https://cdn2.hometogo.net/large/v1/1ae/b8c/d50e0a5c3caf9d90b84a3b0a6b.jpg",
  "https://cdn2.hometogo.net/large/v1/127/8ed/5e45324e32d78c851c8cd6f6bf.jpg",
  "https://cdn2.hometogo.net/large/v1/b86/ea5/c88c73fca740d1981ede32cdbf.jpg",
  "https://cdn2.hometogo.net/large/v1/ece/5df/e4b2f2cea0dda4146c08eb4c87.jpg"],
  imgUrl:"https://cdn2.hometogo.net/large/v1/1ae/b8c/d50e0a5c3caf9d90b84a3b0a6b.jpg",
  feature:"1440 ft² Apartment.4 bedrooms.12 guests",
  name1:"Grand Resort with barbecue",
   price:"2567",
  location:"📍 faridabad ",

},
{
  image:["https://cdn2.hometogo.net/large/v1/edf/c5d/bd75661718a313504124c6ca88.jpg",
  "https://cdn2.hometogo.net/large/v1/49e/83c/46fcd121790836dff839a40eba.jpg",
 "https://cdn2.hometogo.net/large/v1/001/09d/18f7489cf3acace79471533452.jpg",
 "https://cdn2.hometogo.net/large/v1/7c3/522/5866f39321409700c84c4b458e.jpg",
 "https://cdn2.hometogo.net/large/v1/d69/893/2816da7cbfd619c302f01545d3.jpg"],
     imgUrl:"https://cdn2.hometogo.net/large/v1/edf/c5d/bd75661718a313504124c6ca88.jpg",
    feature:"1440 ft² Apartment.2 bedrooms.2 guests",
    name1:"nice resort in fort Myers with pool,Barbecue",
     price:"300",
    location:"📍faridabad(Haryana)",

}


 ]
 

 var input = document.getElementById("s5");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   search()
  }
});
async function search(){
  document.querySelector("#s15").innerHTML=""
 
  var city =document.getElementById("s5").value;
  var map = document.getElementById("s16");
  map.innerHTML = "";
  let frame = document.createElement("iframe");
  frame.setAttribute("src", `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
  frame.setAttribute("id", "frame")
  map.append(frame);
  data1.map(function(elem){

    var newD =document.createElement("div");
    newD.setAttribute("id","new")
    
       var div =document.createElement('div')
       div.setAttribute("id","s17")
      var div2 =document.createElement("div")
      div2.setAttribute("id","s19");
    
      var div3 =document.createElement("div");
      div3.setAttribute("id","s25")

      
      var image =document.createElement('img')
         image.setAttribute("src",elem.imgUrl)
         image.setAttribute("id","s18");
         var btn1 =document.createElement("button")
         btn1.setAttribute("id","s20");
         btn1.style.marginLeft="10px"
         btn1.textContent="$"+elem.price;
  
                //  var p2 =document.createElement('p')
                //    p2.setAttribute("id","s22")
                //    p2.textContent ="free cancellation"
                //    p2.style.marginLeft="10px";
                   
                   var p3 =document.createElement('button')
                   p3.setAttribute("id","s23")
                   p3.textContent ="Details"
                   p3.style.marginLeft="10px";
                   p3.addEventListener("click",fun)
                   function fun(){
                     window.location.href="details.html"
                     localStorage.setItem("hotel_data",JSON.stringify(elem))

                   
                   }
  
                   var p4 =document.createElement('h')
                   p4.setAttribute("id","s21")
                   p4.textContent =elem.name1
                   p4.style.marginLeft="10px";
                   
                   var btn2 =document.createElement("button");
                   btn2.setAttribute("id","s24")
                   btn2.textContent="View deal"
            var name =document.createElement('p')
            name.textContent=elem.feature
            name.style.marginLeft="10px"
            name.style.marginTop="0px"
  
            var ney =document.createElement("div")
            ney.textContent="🤍"
            ney.setAttribute("class","dil")
  
            var location  =document.createElement("p")
            location.textContent=elem.location+" "+"(✔️free Cancellation)";
            // location.style.marginLeft="10px"
            location.setAttribute("class","location")
  
             div3.append(p3,ney,btn2)
         div.append(image)
         div2.append(btn1,name,p4,location,div3)
         newD.append(div,div2)
         document.querySelector("#s15").append(newD)
  
       
   })
  if(city=="florida"){
    document.querySelector("#s15").innerHTML=""
     map.innerHTML = ""
  let frame = document.createElement("iframe");
  frame.setAttribute("src", `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
  frame.setAttribute("id", "frame")
  map.append(frame);
  data.map(function(elem){

    var newD =document.createElement("div");
    newD.setAttribute("id","new")
    
       var div =document.createElement('div')
       div.setAttribute("id","s17")
      var div2 =document.createElement("div")
      div2.setAttribute("id","s19");
    
      var div3 =document.createElement("div");
      div3.setAttribute("id","s25")

      
      var image =document.createElement('img')
         image.setAttribute("src",elem.imgUrl)
         image.setAttribute("id","s18");
         var btn1 =document.createElement("button")
         btn1.setAttribute("id","s20");
         btn1.style.marginLeft="10px"
         btn1.textContent="$"+elem.price;
  

         function fun(){
          window.location.href="details.html"
          localStorage.setItem("hotel_data",JSON.stringify(elem))

           console.log("baba")
         }
                   var p3 =document.createElement('button')
                   p3.setAttribute("id","s23")
                   p3.textContent ="Details";
                   p3.addEventListener("click",fun)
                   
                   p3.style.marginLeft="10px";
  
                   var p4 =document.createElement('h')
                   p4.setAttribute("id","s21")
                   p4.textContent =elem.name1
                   p4.style.marginLeft="10px";
                   
                   var btn2 =document.createElement("button");
                   btn2.setAttribute("id","s24")
                   btn2.textContent="View deal"
            var name =document.createElement('p')
            name.textContent=elem.feature
            name.style.marginLeft="10px"
            name.style.marginTop="0px"
  
            var ney =document.createElement("div")
            ney.textContent="🤍"
            ney.setAttribute("class","dil")
  
            var location  =document.createElement("p")
            location.textContent=elem.location+" "+"(✔️free Cancellation)";
            // location.style.marginLeft="10px"
            location.setAttribute("class","location")
  
             div3.append(p3,ney,btn2)
         div.append(image)
         div2.append(btn1,name,p4,location,div3)
         newD.append(div,div2)
         document.querySelector("#s15").append(newD)
  
       
   })

  }

}  
function del(){
  console.log("here")
  document.getElementById("s5").value=""
 

}
function handlePricesort(){


  var sort =document.getElementById("priceSort").value
  console.log(sort)
  if(sort=="low"){
   
  
    var sorted_array=data.sort(function(a,b){

      return a.price-b.price

    })
    console.log(sorted_array)
    display(sorted_array)
  }
  else {
    
    var sorted_array=data.sort(function(a,b){

      return b.price-a.price

    })
    // console.log(sorted_array)
    display(sorted_array)
  
  }
  

}

function display(data,propData){
   document.querySelector("#s15").innerHTML=null
  console.log(data,propData)
  data.map(function(elem){
   
    var newD =document.createElement("div");
    newD.setAttribute("id","new")
    
       var div =document.createElement('div')
       div.setAttribute("id","s17")
      var div2 =document.createElement("div")
      div2.setAttribute("id","s19");
    
      var div3 =document.createElement("div");
      div3.setAttribute("id","s25")
  
    //  var i=0
      
      var image =document.createElement('img')
         image.setAttribute("src",elem.imgUrl)
         image.setAttribute("id","s18");
         var btn1 =document.createElement("button")
         btn1.setAttribute("id","s20");
         btn1.style.marginLeft="10px"
         btn1.textContent="$"+elem.price
  
                   
                   var p3 =document.createElement('button')
                   p3.setAttribute("id","s23")
                   p3.textContent ="Details"
                   p3.style.marginLeft="10px";
                   p3.addEventListener("click",fun)
                   function fun(){
                    window.location.href="details.html"
                    localStorage.setItem("hotel_data",JSON.stringify(elem))

                     console.log("here")
                   }
  
                   var p4 =document.createElement('h')
                   p4.setAttribute("id","s21")
                   p4.textContent =elem.name1
                   p4.style.marginLeft="10px";
                   
                   var btn2 =document.createElement("button");
                   btn2.setAttribute("id","s24")
                   btn2.textContent="View deal"
            var name =document.createElement('p')
            name.textContent=elem.feature
            name.style.marginLeft="10px"
            name.style.marginTop="0px"
  
            var ney =document.createElement("div")
            ney.textContent="🤍"
            ney.setAttribute("class","dil")
  
            var location  =document.createElement("p")
            location.textContent=elem.location+" "+"(✔️free Cancellation)";
            // location.style.marginLeft="10px"
            location.setAttribute("class","location")
  
             div3.append(p3,ney,btn2)
         div.append(image)
         div2.append(btn1,name,p4,location,div3)
         newD.append(div,div2)
         document.querySelector("#s15").append(newD)
  
       
   })
  propData.map(function(elem){

    var newD =document.createElement("div");
    newD.setAttribute("id","new")
    
       var div =document.createElement('div')
       div.setAttribute("id","s17")
      var div2 =document.createElement("div")
      div2.setAttribute("id","s19");
    
      var div3 =document.createElement("div");
      div3.setAttribute("id","s25")
  
      var image =document.createElement('img')
      image.setAttribute("src",elem.img1)
      image.setAttribute("id","s18");
      console.log(image);
      var btn1 =document.createElement("button")
      btn1.setAttribute("id","s20");
      btn1.style.marginLeft="10px"
      btn1.textContent="$"+elem.price

                
                var p3 =document.createElement('button')
                p3.setAttribute("id","s23")
                p3.textContent ="Details"
                p3.style.marginLeft="10px";
                p3.addEventListener("click",fun)
                function fun(){
                 window.location.href="details.html"
localStorage.setItem("hotel_data",JSON.stringify(elem))
                  console.log("here")
                }

                var p4 =document.createElement('h')
                p4.setAttribute("id","s21")
                p4.textContent =elem.name1
                p4.style.marginLeft="10px";
                
                var btn2 =document.createElement("button");
                btn2.setAttribute("id","s24")
                btn2.textContent="View deal"
         var name =document.createElement('p')
         name.textContent=elem.feature
         name.style.marginLeft="10px"
         name.style.marginTop="0px"

         var ney =document.createElement("div")
         ney.textContent="🤍"
         ney.setAttribute("class","dil")

         var location  =document.createElement("p")
         location.textContent=elem.location+" "+"(✔️free Cancellation)";
         // location.style.marginLeft="10px"
         location.setAttribute("class","location")

          div3.append(p3,ney,btn2)
      // var btn1 =document.createElement("button")
      // btn1.setAttribute("id","s20");
      // btn1.style.marginLeft="10px"
      // btn1.textContent="$"+elem.price

      div.append(image)
      div2.append(btn1,name,p4,location,div3)

      newD.append(div,div2)
      document.querySelector("#s15").append(newD)


  })
  

}

$(document).ready(function(){
  $("#date1").datepicker()
  $("#date2").datepicker()})


  function dusrapage(){
    console.log("here")
  }

  let searchValue = JSON.parse(localStorage.getItem("search_value"));
  if(searchValue) {
      document.querySelector("#date1").value = searchValue.startDate;
      document.querySelector("#date2").value = searchValue.endDate;
      document.querySelector("#s5").value = searchValue.area;
  }

