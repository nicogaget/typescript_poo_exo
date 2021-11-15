import {Moteur} from "../moteur";

export class MoteurEssence extends Moteur{
private type:string= "essence";

    constructor(vitesse: number, km: number, type: string) {
        super(vitesse, km);
        this.type = type;
    }
}