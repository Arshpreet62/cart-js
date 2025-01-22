const kart = document.querySelector(".kart")
const content = document.querySelector(".content")
const kart_content = document.querySelector(".kart_content")
const payment = document.querySelector(".payment")
kart.addEventListener("click", ()=>{
if(content.style.display="grid"){
  content.style.display="none"
  kart_content.classList.remove("kart_hide")
  payment.classList.remove("hide_payment")
}
})
const back_button1 = document.querySelector(".back_button1")
back_button1.addEventListener("click", () =>{
  payment.classList.add("hide_payment")
})

const buy = document.querySelector(".buy")
buy.addEventListener("click", ()=>{
if(content.style.display="none"){
  content.style.display="grid"
  kart_content.classList.add("kart_hide")
}
})

const new_box = document.querySelector(".new_box")
const post = document.querySelector(".post")
post.addEventListener("click", () =>{
  new_box.classList.remove("hide")
})

const back_button = document.querySelector(".back_button")
back_button.addEventListener("click", () =>{
  new_box.classList.add("hide")
})


const add_new_box = document.querySelector(".add_new_box")
add_new_box.addEventListener("click", ()=> {
const product = document.createElement("div")
const img_product = document.querySelector("#img_product")
const heading_product = document.querySelector("#heading_product")
const text_product = document.querySelector("#text_product")
const new_box_price = document.querySelector("#new_box_price")
const addtocart = document.querySelector(".add-to-cart")

const img = document.createElement("img")
img.src = img_product.value
product.appendChild(img)
img.classList.add("product-image")

const heading = document.createElement("h3")
heading.innerText = heading_product.value
product.appendChild(heading)
heading.classList.add("product-title")

const text = document.createElement("p")
text.innerText = text_product.value
product.appendChild(text)
text.classList.add("product-description")

const price = document.createElement("p")
price.innerText = new_box_price.value
product.appendChild(price)
price.classList.add("product-price")

const addto = document.createElement("button")
addto.innerText = addtocart.innerText;
product.appendChild(addto)
addto.classList.add("add-to-cart")

content.appendChild(product)
product.classList.add("product")

img_product.value = "";
heading_product.value = "";
text_product.value = "";
new_box_price.value = "";
})


const content_add = document.querySelector(".kart_content_add")
const add_to_cart_buttons = document.querySelectorAll(".add-to-cart")
add_to_cart_buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.innerText = "added"
    button.classList.add("clicked")
    
    let checked = button.parentElement.cloneNode(true)
    content_add.appendChild(checked)
    checked.classList.add("product")

    updateKartItems();
  })
})

function updateKartItems() {
  const kart_items = document.querySelectorAll(".clicked");
  kart_items.forEach(kart_item => {
    kart_item.addEventListener("click", () => {
      const kart_content_add = document.querySelector(".kart_content_add");
      kart_content_add.removeChild(kart_item.parentElement);
    });
  });
}






