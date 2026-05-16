import { Request, Response } from "express";
import { ProdutoService } from "../service/ProdutoService";
const produtoService = new ProdutoService();

export function cadastrarProduto (req: Request, res: Response) {
    try {
        const novoProduto = produtoService.cadastrarProduto(req.body);
        res.status(201).json (
        {
        mensagem: "Produto adicionado com sucesso!",
        produto: novoProduto
        }
        );
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};

export function pesquisarProdutoPorId (req: Request, res: Response) {
    try {
        let id = Number(req.params.id);

        const produtoPesquisado = produtoService.consultarProdutoId(id);

        if(!produtoPesquisado){
            res.status(404).json({
                mensagem: "Produto não encontrado"
            });
            return;
        }

        res.status(201).json (
        {
        mensagem: "Produto encontrado com sucesso!",
        produto: produtoPesquisado
        }
        );
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};

export function pesquisarProdutoPorNome (req: Request, res: Response) {
    try {
        let nome = (req.params.nome);

        const produtoPesquisado = produtoService.consultarProdutoNome(nome);

        if(!produtoPesquisado){
            res.status(404).json({
                mensagem: "Produto não encontrado"
            });
            return;
        }

        res.status(201).json (
        {
        mensagem: "Produto encontrado com sucesso!",
        produto: produtoPesquisado
        }
        );
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};

export function listaProdutos (req: Request, res: Response) {
    try {
        const produtos = produtoService.getProducts ();

        if(!produtos){
            res.status(404).json({
                mensagem: "Produto não encontrado"
            });
            return;
        }

        res.status(201).json (
        {
        mensagem: "Produtos encontrados com sucesso!",
        produtos: produtos
        }
        );
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};