

//login
$(document).ready(function(){
  const carttIcon=$("#cart-icon");
  const cart=$(".cart");
  const closeCart=$("#cart-close");
  carttIcon.on("click",function(){
    cart.addClass("active");
    })
    closeCart.on("click",function(){
      cart.removeClass("active");
    });
    // if($(this).readyState=="loading"){
    //   $(this).on("DOMContentLoaded",start)
    // }else{
    //   start();
    // }

})
 
  
  function start(){
    addEvents();
  }
  function update(){
    addEvents();
    updateTotal();
  }
  function addEvents(){
    let cartRemove_btns=$(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.each(function(){
      $(this).on("click",handle_removeCartItem);
    });
    let cartQuantity_inputs=$(".cart-quantity");
    cartQuantity_inputs.each(function(){
      $(this).on("click",handle-CangeItemQuantity);

    });
    let addCart_btns=$(".add-cart");
    addCart_btns.each(function(){
      $(this).on("click",handle_addCartItem);
    });
    const buy_btn=$(".btn-buy");
    buy_btn.on("click",handle_buyOrder);


  }
  let itemsAdded=[];
  function handle_addCartItem(){
    let product=$(this).parent();
    let title=product.find(".product-title").html();
    let price=product.find(".product-price").html();
    let imgSrc=product.find(".product-img").attr("src");
    console.log(title,price,imgSrc);
    let newToAdd={
      title,price,imgSrc
    };
    let carBoxElement=CartBoxComponent(title,price,imgSrc);
  let newNode=$("<div>").html(carBoxElement);
  
  const cartContent=cart.find(".cart-content");
  
  carContent.append(newNode);
  update();
    
  }
  function handle_removeCartItem(){
    $(this).parent().remove();
    itemsAdded=itemsAdded.filter(function(el){
      return(el.title !=$(this).parent().find(".cart-product-title").html);

    })
    update();
  }
  function handle_changeItemQuantity(){
    if(isNaN($(this).val()) || $(this).val()<1){
      $(this).val(1);
      update();
    }
  }
  function handle_buyOrder(){
    if(itemsAdded.length<=0){
      alert("There is No Order to Place Yet! \nPlease Make an Order first.");
      return;
    }
    const carContent=cart.find(".cart-content");
    carContent.html("");
    alert("Your Order is Placed Successfully :)");
    itemsAdded=[];
    update();
  }
  function updateTotal(){
    let carBoxes=$(".cart-box");
    const totalElement=cart.find(".total-price");
    let total=0;
    carBoxes.each(function(){
      let priceElement=$(this).find(".cart-price");
      let price=parseFloat(priceElement.html().replace("$",""));
      let quantity=$(this).find(".cart-quantity").val();
      total+=total.toFixed(2);
      totalElement.html("$"+total);
    })
  }
  function CartBoxComponent(title, price, imgSrc){
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
  const toggle=$("#toggleDark");
  const body=$("body");
  toggle.on("click",function(){
    $(this).toggleClass("bi-moon");
    if($(this).toggleClass("bi-brightness-high-fill")){
      body.css({
        background:"white",
        color:"black",
        transition:"2s"
      })
    }else{
      body.css({
        background:"black",
        color:"white",
        transition:"2s"
      })
    }
  })




