// Controller - ProdutoController.js
class ProdutoController {
    constructor() {
        // Inicializa a lista de produtos e o contador de IDs
        this.produtos = []; // Array para armazenar os produtos
        this.idCounter = 1;  // Contador para gerar IDs únicos
    }

    adicionarProduto(nome, preco) {
        // Cria um novo produto com os dados fornecidos
        const novoProduto = new Produto(this.idCounter++, nome, parseFloat(preco));
        
        // Valida o produto antes de adicionar
        const erros = novoProduto.validar();
        
        if (erros.length === 0) {
            // Se não houver erros, adiciona à lista
            this.produtos.push(novoProduto);
            return { success: true, produto: novoProduto };
        } else {
            // Se houver erros, retorna-os
            return { success: false, erros };
        }
    }

    listarProdutos() {
        // Retorna uma cópia da lista de produtos (para evitar modificações externas)
        return [...this.produtos];
    }
}