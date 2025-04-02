// View - ProdutoView.js
class ProdutoView {
    constructor(controller) {
        // Recebe o controller como dependência
        this.controller = controller;
        
        // Cache de elementos DOM
        this.form = document.getElementById('produto-form');
        this.nomeInput = document.getElementById('nome');
        this.precoInput = document.getElementById('preco');
        this.listaProdutos = document.getElementById('lista-produtos');
        this.erroDiv = document.getElementById('erros');
        
        // Configura os event listeners
        this.configurarEventos();
        this.atualizarLista();
    }

    configurarEventos() {
        // Configura o submit do formulário
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o comportamento padrão de submit
            
            // Obtém os valores dos inputs
            const nome = this.nomeInput.value;
            const preco = this.precoInput.value;
            
            // Tenta adicionar o produto via controller
            const resultado = this.controller.adicionarProduto(nome, preco);
            
            if (resultado.success) {
                // Se sucesso, limpa o formulário e atualiza a lista
                this.form.reset();
                this.erroDiv.innerHTML = '';
                this.atualizarLista();
            } else {
                // Se erro, exibe as mensagens
                this.exibirErros(resultado.erros);
            }
        });
    }

    exibirErros(erros) {
        // Exibe os erros na div de erros
        this.erroDiv.innerHTML = erros.map(erro => 
            `<div class="erro">${erro}</div>`
        ).join('');
    }

    atualizarLista() {
        // Atualiza a lista de produtos na tela
        const produtos = this.controller.listarProdutos();
        
        this.listaProdutos.innerHTML = produtos.map(produto => `
            <div class="produto-item">
                <span>ID: ${produto.id}</span>
                <span>Nome: ${produto.nome}</span>
                <span>Preço: R$ ${produto.preco.toFixed(2)}</span>
            </div>
        `).join('');
    }
}