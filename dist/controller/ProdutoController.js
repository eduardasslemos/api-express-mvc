"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarProduto = cadastrarProduto;
exports.pesquisarProdutoPorId = pesquisarProdutoPorId;
exports.pesquisarProdutoPorNome = pesquisarProdutoPorNome;
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
function pesquisarProdutoPorId(req, res) {
    try {
        let id = Number(req.params.id);
        const produtoPesquisado = produtoService.consultarProdutoId(id);
        if (!produtoPesquisado) {
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
function pesquisarProdutoPorNome(req, res) {
    try {
        let nome = (req.params.nome);
        const produtoPesquisado = produtoService.consultarProdutoNome(nome);
        if (!produtoPesquisado) {
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
        if (!produtos) {
            res.status(404).json({
                mensagem: "Produto não encontrado"
            });
            return;
        }
        res.status(201).json({
            mensagem: "Produtos encontrados com sucesso!",
            produtos: produtos
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
