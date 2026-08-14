let menus = document.querySelectorAll(".menu");
let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");
let home = document.querySelector(".home");
let products = document.querySelector("#products");

menuBtn.addEventListener("click",() =>{
    menus.forEach((item) =>{
        item.classList.toggle("hide");
    });
});

function showHome(){
    home.classList.remove("hide");
    products.classList.add("hide");
    orderOverlay.classList.add("hide");
}
function showProducts(){
    home.classList.add("hide");
    products.classList.remove("hide");
    orderOverlay.classList.add("hide");
}
function showOrders(){
    home.classList.add("hide");
    products.classList.add("hide");
    orderOverlay.classList.remove("hide");
}
menus.forEach((item) =>{

    item.addEventListener("click",() =>{
        menus.forEach((menu) =>{
            menu.classList.remove("active");
        });

        item.classList.add("active");

        if (item.textContent.includes("Home")){
            showHome();
        }
        else if (item.textContent.includes("Products")){
            showProducts();
        }
        else if (item.textContent.includes("Orders")){
            showOrders();
        }

    });
});

let orderOverlay = document.getElementById("orderOverlay");
let closeOrder = document.getElementById("closeOrder");

closeOrder.addEventListener("click",() =>{
    orderOverlay.classList.add("hide");
});

let feedbackBtn = document.getElementById("feedbackBtn");
let feedbackOverlay = document.getElementById("feedbackOverlay");
let feedbackClose = document.getElementById("feedbackClose");

feedbackBtn.addEventListener("click",() =>{
    feedbackOverlay.classList.remove("hide");
});

feedbackClose.addEventListener("click",() =>{
    feedbackOverlay.classList.add("hide");
});

home.classList.add("hide");
products.classList.add("hide");
orderOverlay.classList.add("hide");
feedbackOverlay.classList.add("hide");

menus.forEach((menu) =>{
    menu.classList.remove("active");
});



