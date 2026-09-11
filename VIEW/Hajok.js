import Hajo from "./Hajo.js";
export default class Hajok {
    #lista = []
    #szuloelem = ""
    constructor(szuloelem,lista) {
        this.#lista = lista;
        this.#szuloelem = szuloelem;
        this.hajokMegjelenit();
    }
    hajokMegjelenit() {
        this.#lista.forEach(element => {
            new Hajo(element, this.#szuloelem);
        });
    }
}