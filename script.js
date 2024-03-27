const rowDiv = document.getElementsByClassName("row")[0];

const cartData = [
  {
    id: 1,
    name: "LG OLED CX",
    price: 700,
    productImage:
      "https://i.pinimg.com/564x/19/de/fa/19defa028495d1c736e1664d3320c3d9.jpg",
    totalSelection: 0,
  },
  {
    id: 2,
    name: "Samsung RF28R7201SR",
    price: 366,
    productImage:
      "https://i.pinimg.com/564x/df/41/72/df4172b0037607d4852cc362e4eb578e.jpg",
    totalSelection: 0,
  },
  {
    id: 3,
    name: "Oster Versa Pro Blender",
    price: 47,
    productImage:
      "https://i.pinimg.com/564x/fd/58/9b/fd589bda517a864c18b997891855b773.jpg",
    totalSelection: 0,
  },
  {
    id: 4,
    name: "LG Smart Toaster BTA820XL",
    price: 28,
    productImage:
      "https://i.pinimg.com/564x/54/73/79/547379d3d0891ce82d643757261f65d3.jpg",
    totalSelection: 0,
  },
  {
    id: 5,
    name: "Panasonic NN-SN686S",
    price: 70,
    productImage:
      "https://i.pinimg.com/564x/e5/1b/89/e51b895fa3e37e4a368cedace7d7290d.jpg",
    totalSelection: 0,
  },
  {
    id: 6,
    name: "Bosch 800 Series",
    price: 480,
    productImage:
      "https://i.pinimg.com/564x/89/85/08/8985082cbaad0157726e83df185f2482.jpg",
    totalSelection: 0,
  },
];
function allProductDisplay() {
  
  for (let index = 0; index < cartData.length; index++) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-4");
    colDiv.innerHTML = `
              <div class="card" style="width: 18rem;">
              <img src=${cartData[index].productImage} class="card-img-top"
              alt="..." style="margin-bottom: 90px;">
              <div class="card-body">
              <h5 class="card-title">${cartData[index].name}</h5>
              <h6 class="mt-4">Price: $<span>${cartData[index].price}</span></h6>
              <h6>Amount: <input type="number" value="0" style="width: 50px; margin-right: 20px;" class="cart-input" onclick="changeCartItem(${cartData[index].id})"></h6>
              <div><h6>Add to Favourite: <svg class="heart-icon" viewBox="0 0 24 24" onclick="toggleFavorite(this)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg></h6></div>
              </div>
              </div>`;
            
             
    rowDiv.appendChild(colDiv);

  }
}

window.addEventListener("load", allProductDisplay);

function getItemsTotal() {
  const itemInput = document.getElementsByClassName("cart-input");
  let totalITem = 0;
  for (input of itemInput) {
    totalITem += Number(input.value);
  }

  return { totalITem, itemInput };
}

function changeCartItem(itemId) {
  const { totalITem, itemInput } = getItemsTotal();

  // use find method to find a particular cart on the cartData array
  const foundCartData = cartData.find((cart) => cart.id === itemId);

  // use findIndex method to get the current index of our found card data
  const cartIndex = cartData.findIndex((cart) => cart.id === foundCartData.id);

  const newCartObject = cartData[cartIndex];

  // update totalSelection key value on the cart object that exist on found index
  const updatedCartObject = {
    ...newCartObject,
    totalSelection: itemInput[cartIndex].value,
  };

  // update cartData array with the updated cart object
  cartData[cartIndex] = updatedCartObject;

  let totalPrice = 0;

  for (cart of cartData) {
    totalPrice += cart.totalSelection * cart.price;
  }

  const getTotalDisplayDIv = document.getElementsByClassName("totalDisplay")[0];
  getTotalDisplayDIv.innerHTML = `Total Items: ${totalITem} <br>Total Prize: $ ${totalPrice}`;
  // console.log(totalITem);
  // console.log(totalPrice);
}
function toggleFavorite(icon) {
  if (icon.style.fill === 'red') {
    icon.style.fill = 'grey';
  } else {
    icon.style.fill = 'red';
  }
}