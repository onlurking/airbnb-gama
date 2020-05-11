const baseUrl = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

const results = document.querySelector('.results');

const buildCard = (imgsrc, tag, title, price) => {
  const html = `
    <div class="card">
      <div class="card__image">
        <img
          src="${imgsrc}"
          alt=""
        />
      </div>
      <div class="card__description">
        <div class="card__tag">${tag}</div>
        <div class="card__title">
          ${title}
        </div>
        <div class="card__price">
          R$ ${price}
        </div>
      </div>
    </div>
  `;

  const div = document.createElement('div');
  div.innerHTML = html;

  results.appendChild(div);
}

const getData = () => {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => data.map(item => {
      const { photo, property_type, name, price } = item;

      buildCard(photo, property_type, name, price)
    }));
}

getData()
