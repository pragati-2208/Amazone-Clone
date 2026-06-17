// HERO IMAGE SLIDER

const slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide(){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

}

setInterval(showSlide, 3000);


// SEARCH FUNCTION

const searchBtn = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", ()=>{

  if(searchInput.value === ""){
    alert("Please enter something to search");
  }
  else{
    alert("Searching for: " + searchInput.value);
  }

});


// BACK TO TOP

const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", ()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


function openPage(category){

  window.location.href = `products.html?category=${category}`;

}