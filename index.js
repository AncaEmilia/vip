window.APP = {};

window.mainPage = document.querySelector('#root');

APP.wishes = [
    {
        name: 'Anca',
        contact: '0770793369',
        varsta: '25',
        oras: 'Bucuresti',
        dream: 'Imi doresc sa invat sa merg pe bicicleta'
    },
    {
        name: 'Teo',
        contact: '0775673369',
        varsta: '25',
        oras: 'Bucuresti',
        dream: 'Mai vreau un caine',
    }
]

//salvez produsele in localStorage
function setWishes(wishes) {
    const stringWishes = JSON.stringify(wishes);
    localStorage.setItem("wishes", stringWishes);
}


//iau produsele din localStorage
function getWishes() {
    const returnedWishes = localStorage.getItem("wishes");
    return (JSON.parse(returnedWishes));
}

if (localStorage.getItem("wishes") === null) {
    setWishes(APP.wishes);
} 

function startRendering() {
    const localStorageWishes = getWishes();
    // afisez lista de produse, avand ca parametru APP.wishes//
    APP.renderWishList(localStorageWishes); 
}
//apelez functia startRendering dupa ce s-au incarcat toate scripturile//
window.addEventListener('load',startRendering); 

  