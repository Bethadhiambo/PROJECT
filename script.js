let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'whole wheat bread-Fiber/B-vitamins',
        image: '1.PNG',
        price: 1
    },
    {
        id: 2,
        name: ' chicken- Protein',
        image: '2.PNG',
        price: 1
    },
    {
        id: 3,
        name: ' salmon- Omega-3 fatty acids,',
        image: '3.PNG',
        price: 1    
    },
    {
        id: 4,
        name: ' milk-Calcium/vitamin D,',
        image: '4.PNG',
        price: 1    
    },
    {
        id: 5,
        name: 'Eggs-vitamin B12/vitamin D',
        image: '5.PNG',
        price: 1    
    },
    {
        id: 6,
        name: 'walnuts-magnesium/vitamin E.',
        image: '6.PNG',
        price: 1    
    },
    {
        id: 7,
        name: 'Fruits- Vitamin C/ fiber',
        image: '7.PNG',
        price: 1    
    },
    {
        id: 8,
        name: 'leafy greens-Vitamins A, C, K and fiber',
        image: '8.PNG',
        price: 1    
    },
    {
        id: 9,
        name: 'lentils_beans-Protein/ magnesium.',
        image: '9.PNG',
        price: 1    
    },
    {
        id: 10,
        name: 'Oatmeal-Fiber/iron/vitamins',
        image: '10.PNG',
        price: 1
    },
    {
        id: 11,
        name: ' salmon- Omega-3 fatty acids',
        image: '11.PNG',
        price: 1
    },
    {
        id: 12,
        name: 'spinach- Vitamins A/ C/ K/ folate',
        image: '12.PNG',
        price: 1    
    },
    {
        id: 13,
        name: 'lean beef- Protein/iron/zinc/vitamins',
        image: '13.PNG',
        price: 1    
    },
    {
        id: 14,
        name: 'beans-Protein/fiber/iron/folate/magnesium',
        image: '14.PNG',
        price: 1    
    },
    {
        id: 15,
        name: 'Eggs-Protein/vitamin D/choline',
        image: '15.PNG',
        price: 1    
    },
    {
        id: 16,
        name: 'Nuts and Seeds- Healthy fats/protein/fiber/vitamin E/magnesium',
        image: '16.PNG',
        price: 1    
    },
    {
        id: 17,
        name: 'cheese- Calcium/vitamin D/protein/phosphorus',
        image: '17.PNG',
        price: 1    
    },
    {
        id: 18,
        name: 'Fruits- Vitamin C/ fiber',
        image: '18.PNG',
        price: 1    
    },


];
let listCards  = [];
function initApp(){

    const page = document.body.id;
    
    if (page === 'Adolescent-page') {
        products = [
            { id: 1, name: 'whole wheat bread-Fiber/vitamins', image: '1.PNG', price: 1 },
            { id: 2, name: 'chicken- Protein', image: '2.PNG', price: 1 },
            { id: 3, name: 'salmon- Omega-3 fatty acids', image: '3.PNG', price: 1 },
            { id: 4, name: 'milk-Calcium/vitamin D', image: '4.PNG', price: 1 },
            { id: 5, name: 'Eggs-vitamin B12/vitamin D', image: '5.PNG', price: 1 },
            { id: 6, name: 'walnuts-magnesium/vitamin E', image: '6.PNG', price: 1 },
            { id: 7, name: 'Fruits- Vitamin C/ fiber', image: '7.PNG', price: 1 },
            { id: 8, name: 'leafy greens-Vitamins A, C, K and fiber', image: '8.PNG', price: 1 },
            { id: 9, name: 'lentils_beans-Protein/ magnesium', image: '9.PNG', price: 1 },
            
        ];
    } else if (page === 'lactating-page') {
        products = [
            { id: 10, name: 'Oatmeal-Fiber/iron/vitamins ', image: '10.PNG', price: 1 },
            { id: 11, name: 'salmon- Omega-3 fatty acids', image: '11.PNG', price: 1 },
            { id: 12, name: 'spinach- Vitamins A/ C/ K/ folate', image: '12.PNG', price: 1 },
            { id: 13, name: 'lean beef- Protein/iron/zinc/vitamins', image: '13.PNG', price: 1 },
            { id: 14, name: 'beans-Protein/fiber/iron/folate/magnesium', image: '14.PNG', price: 1 },
            { id: 15, name: 'Eggs-Protein/vitamin D/choline', image: '15.PNG', price: 1 },
            { id: 16, name: 'Nuts and Seeds- Healthy fats/protein/fiber/vitamin E/magnesium', image: '16.PNG', price: 1 },
            { id: 17, name: 'cheese- Calcium/vitamin D/protein/phosphorus', image: '17.PNG', price: 1 },
            { id: 18, name: 'Fruits- Vitamin C/ fiber', image: '18.PNG', price: 1 },
            
        ];
    } else if (page === 'older-page') {
        products = [
            { id: 1, name: 'whole wheat bread-Fiber/vitamins', image: '1.PNG', price: 1 },
            { id: 2, name: 'chicken- Protein', image: '2.PNG', price: 1 },
            { id: 3, name: 'salmon- Omega-3 fatty acids', image: '3.PNG', price: 1 },
            { id: 4, name: 'milk-Calcium/vitamin D', image: '4.PNG', price: 1 },
            { id: 5, name: 'Eggs-vitamin B12/vitamin D', image: '5.PNG', price: 1 },
            { id: 6, name: 'walnuts-magnesium/vitamin E', image: '6.PNG', price: 1 },
            { id: 7, name: 'Fruits- Vitamin C/ fiber', image: '7.PNG', price: 1 },
            { id: 8, name: 'leafy greens-Vitamins A, C, K and fiber', image: '8.PNG', price: 1 },
            { id: 9, name: 'lentils_beans-Protein/ magnesium', image: '9.PNG', price: 1 },
            
        ];
    }
    
    
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}