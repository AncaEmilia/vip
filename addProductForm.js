mainPage.innerHTML +=`    
    <h1 class="col-12 text-center" id="chapter2" style="font-size:3.5vw;">Visează</h1>
    <hr>
    <div class="row" id="add-wish">
        <form class="col-5 offset-1" id="add-form">
            <label class="form-label" for="name" style="font-size:1.8vw;">Nume: </label>
            <input class="form-control " type="text" id="name"/>

            <label class="form-label" for="contact" style="font-size:1.8vw;">Număr de telefon: </label>
            <input class="form-control" type="number" id="contact"/>

            <label class="form-label" for="varsta" style="font-size:1.8vw;">Vârstă: </label>
            <input class="form-control" type="number" id="varsta"/>

            <label class="form-label" for="oras" style="font-size:1.8vw;">Oraș: </label>
            <input class="form-control" type="text" id="oras"/>

            <label class="form-label" for="dream" style="font-size:1.8vw;">Descrierea visului: </label>
            <textarea class="form-control" type="text" id="dream" rows="3"/></textarea>
            
            <div class="container d-flex justify-content-center mt-3">
                <button class="btn rounded-pill " id="btn" style="font-size:1.7vw;">Adauga visul !</button>
            </div>
        </form>

        <div class="col-5 mb-5 offset-1 d-flex flex-column  justify-content-center" id="exp" >

            <div class="container d-flex mb-3" id="wishdiv">
                <div class="col-6 mb-0 d-flex justify-content-end align-items-end" id="wish" style="font-size:2.1vw;">Îmi doresc să...</div>
                <img class="col-6 img-responsive mb-3" src="nor.jpg" alt="nor.."/>
            </div>
                <p class="mb-2 pe-5 d-flex justify-content-end" id="exp1" style="font-size:1.3vw;">...să învăț să merg pe bicicletă</p>
                <p class="mb-2 d-flex justify-content-center" id="exp2" style="font-size:1.3vw;">...un animal de companie</p>
                <p class="mb-2 ps-5 d-flex justify-content-center" id="exp3" style="font-size:1.3vw;">.....să sar cu parașuta</p>
                <p class="mb-2 d-flex justify-content-center" id="exp4" style="font-size:1.3vw;">...un concediu la mare</p>
                <p class="mb-2  pe-5 d-flex justify-content-end" id="exp5" style="font-size:1.3vw;">...o cutie de ciocolată</p>    
        </div>
    </div>

`;

// utilizez aceatsa functie pentru a intarzia executia pentru submit //
function addFormFunctionality() {
    const form = document.querySelector('#add-form');
    //const checkbox = document.querySelector('#check');
    form.onsubmit = function(event) {
        // previn comportamentul default al lui submit care  presupune reincarcarea paginii //
        event.preventDefault();
        //targetul este elementul care a declansat evenimentul-formularul//
        const userName = event.target.name.value;
        const userContact = Number(event.target.contact.value);
        const userAge = Number(event.target.varsta.value);
        const userCity = event.target.oras.value;
        const userDream = event.target.dream.value;
        
        
        const dreams = {
            
            name: userName,
            contact: userContact,
            varsta: userAge,
            oras: userCity,
            dream: userDream,
            
        }
        
        if (userName == "" || userDream == "" || userContact == "" || userAge == "" || userCity == "") {
            return false;
        } else {
            const localStorageWishes = getWishes();
            localStorageWishes.push(dreams);
            setWishes(localStorageWishes);
            form.reset();
            APP.renderWishList(localStorageWishes);   
        }
        addCheckFunctionality();
    }
    
}

window.addEventListener('load', addFormFunctionality);