const basketButton = document.querySelectorAll('.product__item__button');
const busket = document.getElementById('shopping-list-wrapper');
const closeButton = document.querySelectorAll('.shopping__item__image-wrapper');

const createItemInBasket = (content)=>{
    const shoppingItem = document.createElement('li');
    shoppingItem.setAttribute('class','shopping__item');

    const shoppingItemText = document.createElement('p');
    shoppingItemText.setAttribute('class','shopping__item__text');
    shoppingItemText.innerText=content;
    shoppingItem.appendChild(shoppingItemText);

    const shoppingItemImageWrapper = document.createElement('div');
    shoppingItemImageWrapper.setAttribute('class', 'shopping__item__image-wrapper');

    const svgNS = 'http://www.w3.org/2000/svg';
    const xlinkNS = 'http://www.w3.org/1999/xlink';

    const shoppingImage = document.createElementNS(svgNS,'svg');
    shoppingImage.setAttribute('class','shopping__item__image');

    const shoppingImageUse = document.createElementNS(svgNS,'use');
    shoppingImageUse.setAttributeNS(xlinkNS,'xlink:href','./assets/images/sprite.svg#close');
    shoppingImageUse.setAttribute('class','shopping__item__image__inside');
    shoppingImage.appendChild(shoppingImageUse);
    shoppingItemImageWrapper.appendChild(shoppingImage);
    shoppingItem.appendChild(shoppingItemImageWrapper);
    busket.appendChild(shoppingItem);
}

basketButton.forEach(item=>{
    item.addEventListener('click', e =>{
        const content = e.target.parentNode.querySelector('.product__item__title').innerText.toLowerCase().split(' ').map(word => word[0].toUpperCase()+word.substr(1)).join(' ');
        createItemInBasket(content);
    });
});


document.addEventListener('click', e =>{
    if(e.target.className.baseVal === "shopping__item__image"){
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
    else if(e.target.className.baseVal === 'shopping__item__image__inside'){
        e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
    }
});