const itemHeader = document.querySelectorAll(".accordian-item-Header");
const accordianItemBodyContent = document.querySelector(
  ".accordian-item-body-content"
);
console.log(accordianItemBodyContent);
const navList = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navList = document.querySelectorAll(".nav-list li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle('toggle')
  });
};
navList();

itemHeader.forEach((itemhed) => {
  itemhed.addEventListener("click", () => {
    itemhed.classList.toggle("active");
    console.log(itemhed);
 

    // console.log(accordianItemBodyContent);
  });
});
