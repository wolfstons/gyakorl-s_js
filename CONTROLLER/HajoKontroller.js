import Hajomodell from "../MODELL/HajoModell.js";
import Hajok from "../VIEW/Hajok.js";
import HajoTeljes from "../VIEW/HajoTeljes.js";
import Hajo from "../VIEW/Hajo.js";

export default class HajoKontroller {
    /*feladata a kapcsolat tartás a wiev közötti kapcsolat tartás
    itt iratkozunk fel az eseméynekre
    itt példányosítjuk a modellt */

    #hajoModell = [];
    #hajoview = [];

    constructor() {
        this.#hajoModell = new Hajomodell();
        this.ARRTICLEELEM = document.querySelectorAll(".tarolo")[0];
        this.rendezesGomb = document.getElementById("rendezes");
        this.szuresGomb = document.getElementById("szures");
        this.KOSARELEM  = document.querySelectorAll("#kosar");
        this.#hajoview = new Hajok(this.ARRTICLEELEM, this.#hajoModell.getlista());
        this.rendezesSzuresEsemenyKezelo();
    }

    rendezesSzuresEsemenyKezelo() {
        this.rendezesGomb.addEventListener("click", () => {
            this.ARRTICLEELEM.innerHTML = "";
            new Hajok(this.ARRTICLEELEM, this.#hajoModell.rendezLista());
        });

        this.szuresGomb.addEventListener("click", () => {
            this.ARRTICLEELEM.innerHTML = "";
            new Hajok(this.ARRTICLEELEM, this.#hajoModell.szurtLista());
        });

        window.addEventListener("kivalasztas", (e) => {
            this.ARRTICLEELEM.innerHTML = "";
            new HajoTeljes(e.detail, this.ARRTICLEELEM);
        });

        window.addEventListener("kosárba", (e) => {
            console.log(e.detail);
            this.#hajoModell.kosarba(e.detail);
            this.KOSARELEM.innerHTML = "";
            new Hajok(this.#hajoModell.getKosar(), this.KOSARELEM);
        });
    }
}