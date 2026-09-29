// --- Lógica do Banner Rotativo ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    currentSlideIndex = (n + slides.length) % slides.length;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(n) {
    showSlide(currentSlideIndex + n);
    resetInterval();
}

function currentSlide(n) {
    showSlide(n);
    resetInterval();
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => moveSlide(1), 5000); // Muda a cada 5 segundos
}

// Inicia o carousel
resetInterval();

// --- Lógica do Catálogo Dinâmico (Lê do ficheiro JSON) ---
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');

    // Faz o fetch do seu ficheiro de "banco de dados" local
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            grid.innerHTML = ''; // Limpa o loader
            
            produtos.forEach(produto => {
                const card = document.createElement('article');
                card.className = 'product-card';
                
                // Formata o número de WhatsApp para gerar o link correto
                const textWa = encodeURIComponent(`Olá, gostaria de saber mais sobre a peça: ${produto.nome}`);
                const linkWa = `https://wa.me/5511922099723?text=${textWa}`;

                card.innerHTML = `
                    <div class="img-container">
                        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${produto.nome}</h3>
                        <p class="product-price">${produto.preco}</p>
                        <div class="actions">
                            <a href="${produto.linkShopee}" target="_blank" class="btn-buy btn-shopee">
                                <i class="fas fa-shopping-bag"></i> Ver na Shopee
                            </a>
                            <a href="${linkWa}" target="_blank" class="btn-buy btn-whatsapp-buy">
                                <i class="fab fa-whatsapp"></i> Pedir no WhatsApp
                            </a>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        })
        .catch(error => {
            grid.innerHTML = '<p style="text-align:center; width:100%;">Erro ao carregar o catálogo. Atualize a página.</p>';
            console.error('Erro:', error);
        });
});
