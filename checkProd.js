function addCheckFunctionality() {
    const delButton = document.querySelectorAll('#btn-check');
    function delWish(){
        //const wishBox = document.querySelectorAll('.product');
        for (var ind = 0; ind < delButton.length; ind++) {
            
        //     // this.parentNode.parentNode.remove();
            this.parentNode.parentNode.style.opacity = "0.3";
    
        //     //const prod = localStorage.getItem("wishes");

        //     //return (JSON.parse(prod));
        //     //console.log(JSON.parse(prod));
        }  
    }
    

    function deleteParentNodeOnClick() {
        for (var i = 0; i < delButton.length; i++) {
            delButton[i].addEventListener("click", delWish);
        }
    }
    deleteParentNodeOnClick();
}
window.addEventListener('load', addCheckFunctionality)
     