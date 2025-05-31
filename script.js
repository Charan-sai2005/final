const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'electronics',
    image: 'assets/images/headphones.jpg.jpg',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'T-Shirt',
    category: 'clothing',
    image: 'assets/images/tshirt.jpg',
    description: 'Comfortable and stylish cotton t-shirt.',
  },
  {
    id: 3,
    name: 'Smartphone',
    category: 'electronics',
    image: 'assets/images/smartphone.jpg.jpg',
    description: 'Latest model smartphone with cutting-edge features.',
  },
  {
    id: 4,
    name: 'Novel Book',
    category: 'books',
    image: 'assets/images/book.jpg.jpg',
    description: 'Bestselling novel with an exciting plot.',
  },
  {
    id: 5,
    name: 'Jeans',
    category: 'clothing',
    image: 'assets/images/jeans.jpg.jpg',
    description: 'Classic blue jeans with modern fit.',
  },
];

const productGrid = document.getElementById('productGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

function renderProducts(category = 'all') {
  productGrid.innerHTML = '';

  const filtered = category === 'all' ? products : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    card.innerHTML = `
      <img loading="lazy" src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.category}</p>
    `;
    productGrid.appendChild(card);
  });
}

function openModal(product) {
  modalTitle.textContent = product.name;
  modalImage.src = product.image;
  modalDescription.textContent = product.description;
  modal.style.display = 'block';
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    renderProducts(category);
  });
});

productGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.product-card');
  if (card) {
    const productId = parseInt(card.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    openModal(product);
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

renderProducts();
