import express from "express";
import { cadastrarProduto, pesquisarProdutoPorId, pesquisarProdutoPorNome, listaProdutos } from "./controller/ProdutoController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use (express.json());

function logInfo() {
    console.log(`API em execucao no URL:http:localhost:${PORT}`);
}

app.post("/api/produto", cadastrarProduto);
app.get("/api/produto/:id", pesquisarProdutoPorId)
app.get("/api/produto/:nome", pesquisarProdutoPorNome)
app.get("/api/produtos", listaProdutos)

app.listen(PORT, logInfo);