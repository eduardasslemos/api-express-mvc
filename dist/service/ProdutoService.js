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
    consultarProdutoId(id) {
        const idNumber = parseInt(id, 10);
        console.log(id);
        return this.produtoRepository.filtraProdutoPorId(idNumber);
    }
    consultarProdutoNome(nome) {
        const nomeString = nome.toString();
        console.log(nome);
        return this.produtoRepository.filtraProdutoPorNome(nomeString);
    }
    getProducts() {
        return this.produtoRepository.filtraTodosProdutos();
    }
}
exports.ProdutoService = ProdutoService;
