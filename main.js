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
function handle_removeCartItem(){
    this.parentElement.remove();
}
