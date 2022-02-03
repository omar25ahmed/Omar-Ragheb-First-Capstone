const menu = document.querySelector('.navbar-toggler');
menu.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('bg-light');
});

const cards = [
  {
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Rubèn Sherali',
    title: 'American Football Player',
    description: 'He is one of the greatest players in the history and he is the most player that won ballon dor',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    name: 'Catell Metz',
    title: 'Argentinian Baketball Player',
    description: 'He is one of the greatest players in the history and he is the most player that won a lot of trophies',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    name: 'Nogah Ejder',
    title: 'French Tennis Player',
    description: 'He is one of the greatest players in the history and he is the most player that won a lot of trophies',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    name: 'Cleon Przemek',
    title: 'British Volleyball Player',
    description: 'He is one of the greatest players in the history and he is the most player that won a lot of trophies',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
    name: 'Temple Ashwin',
    title: 'Spanish Soccer Player',
    description: 'He is one of the greatest players in the history and he is the most player that won a lot of trophies',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    name: 'Suni Buhle',
    title: 'Egyptian Handball Player',
    description: 'He is one of the greatest players in the history and he is the most player that won a lot of trophies',
  },
];

const speakers = document.querySelector('#speakers');
function cardsBuilder(card) {
  const {
    image, name, title, description,
  } = card;
  speakers.innerHTML += `
  <div class="card mb-3 col-md-6 card-border">
    <div class="row g-0">
      <div class="col-4">
        <img src="${image}" class="img-fluid pt-5 pt-md-4 rounded-start" alt="...">
      </div>
      <div class="col-8">
        <div class="card-body card-right">
          <p class="card-title"><strong>${name}</strong></p>
          <p class="card-text text-danger p-text">${title}</p>
          <hr class="text-dark my-1 w-25">
          <p class="card-text p-text">${description}</p>
      </div>
    </div>
  </div>
  `;
}

cards.forEach((card, index) => {
  cardsBuilder(card, index);
});