export function loadCart() {
  let cartString = localStorage.getItem("cart"); // "[item1, item2]"

  if (cartString == null) {
    localStorage.setItem("cart", "[]");
    cartString = "[]";
  }

  const cart = JSON.parse(cartString);

  return cart;
}

export function addToCart(product, quantity) {
  let cart = loadCart();

  const existingItemIndex = cart.findIndex(
    (item) => item.productId == product.productId
  );

  if (existingItemIndex === -1) {
    // item not in cart
    if (quantity < 1) {
      console.log("Quantity must be at least 1");
      return;
    }

    const cartItem = {
      productId: product.productId,
      name: product.name,
      price: product.price,
      labelledPrice: product.labelledPrice,
      quantity: quantity,
      image: product.images[0],
    };
    cart.push(cartItem);
  } else {
    // item already in cart
    const existingItem = cart[existingItemIndex];
    let newQuantity = existingItem.quantity + quantity;

    // clamp at min 1
    if (newQuantity < 1) {
      newQuantity = 1;
    }

    cart[existingItemIndex].quantity = newQuantity;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(productId) {
  let cart = loadCart();

  // find index of product in cart
  const index = cart.findIndex((item) => item.productId == productId);

  if (index !== -1) {
    // remove item from cart
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    console.log("Item not found in cart");
  }
}

export function getTotal() {
  const cart = loadCart();

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
}
