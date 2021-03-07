mainPage.innerHTML += `
    <h1 class="col-12 text-center" id="chapter3" style="font-size:3.5vw;">Îndeplinește</h1> 
    <hr>   
    <ul class="row d-flex justify-content-center p-0 m-0 product-list"> 
    </ul>
    
`;

APP.renderWishList = (productArray) => {
    const wishList = document.querySelector('.product-list');
    wishList.innerHTML = '';
    productArray.forEach( (elem) => {
        wish = new Wish( elem.name, elem.contact, elem.varsta, elem.oras, elem.dream);
        wish.renderWish();  

    })  

}



 