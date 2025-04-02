// Model - Produto.js
class Produto {
    constructor(id, nome, preco) {
        // Construtor que inicializa um novo produto
        this.id = id;       // Identificador único do produto
        this.nome = nome;   // Nome do produto
        this.preco = preco; // Preço do produto
    }

    validar() {
        // Método para validar os dados do produto
        const erros = [];
        
        if (!this.nome || this.nome.length < 3) {
            erros.push('Nome deve ter pelo menos 3 caracteres');
        }
        
        if (this.preco <= 0 || isNaN(this.preco)) {
            erros.push('Preço deve ser um número positivo');
        }
        
        return erros; // Retorna array de mensagens de erro (vazio se válido)
    }
}
