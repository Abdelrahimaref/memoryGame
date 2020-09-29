var cards = document.querySelectorAll('.card');
var i =  0 ; 
var firstClick , secondClick , exit = 0 ; 
function memory(){
    this.classList.add('flip');
    if(i == 0) {
        i++;
        firstClick = this;
    }
    else if(i == 1) {
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
        i = 0 ;
    }
}
cards.forEach( 
    function(card) {
        console.log(card);
        card.addEventListener('click',memory)
    } 
)