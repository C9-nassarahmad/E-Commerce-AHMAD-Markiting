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

};
function handle_removeCartItem(){
    this.parentElement.remove();
}
