const likeButtons = document.querySelectorAll('#product__item__like-wrapper');


document.addEventListener('click', e =>{
    console.log(e)
    if(e.target.className === 'product__item__like-wrapper'){
        e.target.childNodes[1].classList.toggle('product__item__like_active');
    }

    else if(e.target.classList.contains('product__item__like')){
        e.target.classList.toggle('product__item__like_active')
    }

    else if(e.target.classList.value === 'product__item__like__inside'){
        e.target.parentNode.classList.toggle('product__item__like_active');
    }
});