export class Negociacao {
    constructor(_data, // ← Programação defensiva
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    // Programação defensiva ↓
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
