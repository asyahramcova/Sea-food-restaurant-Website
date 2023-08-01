const image = document.querySelector("#menu-photo");

const  rowBar = document.querySelector("#rowBar");
const  brunch = document.querySelector("#brunch");
const  dinner = document.querySelector("#dinner");
const  drinks = document.querySelector("#drinks");
const  order = document.querySelector("#order");

rowBar.addEventListener("click", menuRowBar);
brunch.addEventListener("click", menuBrunch);
dinner.addEventListener("click", menuDinner);
drinks.addEventListener("click", menuDrinks);

function menuRowBar (){
   image.setAttribute("src", "rowbar-menu.jpg");
}

function menuBrunch (){
   image.setAttribute("src","brunch-menu.jpg");
   }

function menuDinner(){
   image.setAttribute("src", "dinner-menu.jpg");
}

function menuDrinks(){
   image.setAttribute("src", "drinks-menu.jpg")
}