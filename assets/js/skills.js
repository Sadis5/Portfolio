let skillsMass = [{
    title: "HTML",
    img: "./assets/img/HTML.svg",
    lvl:  100,
    color1: "#CC985B",
    color2: "#F4B76E"
    
},
{
  title: "CSS",
  img: "./assets/img/CSS.svg",
  lvl: 50,
  color1: "#CDE7FF",

  color2: "#84B1DB"

},
{
  title: "JavaScript",
  img: "./assets/img/JavaScript.svg",
  lvl: 60,
  color1: "#FFFCB6",

  color2: "#EDE98B"

},
{
  title: "ReactJS",
  img: "./assets/img/ReactJS.svg",
  lvl: 40,
  color1: "#A9EBE7",

  color2: "#87D9D4"
 

}]
skillsMass[0].lvl < 20 ? console.log('меньше') : console.log('больше');
if (skillsMass[0].lvl < 20) {
  console.log('меньше');
} else {
  console.log('больше');
  
}
let skillsList = document.querySelector(".page-skills_skills-list");
skillsMass.forEach((skill) => {
    skillsList.insertAdjacentHTML(
      "beforeend",
        `          <article class="skill-item">
            <img class="skill-item_image" src=${skill.img} alt="" />
            <div class="skill-item_top">
              <h4>${skill.title}</h4>
              <h4 class="skill-item_level">${skill.lvl}%</h4>
            </div>
            <div class="skill-item_level-picture">
              <svg
                width="170"
                height="${skill.lvl + 10}"
                viewBox="0 0 170 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5.99999C61.5 14.5 104.302 -10.6497 170 5.99999V ${skill.lvl + 15}H 0V 5.99999Z"
                  fill=${skill.color2}
                />
              </svg>
              <svg
                width="170"
                height="${skill.lvl - 10}"
                viewBox="0 0 170 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3.99999C59.5747 -7.25929 85.5 14.5 170 3.99999V${skill.lvl}H0V3.99999Z"
                  fill=${skill.color1}
                />
              </svg>
            </div>
          </article>
`
    )
});
    

