

//login
// OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// Start when the document is ready
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

// =============== START  and local storage when refresh====================
function start() {
  addEvents();
//   loadItemsFromLocalStorage();
//   const storedItems=localStorage.getItem('itemsAdded');
  
//   if(storedItems){
//     itemsAdded=JSON.parse(storedItems);
//     rerenderCart();
//   }
  
// }
// function rerenderCart(){
//   const cartContent=cart.querySelector('.cart-content');
//   cartContent.innerHTML='';

//   itemsAdded.forEach(item=>{
//     const cartBoxElement=CartBoxComponent(item.title, item.price, item.imgSrc);
    
//     const newNode=document.createElement('div');
//     newNode.innerHTML=cartBoxElement;
//     cartContent.appendChild(newNode);
//   });
//   updateTotal();
}

// ============= UPDATE & RERENDER ===========
function update() {
  addEvents();
  updateTotal();
  // loadItemsFromLocalStorage();
}

// =============== ADD EVENTS ===============
function addEvents() {
  // Remove items from cart
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
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
}

// ============= HANDLE EVENTS FUNCTIONS =============
let itemsAdded = [];

function handle_addCartItem() {
  // localStorage.setItem('itemsAdded',JSON.stringify(itemsAdded));
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
  // rerenderCart();

  update();
}

function handle_removeCartItem() {
  // localStorage.setItem('itemsAdded',JSON.stringify(itemsAdded));
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );
  // rerenderCart();

  update();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); // to keep it integer

  update();
}

function handle_buyOrder() {
  // localStorage.removeItem('itemAdded');
  if (itemsAdded.length <= 0) {
    alert("There is No Order to Place Yet! \nPlease Make an Order first.");
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("Your Order is Placed Successfully :)");
  itemsAdded = [];
  // rerenderCart();

  update();
}

// =========== UPDATE & RERENDER FUNCTIONS =========
function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = cart.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });

  // keep 2 digits after the decimal point
  total = total.toFixed(2);
  // or you can use also
  // total = Math.round(total * 100) / 100;

  totalElement.innerHTML = "$" + total;
}

// ============= HTML COMPONENTS =============
function CartBoxComponent(title, price, imgSrc) {
  return `
    <div class="cart-box">
        <img src=${imgSrc} alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!-- REMOVE CART  -->
        <i class='bx bxs-trash-alt cart-remove'></i>
    </div>`;
}
// Load items from local storage
// function loadItemsFromLocalStorage() {
//   const storedItems = localStorage.getItem('itemsAdded');
//   if (storedItems) {
//     itemsAdded = JSON.parse(storedItems);
//   }
// }
// // Save items to local storage
// function saveItemsToLocalStorage() {
//   localStorage.setItem('itemsAdded', JSON.stringify(itemsAdded));
// }
// // update the cart and total on initial page load
// updateTotal();
// addEvents();



const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});



// const allSlides = document.querySelectorAll(".slide");
// const allSteps = document.querySelectorAll(".step");

// // --------------- Next -----------------
// const next0 = allSlides[0].querySelector(".next");
// const next1 = allSlides[1].querySelector(".next");
// const next2 = allSlides[2].querySelector(".next");

// next0.addEventListener("click", () => {
//   allSlides[0].style.marginLeft = "-25%";
//   allSteps[0].classList.add("passed");
// });

// next1.addEventListener("click", () => {
//   allSlides[0].style.marginLeft = "-50%";
//   allSteps[1].classList.add("passed");
// });

// next2.addEventListener("click", () => {
//   allSlides[0].style.marginLeft = "-75%";
//   allSteps[2].classList.add("passed");
// });

// // --------------- Prev -----------------
// const prev1 = allSlides[1].querySelector(".prev");
// const prev2 = allSlides[2].querySelector(".prev");
// const prev3 = allSlides[3].querySelector(".prev");

// prev1.addEventListener("click", () => {
//   allSlides[0].style.marginLeft = "0%";
//   allSteps[0].classList.remove("passed");
// });

// prev2.addEventListener("click", () => {
//   allSlides[0].style.marginLeft = "-25%";
//   allSteps[1].classList.remove("passed");
// });

// prev3.addEventListener("click", () => {
//   allSlides[0].style.marginLeft = "-50%";
//   allSteps[2].classList.remove("passed");
// });

// // -------------- Submit -------------
// const submit = document.querySelector(".submit");
// submit.addEventListener("click", () => {
//   allSteps[3].classList.add("passed");

//   setTimeout(() => {
//     alert("Thanks! \n You Are Successfully Signed Up");
//     location.reload();
//   }, 800);
// });
