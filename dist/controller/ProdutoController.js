"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarProduto = cadastrarProduto;
exports.pesquisarProdutoPorID = pesquisarProdutoPorID;
exports.listaProdutos = listaProdutos;
const ProdutoService_1 = require("../service/ProdutoService");
const produtoService = new ProdutoService_1.ProdutoService();
function cadastrarProduto(req, res) {
    try {
        const novoProduto = produtoService.cadastrarProduto(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            produto: novoProduto
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function pesquisarProdutoPorID(req, res) {
    try {
        let id = Number(req.params.id);
        const produtoPesquisado = produtoService.consultarProduto(id);
        if(!produtoPesquisado){
            res.status(404).json({
                mensagem: "Produto não encontrado"
            });
            return;
        }
        res.status(201).json({
            mensagem: "Produto encontrado com sucesso!",
            produto: produtoPesquisado
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function listaProdutos(req, res) {
    try {
        const produtos = produtoService.getProducts();
        res.status(201).json({
            mensagem: "Produtos encontrados com sucesso!",
            produto: produtos
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
