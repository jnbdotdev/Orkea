let currentSlide = 1;
let selectedCover = '';
let selectedColor = 'vermelho';

function nextSlide() {
    if (currentSlide === 2 && !selectedCover) return;
    
    const current = document.getElementById('slide' + currentSlide);
    currentSlide++;
    const next = document.getElementById('slide' + currentSlide);
    
    current.classList.remove('active');
    current.classList.add('prev');
    next.classList.add('active');
    next.classList.remove('prev');

    if (currentSlide === 3) {
        updatePreview();
    }
    if (currentSlide === 5) {
        updateFinalPreview();
    }
}

function prevSlide() {
    const current = document.getElementById('slide' + currentSlide);
    currentSlide--;
    const prev = document.getElementById('slide' + currentSlide);
    
    current.classList.remove('active');
    prev.classList.remove('prev');
    prev.classList.add('active');
}

function selectCover(cover) {
    selectedCover = cover;
    
    const cards = document.querySelectorAll('.cover-card');
    cards.forEach(card => card.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    document.getElementById('btnNext2').disabled = false;
}

function updatePreview() {
    const previewCover = document.getElementById('previewCover');
    let img = '';
    
    if (selectedCover === 'chave') {
        img = `<img src="img/cover-key.png" alt="Opened cover key">`;
    } else if (selectedCover === 'pena') {
        img = `<img src="img/cover-feather.png" alt="Opened cover key">`;
    } else if (selectedCover === 'xadrez') {
        img = `<img src="img/cover-chess.png" alt="Opened cover key">`;
    }
    
    previewCover.innerHTML = img;
}

function selectColor(color) {
    selectedColor = color;
    
    const circles = document.querySelectorAll('.color-circle');
    circles.forEach(circle => circle.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    const mioloImage = document.getElementById('mioloImage');
    mioloImage.src = `img/miolo-${color}.png`;
}

function updateFinalPreview() {
    const finalCover = document.getElementById('finalCover');
    const finalMiolo = document.getElementById('finalMiolo');
    const finalBook = document.getElementById('finalBook');
    
    let imgCover = '';
    
    if (selectedCover === 'chave') {
        imgCover = `<img src="img/cover-key.png" alt="Opened cover key">`;
        imgBook = `<img src="img/book-key.png" alt="Opened cover key">`;
    } else if (selectedCover === 'pena') {
        imgCover = `<img src="img/cover-feather.png" alt="Opened cover feather">`;
        imgBook = `<img src="img/book-feather.png" alt="Opened cover feather">`;
    } else if (selectedCover === 'xadrez') {
        imgCover = `<img src="img/cover-chess.png" alt="Opened cover chess">`;
        imgBook = `<img src="img/book-chess.png" alt="Opened cover chess">`;
    }
    
    finalCover.innerHTML = imgCover;
    finalMiolo.innerHTML = `<img src="img/miolo-${selectedColor}.png" alt="Miolo">`;
    finalBook.innerHTML = imgBook;
}