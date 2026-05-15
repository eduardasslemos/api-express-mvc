"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    id;
    nome;
    preco;
    fabricante;
    constructor(nome, preco, fabricante) {
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.Produto = Produto;
