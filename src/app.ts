import express from "express";
import { cadastrarProduto, pesquisarProdutoPorID, listaProdutos } from "./controller/ProdutoController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use (express.json());

function logInfo() {
    console.log(`API em execucao no URL:http:localhost:${PORT}`);
}

app.post("/api/produto", cadastrarProduto);
app.get("/api/produto/:id", pesquisarProdutoPorID)
app.get("/api/produtos", listaProdutos)

app.listen(PORT, logInfo);