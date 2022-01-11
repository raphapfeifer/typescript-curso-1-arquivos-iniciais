

export class Negociacao{

    /*constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number){}   
    

    get data(): Date{
        return this._data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }*/

    // outra forma de declarar a classs usando o readonly

    constructor(
        private  _data: Date,
        private readonly quantidade: number,
        private readonly valor: number){} 
        
        get volume(): number{
            return this.quantidade * this.valor;
        }   

        get data(): Date{
            const data = new Date(this._data.getTime())
            return data;
        }
}