var cards = document.querySelectorAll('.card');
var hasFlippedCard = false ; 
var firstClick , secondClick , exit = 0 ; 
function memory(){
    this.classList.add('flip');
    //first Click
    if(hasFlippedCard == false) {
        hasFlippedCard = true;
        firstClick = this;
        return;
    }
    // second click
    hasFlippedCard = false ; 
    secondClick = this ;
    if(firstClick.dataset.color === secondClick.dataset.color && firstClick.dataset.different != secondClick.dataset.different) {
        firstClick.style.visibility = 'hidden';
        secondClick.style.visibility = 'hidden';
        exit++;
        if(exit == 8) {
            alert('Congrats !!!');
            location.reload();
        }
    }
    else {
        setTimeout(() => {
            firstClick.classList.remove('flip');
            secondClick.classList.remove('flip'); 
        }, 350);
    }
}
cards.forEach(card => card.addEventListener('click',memory))