//open and close cart
const carticon=document.querySelector("#cart-icon");
const cart=document.querySelector(".cart");
const closecart=document.querySelector("#cart-close");
carticon.addEventListener('click',()=>{
    cart.classList.add('active');

});
closecart.addEventListener('click',()=>{
cart.classList.remove('active');
});

// add functions
if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',start);
}else{
    start();
}
// start
function start(){
addEvents();
}
// update and rerender
function update(){
addEvents();
updateTotal();
}
// add events
function addEvents(){
    let cartRemove_btns=document.querySelectorAll('.cart-remove');
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn)=>{
        btn.addEventListener('click',handle_removeCartItem);
    });
    // Change item quantity
    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
});
// Add item to cart
let addCart_btns = document.querySelectorAll(".add-cart");
addCart_btns.forEach((btn) => {
btn.addEventListener("click", handle_addCartItem);
});
// Buy Order
const buy_btn = document.querySelector(".btn-buy");
buy_btn.addEventListener("click", handle_buyOrder);

};
// handle event function
let itemsAdded = [];

function handle_addCartItem() {
let product = this.parentElement;
let title = product.querySelector(".product-title").innerHTML;
let price = product.querySelector(".product-price").innerHTML;
let imgSrc = product.querySelector(".product-img").src;
console.log(title, price, imgSrc);
let newToAdd = {
    title,
    price,
    imgSrc,
};
  // handle item is already exist
    if (itemsAdded.find((el) => el.title == newToAdd.title)) {
        alert("This Item Is Already Exist!");
        return;
        } else {
    itemsAdded.push(newToAdd);
}
// Add product to cart
let cartBoxElement = CartBoxComponent(title, price, imgSrc);
let newNode = document.createElement("div");
newNode.innerHTML = cartBoxElement;
const cartContent = cart.querySelector(".cart-content");
cartContent.appendChild(newNode);

update();

}
//remove cart icon
function handle_removeCartItem() {
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(
    (el) =>
        el.title !=
        this.parentElement.querySelector(".cart-product-title").innerHTML
    );

    update();
}
function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value<=0){
        alert("There is No Order to Place Yet!\nPlease Make an Order First.");
        return;
    }
    const cartContent=cart.querySelector(".cart-content");
    cartContent.innerHTML="";
    alert("Your Order is Placed Successfully :)");
    update();
}


































function handle_removeCartItem(){
    this.parentElement.remove();
}
