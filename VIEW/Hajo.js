export default class Hajo {
    #obj = {}
    #szuloelem = ""
    constructor(obj, szuloelem) {
        this.#obj = obj;
        this.#szuloelem = szuloelem;
        this.nev = obj.nev;
        this.szine = obj.szine;
        this.kapitany = obj.kapitany;
        this.valodi = obj.valodi;
        this.megjelenit();
        this.esemenyKezelo();
        this.kosarba();
    }

    megjelenit() {
        const SZOVEG = `
        <div class="hajo">
            <h2>${this.nev}</h2>
            <p><span>kapitány neve: ${this.kapitany}</span></p>
            <p><span>hajó színe: ${this.szine}</span></p>
            <button>kiválaszt</button>
            <button class="kosarba">kosárba</button>
        </div>
        `;
        this.#szuloelem.insertAdjacentHTML("beforeend", SZOVEG);
        this.buttonElem = this.#szuloelem.querySelector(".hajo:last-child button");
        this.kosarbaElem = this.#szuloelem.querySelector(".hajo:last-child .kosarba");
    }

    esemenyKezelo() {
        if (!this.buttonElem) {
            return;
        }

        this.buttonElem.addEventListener("click", () => {
            const e = new CustomEvent("kivalasztas", { detail: this.#obj });
            window.dispatchEvent(e);
        });
    }
    kosarba() {
        this.kosarbaElem.addEventListener("click", () => {
            const k = new CustomEvent("kosárba", { detail: this.#obj });
            window.dispatchEvent(k);
        });
        
    }

}