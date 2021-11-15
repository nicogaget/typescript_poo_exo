import {Moteur} from "../moteur";

export class MoteurElec extends Moteur{
    private name: string ="electrique"
    constructor(vitesse: number, km: number) {
        super(vitesse, km);
    }
}