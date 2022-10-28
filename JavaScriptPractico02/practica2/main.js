const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu =  document.querySelector('.desktop-menu');
const menuHamIcon =  document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const menuCarritoIcon =  document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClose =aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose =aside.classList.contains('inactive');


    if(!isAsideClose){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClose =mobileMenu.classList.contains('inactive');

    //si el mobilemenu está open, hay que cerrarlo
    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120.00,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'pantalla',
    price: 1120.00,
    image: "https://static2.abc.es/media/favorito/2022/03/01/mejor-television-calidad-precio_20220301201917-U86147306024VvE-620x349@abc.jpg"
});

productList.push({
    name: 'Phone',
    price: 3020.00,
    image: "https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FhgqGyS3avzE6wDBgoBNltpk7wws%3D%2F0x0%3A2040x1360%2F2040x1360%2Ffilters%3Afocal(1020x680%3A1021x681)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F23262016%2Fajohnson_220216_5033_0006.jpg&w=1080&q=75"
});


for( product of productList){
    const htmlCards= `<div class="product-card">
    <img src= ${product.image} alt="">
    <div class="product-info">
      <div>
        <p>${product.price}</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>`

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML += htmlCards;
}