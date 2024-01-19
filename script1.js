// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'shahrukh-khan_9.jpg',
  "actor-dulquer-salman-during-promotion-of-film-sita-ramam_165942895440.jpg",
  "7028e3ef4b6fc12fdeeb96e1229cd251.jpg",
  'Family-Titles-for-Vijay-Devarakonda-s-Film--1686983345-1385.jpg',
  'prabhas-50189.jpg',
  "rana.jpg",
  "HD-wallpaper-thalapathy-vijay-jaw-beast-vijay-thalapathy-master.jpg",
  
  "nani-at-dasara-interviewthumb.jpg"


  
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 8],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 8; i++) {
  appendNewCard();
}