

export abstract class View<T>{

    protected elemento: HTMLElement;
    

    constructor(seletor: string){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }


    protected abstract template(model: T): string;

    //@logarTempoDeExecucao(true)
    //@inspect // exemplo de um decoretor simplificado que não passa nenhum parâmetro que no caso é o inspect
    public update(model: T): void{
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

}