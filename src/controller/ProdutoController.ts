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

export function pesquisarProdutoPorID (req: Request, res: Response) {
    try {
        let id = Number(req.params.id);

        const produtoPesquisado = produtoService.consultarProduto(id);

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
        res.status(201).json (
        {
        mensagem: "Produtos encontrados com sucesso!",
        produto: produtos
        }
        );
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};