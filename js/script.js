// CONTADOR DO CARRINHO
let contador = 0;
const contadorCarrinho = document.getElementById("contador-carrinho");

// BOTÃO COMPRAR
const botoesComprar = document.querySelectorAll(".btn-comprar");

botoesComprar.forEach(botao => {
    botao.addEventListener("click", () => {
        contador++;
        contadorCarrinho.textContent = `🛒 Carrinho (${contador})`;
        alert("Produto adicionado ao carrinho!");
    });
});

// FILTRO DE PRODUTOS
const botoesFiltro = document.querySelectorAll(".btn-filtro");
const produtos = document.querySelectorAll(".produto");

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
        const filtro = botao.dataset.filtro;

        produtos.forEach(produto => {
            if (filtro === "todos" || produto.dataset.category === filtro) {
                produto.style.display = "block";
            } else {
                produto.style.display = "none";
            }
        });
    });
});
