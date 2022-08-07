var itemA = parseInt(799);
  var itemB = parseInt(35);
  document.getElementById("cart-price-one").textContent = "$" + itemA;
  document.getElementById("cart-price-two").textContent = "$" + itemB;
  var total = itemA + itemB;
  document.getElementById("spanOne").textContent = "$" + total;
  document.getElementById("spanTwo").textContent = "$" + total;



  function toRemoveItemA() {
    var x = document.getElementById("first");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }





  function toRemoveItemB() {
    var x = document.getElementById("second");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function updateCart() {
    var count1 = document.getElementById("count1").value;

    var price1 = parseInt(count1) * itemA
    document.getElementById("cart-price-one").textContent = "$" + price1;

    var count2 = document.getElementById("count2").value;
    var price2 = parseInt(count2) * itemB
    document.getElementById("cart-price-two").textContent = "$" + price2;

    var totalPrice = price1 + price2;

    document.getElementById("spanOne").textContent = "$" + totalPrice;
    document.getElementById("spanTwo").textContent = "$" + totalPrice;



  }