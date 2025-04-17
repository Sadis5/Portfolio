massSlides = [
{
  title: "Friends Game",
  link: "https://animego.org/anime/igra-druzey-2002",
  url: "./assets/img/yuuichi.jpg",
  text: "Genius Yuuichi",
},
{
  title:"Tokyo Ghoul",
  link: "https://jut-su.tv/online/tokijskij_gul_sezon_1_2014_1080_hd/6-1-0-184",
  url: "./assets/img/KanekiKent.jpg",
  text: "I`m Dead Inside",
},
{
  title:"Death Note",
  link: "https://jut-su.tv/online/tetrad-smerti-2006-1080-hd/6-1-0-1144/1-seriya",
  url: "./assets/img/DeathNote.jpg",
  text: "          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod verodolores perferendis odio repellat culpa officia earum consecteturnisi. Quas accusamus provident odit ratione voluptatem a hic.Perferendis, sed nesciunt?",
}
]

let leftSlide = document.getElementById("left-slide")
let rightSlide = document.getElementById("right-slide")
let slider = document.querySelector(".slider")
let pagination = document.querySelector(".slider-pagination")






for (let index = 0; index < massSlides.length; index++) {
  pagination.insertAdjacentHTML("beforeend", `<label class="radio-slide">
            <input type="radio" name="slider" />
            <span></span>
          </label>`)
  
}
pagination = document.querySelectorAll(".radio-slide")
console.log(pagination);
isAnim = false

pagination.forEach((radio, i) => {
  radio.onclick = function () {
    if (isAnim) {
       return;
     }
    current = i
    DrawSlide(i)

  }
   
}); 




function DrawSlide(current) {

  isAnim = true;

  slider.lastElementChild.classList.remove("--new-slide")
  slider.lastElementChild.classList.add("--old-slide")

  slider.insertAdjacentHTML ("afterbegin", `<div class="slider-slide --new-slide"> 

            <img
              src="${massSlides[current].url}"
              alt=""
              class="slider_project-image"
            />
            <main class="slider-main">
              <h2 class="slaider-main_title">${massSlides[current].title}</h2>
              <p class="slider-main_text">
                ${massSlides[current].text}
              </p>
              <button class="btn-demo"><a target="blank" href="${massSlides[current].link}">DEMO</button>
            </main>

          </div>`)

  setTimeout(() => {
    slider.firstElementChild.style.left = "0px"
    
  }, 100);
  setTimeout(() => {
    slider.lastElementChild.remove()   
    slider.firstElementChild.classList.remove("--new-slide");
    isAnim = false;
  }, 2000);
  pagination[current].firstElementChild.checked = true;
}



current = 0
DrawSlide(current)




leftSlide.onclick = () => {

     if (isAnim) {
       return;
     }

    current--;
    if (current == -1) {
        current = massSlides.length - 1
        
    }
    DrawSlide(current)
    pagination[current].firstElementChild.checked = true  
    // console.log(massSlides[current]);
    
          
}
rightSlide.onclick = () => {
    if (isAnim) {
       return;
     }

    current++
    if (current == massSlides.length) {
        current = 0        
    }
    DrawSlide(current)
    pagination[current].firstElementChild.checked = true
}

// функции
// function  nameFunc() {
//   console.log("This 'this' in function", this);

  
// }
// const newfunc = () => {
//}

// setTimeout

// const timer = setTimeout(() => {
//   console.log("Прошло 5 секунд");
//   clearInterval(IntervalTimer)
// }, 5000);

// const IntervalTimer = setInterval(() => {
//   console.log("Прошло 2 секунды");
// }, 2000);
// let picture = document.getElementById("animation")

// picture.onclick = () => {

// let start = Date.now()

// function anim(timePassed) {
//   picture.style.left = timePassed / 5 + "px"
// }

// const animationInterval = setInterval(() => {
//   let timePassed = Date.now() - start 
//   if (timePassed >= 5000){
//     clearInterval(animationInterval)
//     return
//   }
//   anim(timePassed)
// }, 10)

// }


let  textBlock = document.getElementById("text");
const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, exercitationem dolorem. Ducimus, nulla voluptatem? Quia ratione omnis cumque temporibus deserunt eveniet, voluptate quisquam provident repellat maxime ipsam corrupti quaerat excepturi."
for (const letter of text) {
  setTimeout(() => {
    
    
  }, 100);
  
}
let i = 0;
const textInterval = setInterval(() => {
  textBlock.insertAdjacentText("beforeend", text[i]) 
  i++
  if (i === text.length) {
    clearInterval(textInterval)
  }
}, random(1, 100));

function random(min, max) {
  return Math.floor(Math.random() * max) - min
  
}