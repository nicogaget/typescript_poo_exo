import {Vehicule} from "../vehicule";
import {Moteur} from "../../moteurs/moteur";

export class Voiture extends Vehicule{


    constructor(marque: string, couleur: string, prix: number, moteur: Moteur, energy: number) {
        super(marque, couleur, prix, moteur, energy);
    }
}