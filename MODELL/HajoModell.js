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
        return this.rendezettlista=this.#lista.sort((a, b) => a.nev.localeCompare(b.nev))
    }
    szurtLista(){
        const SZURT=[]
        return SZURT=this.#lista.filter((elem)=>elem.valodi==true)
    }
}
    
