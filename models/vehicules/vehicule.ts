import {Moteur} from "../moteurs/moteur";
import {StationEssence} from "../station-service/StationService";

export class Vehicule {

    private marque: string;
    private couleur: string;
    private prix: number;
    private moteur: Moteur;
    private energy :number

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur,energy :number) {
        this.marque = marque;
        this.couleur = couleur;
        this.prix = prix;
        this.moteur = moteur;
        this.energy =energy;

    }

    //GETTERS
    getMarque = () => {
        return this.marque;
    }

    getCouleur = () => {
        return this.couleur;
    }

    getPrix = () => {
        return this.prix;
    }

    getMoteur = () => {
        return this.moteur;
    }

    //SETTERS
    setMarque = (marque: string) => {
        this.marque = marque;
    }

    setCouleur = (couleur: string) => {
        this.couleur = couleur;
    }

    setPrix = (prix: number) => {
        this.prix = prix;
    }

    setMoteur = (moteur: Moteur) => {
        this.moteur = moteur;
    }


    getEnergy(): number {
        return this.energy;
    }

    setEnergy(value: number) {
        this.energy = value;
    }

    controlEnergy(){
        if (this.energy <0){
            console.log("plus d'energie")
        } else if (this.energy <0 && this.energy <=3){
            console.log("plus qu'une barre d'energie");
        } else {
            console.log("tranquille il y a de quoi faire")
        }

    }

    avance(){
        this.energy = this.energy-1;
        console.log("La voiture avance..., elle consomme 1 dose d'énergie")
        console.log(`Energie restante : ${this.energy}`)
    }

    ajouterEssence = (station : StationEssence, nbLitre: number) => {
        console.log(`Reserve avant remplissage : ${this.getEnergy()}`)
        let prix = nbLitre * station.getPrixEssence();
        this.energy= this.getEnergy()+ nbLitre;
        console.log(`La voiture ${this.marque} a dépensé ${prix}€ pour ${nbLitre}L d'essence `);
        console.log(`La voiture ${this.marque} maintenant ${this.energy} d'énergie`)
    }
}