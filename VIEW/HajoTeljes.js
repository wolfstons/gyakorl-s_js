export default class HajoTeljes {
    #obj={}
    #szuloelem=""
    constructor(obj,szuloelem) {
        this.#obj = obj;
        this.#szuloelem = szuloelem;
        this.név = obj.nev;
        this.szine = obj.szine;
        this.kapitany = obj.kapitany;
        this.valodi = obj.valodi;
        this.leiras = obj.leiras;
        this.megjelenit();
    }
    megjelenit() {
        const SZOVEG=`
        <div>
        <h2>${this.név}</h2>
        <p><span>kapitány neve:${this.kapitany}</span></p>
        <p><span>hajó színe:${this.szine}</span></p>
        <p><span>leírás:${this.leiras}</span></p>   
      </div>
        `
        this.#szuloelem.insertAdjacentHTML("beforeend",SZOVEG);
    }
}