export class Negociacao {
    
    constructor(
        private _data: Date, // ← Programação defensiva
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    
    get volume(): number {
        return this.quantidade * this.valor;
    }

    // Programação defensiva ↓
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    // Fim programação defensiva ↑
}