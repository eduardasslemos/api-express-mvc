"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProdutoController_1 = require("./controller/ProdutoController");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execucao no URL:http:localhost:${PORT}`);
}
app.post("/api/produto", ProdutoController_1.cadastrarProduto);
app.get("/api/produto/:id", ProdutoController_1.pesquisarProdutoPorID);
app.get("/api/produtos", ProdutoController_1.listaProdutos);
app.listen(PORT, logInfo);
