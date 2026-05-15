"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const Produto_1 = require("../model/Produto");
const ProdutoRepository_1 = require("../repository/ProdutoRepository");
class ProdutoService {
    produtoRepository = ProdutoRepository_1.ProdutoRepository.getInstance();
    cadastrarProduto(produtoData) {
        const { nome, preco, fabricante } = produtoData;
        if (!nome || !preco || !fabricante) {
            throw new Error("Informacoes incompletas");
        }
        const novoProduto = new Produto_1.Produto(nome, preco, fabricante);
        this.produtoRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id) {
        const idNumber = parseInt(id, 10);
        console.log(id);
        return this.produtoRepository.filtraProdutoPorId(idNumber);
    }
    getProducts() {
        return this.produtoRepository.filtraTodosProdutos();
    }
}
exports.ProdutoService = ProdutoService;
