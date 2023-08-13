let openMenu = document.querySelector(".navbar .navOpen"); 
let closeMenu = document.querySelector(".navbar .navClose"); 
let navigation = document.querySelector(".navbar .menu"); 

openMenu.addEventListener("click", () => {
	navigation.style.right = "0";
});
closeMenu.addEventListener("click", () => {
	navigation.style.right = "-100%";
});




let html_day = document.getElementById("timerDay");
let html_hours = document.getElementById("timerhour");
let html_minutes = document.getElementById("timerMinute");
let html_seconds = document.getElementById("timerSec");


var countDownDate = new Date("sep 11, 2023 09:00:0").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    html_day.innerHTML = days;
    html_hours.innerHTML = hours;
    html_minutes.innerHTML = minutes;
    html_seconds.innerHTML = seconds;

    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


let send_btn = document.getElementById("send_btn");
let part4 = document.getElementById("call_back");
let already_sended = document.getElementById("already_sended");
let user_name_inp = document.getElementById("user_name_inp");

if( JSON.parse(localStorage.getItem("isSended" , "true")) == true  ){
  console.log("okay");
  part4.classList.add("hidden_part");
  already_sended.style = "opacity: 1;";
}else{
  console.log("no(((");
}



send_btn.addEventListener("click" ,()=>{
  if(user_name_inp.value.length > 0){
    console.log("cklicked");
    localStorage.setItem("isSended" , "true")

  }
})