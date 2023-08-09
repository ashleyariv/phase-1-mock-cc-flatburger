fetch('http://localhost:3000/burgers')
.then(response => response.json())
.then(burgers => burgers.forEach(burger => displayBurger(burger)))

fetch('http://localhost:3000/burgers/1')
.then(response => response.json())
.then(burger => displayDetails(burger))

const restaurantMenu = document.querySelector('#restaurant-menu')

function displayBurger(burger) {
    const spanElement = document.createElement('span')
    spanElement.textContent = burger.name
    restaurantMenu.appendChild(spanElement)
    spanElement.addEventListener('click', () => displayDetails(burger))
}

function displayDetails(burger) {
    const burgerImage = document.querySelector('#image')
    burgerImage.src = burger.image
    const burgerName = document.querySelector('#name')
    burgerName.textContent = burger.name
    const cartNumber = document.querySelector('#number-in-cart-count')
    cartNumber.textContent = burger.number_in_cart
}

const form = document.querySelector('#add-to-cart-form')
const numberInput = document.querySelector('#number-to-add')
const totalNumber = document.querySelector('#number-in-cart-count')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    totalNumber.textContent = (parseInt(totalNumber.textContent) + parseInt(numberInput.value))
    form.reset()
})