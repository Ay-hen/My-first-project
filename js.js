const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");

let sb = document.querySelector("#sbm");
let rt = document.querySelector("#rate");

let rating = document.querySelector("#rating");
let rates = document.querySelectorAll(".btn");


sb.addEventListener("click", ()=>{
    thankYou.classList.remove("hidden");
    mainContainer.classList.add("hidden");
})

rt.addEventListener("click", ()=>{
    thankYou.classList.add("hidden");
    mainContainer.classList.remove("hidden");
    rating.textContent= "";
})

rates.forEach((rat)=>{
    rat.addEventListener("click",()=>{
        rating.textContent = rat.textContent;
    })
})