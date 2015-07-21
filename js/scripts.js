function isLocalStorageAvailable() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

window.onload  = function(){

    isLocalStorageAvailable();

    /*if(localStorage.getItem("slide-order") && $(document).find(".back-button").length){
        $(".back-button").attr("href", "#slide"+localStorage.getItem("rioflora_slide_order"));
    }*/

};
