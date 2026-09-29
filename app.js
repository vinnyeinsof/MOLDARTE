// Link geral da sua loja:
const linkShopeeGeral = "https://br.shp.ee/pRZzhTLD";
const linkWhatsAppGeral = "https://wa.me/c/5511922099723";

// Substitua as imagens de placeholder por fotos reais das suas peças hospedadas no próprio GitHub ou em links diretos
const produtos = [
    {
        id: 1,
        nome: "Vaso Decorativo Geométrico - PLA Silk",
        preco: "R$ 65,00",
        imagem: "https://images.unsplash.com/photo-1613587635999-73ff4270ebbe?q=80&w=600&auto=format&fit=crop", 
        linkShopee: linkShopeeGeral,
        linkWhatsApp: "https://wa.me/5511922099723?text=Ol%C3%A1%21%20Gostaria%20de%20comprar%20o%20Vaso%20Geom%C3%A9trico."
    },
    {
        id: 2,
        nome: "Suporte Minimalista para Headset",
        preco: "R$ 45,00",
        imagem: "https://images.unsplash.com/photo-1590209440625-78e72782e4e1?q=80&w=600&auto=format&fit=crop", 
        linkShopee: linkShopeeGeral,
        linkWhatsApp: "https://wa.me/5511922099723?text=Ol%C3%A1%21%20Gostaria%20de%20comprar%20o%20Suporte%20de%20Headset."
    },
    {
        id: 3,
        nome: "Escultura Abstrata - PLA Velvet",
        preco: "R$ 85,00",
        imagem: "https://images.unsplash.com/photo-1533139396181-42bb274b5a37?q=80&w=600&auto=format&fit=crop",
        linkShopee: linkShopeeGeral,
        linkWhatsApp: "https://wa.me/5511922099723?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20Escultura."
    },
    {
        id: 4,
        nome: "Organizador de Cabos de Mesa",
        preco: "R$ 30,00",
        imagem: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600&auto=format&fit=crop",
        linkShopee: linkShopeeGeral,
        linkWhatsApp: "https://wa.me/5511922099723?text=Ol%C3%A1%21%20Gostaria%20de%20comprar%20o%20Organizador."
    }
];

// Renderização dinâmica no DOM
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');

    produtos.forEach(produto => {
        const card = document.createElement('article');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${produto.nome}</h3>
                <p class="product-price">${produto.preco}</p>
                <div class="actions">
                    <a href="${produto.linkShopee}" target="_blank" rel="noopener noreferrer" class="btn-buy btn-shopee">
                        Comprar na Shopee
                    </a>
                    <a href="${produto.linkWhatsApp}" target="_blank" rel="noopener noreferrer" class="btn-buy btn-whatsapp">
                        Comprar no WhatsApp
                    </a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
});
