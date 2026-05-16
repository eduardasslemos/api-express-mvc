import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
export class ProdutoService {
    produtoRepository: ProdutoRepository = ProdutoRepository.getInstance();

    cadastrarProduto (produtoData: any): Produto {
        const {nome, preco, fabricante} = produtoData;
        if (!nome || !preco || !fabricante) {
            throw new Error ("Informacoes incompletas");
        }
        const novoProduto = new Produto(nome, preco, fabricante);
        this.produtoRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProdutoId (id: any): Produto | undefined {
        const idNumber: number = parseInt(id, 10);
        console.log(id);
        return this.produtoRepository.filtraProdutoPorId(idNumber);
    }

    consultarProdutoNome (nome: any): Produto | undefined {
        const nomeString = nome.toString();
        console.log(nome);
        return this.produtoRepository.filtraProdutoPorNome(nomeString);
    }

    getProducts(): Produto[]{
        return this.produtoRepository.filtraTodosProdutos();
    }
}