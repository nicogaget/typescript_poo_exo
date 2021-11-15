import {Moteur} from "../moteur";

export class MoteurDiesel extends Moteur{

    constructor(vitesse: number, km: number) {
        super(vitesse, km);
    }
}