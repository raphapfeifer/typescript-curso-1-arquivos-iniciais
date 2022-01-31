import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //private negociacoes: Array<Negociacao> = [];

    // outra forma de declarar array
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    /*lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }*/

    //outra forma de declarar o método lista
    public lista(): readonly Negociacao[]{
        return this.negociacoes;
    }

}
