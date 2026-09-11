import { HAJOLISTA } from "./adatok.js"
export default class Hajomodell{
    #lista=[]

    constructor() {
        this.#lista = HAJOLISTA;
    }

    getlista() {
        return this.#lista;
    }
    rendezLista(){
        /*név szerint abc */
        return this.rendezettlista=this.#lista.sort((a, b) =>{
           /*  if (a.nev < b.nev) {
                return -1;
            }
            return 1;*/
            return a>b ? 1 : -1
        });
    }
    szurtLista(){
        const SZURT=this.#lista.filter((elem)=>elem.valodi==false);
        return SZURT
    }
    getAdat(id){

        return this.#lista.find((elem)=>{
            return elem.id===id});
    }
}
    
