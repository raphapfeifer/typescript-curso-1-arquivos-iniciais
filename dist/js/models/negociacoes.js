export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        // outra forma de declarar array
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /*lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }*/
    //outra forma de declarar o método lista
    lista() {
        return this.negociacoes;
    }
}
