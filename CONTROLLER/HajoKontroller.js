import Hajomodell from "../MODELL/HajoModell.js";
import Hajok from "../VIEW/Hajok.js";

export default class HajoKontroller{
    /*feladata a kapcsolat tartás a wiev közötti kapcsolat tartás
    itt iratkozunk fel az eseméynekre
    itt példányosítjuk a modellt */

    #hajoModell=[]
    #hajoview=[]
    constructor(){
        this.#hajoModell=new Hajomodell();
        this.ARRTICLEELEM=document.querySelectorAll(".tarolo")[0];
        this.#hajoview=new Hajok(this.ARRTICLEELEM, this.#hajoModell.getlista());

    }
}