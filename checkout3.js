
// carousel
let carouselReviews = ["Capture1.PNG",
"Capture3.PNG",
"capture4.PNG"]

let div = document.querySelector(".slideshow-container");
div.innerHTML = null;
let img = document.createElement("img");
img.src = carouselReviews[0];
img.style.width="90%";
div.append(img);

let i=1; 
setInterval(function(){
if(i===carouselReviews.length)
{
i=0;
}
img.src = carouselReviews[i];
div.append(img);
i++
},3000);

function next() {
    window.location.href="checkout2.html";
}


// var data = {
//     "images": [
//         "https://cdn2.hometogo.net/large/e_v4/64d/4f1/d083f8fcd8b14a96e8b2d2de57.jpg",
//         "https://cdn2.hometogo.net/large/e_v4/e83/1ce/038cb4187d76ef03b23eb4a6eb.jpg",
//         "https://cdn2.hometogo.net/small/v1/7b6/e95/bcd7e4b5ec96a817a36c482e61.jpg",
//         "https://cdn2.hometogo.net/large/v1/9e2/012/d2cbdab18bf97674d00deb9cc0.jpg"
//     ],
//     "size": "1440 ft² Apartment.2 bedrooms.2 guests",
//     "price": 266,
//     "location": "North myrtle Beach,Sounth Salifornia",
//     "title": "CHARMING APARTMENT FOR BEACH GETAWAY WITH OUTDOOR POOL + OCEAN VIEWS",
//     "check_in": "01/27/2022",
//     "check_out": "01/28/2022",
//     "People": 3,
//     "adults": 2,
//     "childs": 1
// }

var user_details = JSON.parse(localStorage.getItem("booking_details"));
var hotelarr = JSON.parse(localStorage.getItem("stay_details"));
var data = hotelarr;
var names = document.getElementById("names");
var other = document.getElementById("other_details");
appendDetails(user_details, hotelarr)

// names.textContent = user_details.name + user_details.last;
// other.textContent = user_details.email + user_details.address + user_details.number + user_details.zip + user_details.cities + user_details.countries;





var hotel_id = document.getElementById("hotel_details");
var hotel_s = document.getElementById("hotel_size");
var locate = document.getElementById("loc");
var pic = document.getElementById("hotel_pic");

hotel_id.textContent = data.title;
hotel_s.textContent = data.size;
locate.textContent = data.location;
pic.src = data.images[0];

var check_out = document.getElementById("check-out-details");
var people = document.getElementById("no-guests");
var days = +(data.check_out[3] + data.check_out[4]) - +(data.check_in[3] + data.check_in[4]);

check_out.textContent = `${data.check_in} to ${data.check_out} (${days} nights)`

people.textContent = `${data.People} guests (${data.adults} adults, ${data.childs} children) `

var price = document.getElementById("value");
var total = data.price * days;
 price.textContent = `Total:  $ ${total}`
console.log(price);





function appendDetails(user_details, total) {
    let container = document.querySelector(".details");
    // container.innerHTML = "";
    container.innerHTML = ` <div class="personal_details">
    <h4>PERSONAL DETAILS:</h4>
    <h4 id="names">
    ${user_details.name + user_details.last}</h4>
    <p id="other_details">
    ${user_details.email + user_details.address + user_details.number + user_details.zip + user_details.cities + user_details.countries}</p>
</div>
<div class="id_prop">PROPERTY ID:
    <span id="token">HRN4ZJKs</span>
</div>
<div class="det_prop">
    <div>
        <h4 id="hotel_details"></h4>
        <p id="hotel_size"></p>
        <p id="loc"></p>
    </div>
    <img id="hotel_pic" src="" alt="" width="30%" height="100px">
</div>
<div class="guest_Details">
    <p id="check-out-details"></p>
    <p id="no-guests"></p>
</div>
<div class="breakdown">
<div id="value">
</div>
<div>Including taxes and free</div>
<div class="policy"><i class=" shield far fa-shield-check"></i><a href=""
        class="cancellation_policy">View cancellation policy</a>
</div>


<div>
    <button class="cost" onclick=>View cost breakdown</button>
    <!-- <div id="open_cost"></div> -->
    
</div>


</div>
`
}

function final() {
    alert("Your Payment is successfull!");
    window.location.href = "./index.html";
    
}

