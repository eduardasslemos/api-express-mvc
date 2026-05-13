import { Produto } from "../model/Produto";

export class ProdutoRepository {
    private static instance: ProdutoRepository;
    private produtoLista: Produto [] = [];

    private constructor() {}

    public static getInstance(): ProdutoRepository {
        if (!this.instance) {
            this.instance = new ProdutoRepository();
        }
        return this.instance;
    }

    insereProduto(produto: Produto) {
        this.produtoLista.push(produto);
    }

    filtraProdutoPorId(id: number): Produto | undefined {
        return this.produtoLista.find(produto => produto.id === id);
    }

    filtraTodosProdutos(): Produto[]{
        return this.produtoLista;
    }
}