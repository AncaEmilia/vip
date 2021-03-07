
class Wish {
    constructor(name, contact, varsta, oras, dream) {
        this.name = name;
        this.contact = contact;
        this.varsta = varsta;
        this.oras = oras;
        this.dream = dream;
        
        
    }

    renderWish() {
        
        const wishList = document.querySelector('.product-list');
        wishList.innerHTML += `
         
            <li class="container col-3 rounded m-2 p-2 product">

                <p style="font-size:1.5vw;">Nume: ${this.name}</p>
                <p style="font-size:1.5vw;">Număr de telefon: ${this.contact}</p>
                <p style="font-size:1.5vw;">Vârstă: ${this.varsta}</p>
                <p style="font-size:1.5vw;">Oraș: ${this.oras}</p>
                <p style="font-size:1.5vw;">Descrierea visului: ${this.dream}</p>
                
                <div class="container d-flex justify-content-center mt-3">
                    <button class="btn rounded-pill" id="btn-check" style="font-size:1.3vw;">Îndeplinit &#10003; </button>
                </div>
                
            </li>   
            
        `
    }
}
