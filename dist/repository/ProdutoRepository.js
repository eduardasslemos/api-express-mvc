"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepository = void 0;
class ProdutoRepository {
    static instance;
    produtoLista = [];
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProdutoRepository();
        }
        return this.instance;
    }
    insereProduto(produto) {
        this.produtoLista.push(produto);
    }
    filtraProdutoPorId(id) {
        return this.produtoLista.find(produto => produto.id === id);
    }
    filtraProdutoPorNome(nome) {
        return this.produtoLista.find(produto => produto.nome === nome);
    }
    filtraTodosProdutos() {
        return this.produtoLista;
    }
}
exports.ProdutoRepository = ProdutoRepository;
