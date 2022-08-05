const tabButtons = document.querySelectorAll('.tab-button');
const tabItem = document.querySelectorAll('.our-shop__map');
tabButtons.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const id = e.target.getAttribute('id').replace('#','');
        console.log(id);
        tabButtons.forEach((elem)=>{
            elem.classList.remove('tab-button_active');
        });
        tabItem.forEach((elem)=>{
            elem.classList.remove('our-shop__map_active');
        })
        item.classList.add('tab-button_active');
        document.getElementById(id).classList.add('our-shop__map_active');
    })
})