// let - cоздание переменной
// let tittle_h1 = document.querySelector('h1')
// tittle_h1.innerHTML = "ZigHiEl"
// console.log(tittle_h1);
let light = document.getElementById("light")
let body = document.querySelector("body")
console.log(light);

light.onclick = function() {
    if(light.checked){
        Object.assign(document.documentElement,{

            style: `--text-color-nav: #6bacd1;`,
        })
        console.log("click");
        body.style.backgroundImage = "url('./assets/img/2021.png')"
        
    }   
    else{
        Object.assign(document.documentElement,{
            

        })
        console.log("click");
        body.style.backgroundImage = "url('./assets/img/Phon.jpg')"
    }
}

let qualificList = document.querySelector(".qualification-list")
let educationList = [{
    tittle: "Lena Golovach",
    place: "Spassk-Blizhniy",
    date: "2008-2023"
}
,
{
    tittle: "Yafa Shist",
    place: "Germany",
    date: "1941 - 1945"
}]
 for (let i = 0; i < educationList.length; i++) {

    qualificList.insertAdjacentHTML("beforeend", `<article class="qualification-item">
                  <h4>${educationList[i].tittle}</h4>
                  <footer class="qualification-item_bottom">
                    <h6>${educationList[i].place}</h6>
                    <div class="qualification-item_date">
                      <img src="./assets/img/calendar.svg" alt="" />
                      <h6>${educationList[i].date}</h6>
                    </div>
                  </footer>
                </article>`)
   
}
let work = document.getElementById("work")
let education = document.getElementById("education")
education.classList.add("--qualification-active")
work.addEventListener("click", function () {
    work.classList.add("--qualification-active")
    education.classList.remove("--qualification-active")
    
    qualificList.innerHTML = ""
    
workList.forEach(element => {
     qualificList.insertAdjacentHTML("beforeend", `<article class="qualification-item">
                  <h4>${element.tittle}</h4>
                  <footer class="qualification-item_bottom">
                    <h6>${element.place}</h6>
                    <div class="qualification-item_date">
                      <img src="./assets/img/calendar.svg" alt="" />
                      <h6>${element.date}</h6>
                    </div>
                  </footer>
                </article>`)
});

})
education.addEventListener("click", function(){
    education.classList.add("--qualification-active")
    work.classList.remove("--qualification-active")
    
    qualificList.innerHTML = ""
    
educationList.forEach(element => {
     qualificList.insertAdjacentHTML("beforeend", `<article class="qualification-item">
                  <h4>${element.tittle}</h4>
                  <footer class="qualification-item_bottom">
                    <h6>${element.place}</h6>
                    <div class="qualification-item_date">
                      <img src="./assets/img/calendar.svg" alt="" />
                      <h6>${element.date}</h6>
                    </div>
                  </footer>
                </article>`)

})

})
let workList = [
    {
    tittle: "Yasha Lava",
    place: "Spassk-Blizhniy",
    date: "2008-2023"
}
,
{
    tittle: "Matvey",
    place: "Germany",
    date: "1941 - 1945"
}
]
