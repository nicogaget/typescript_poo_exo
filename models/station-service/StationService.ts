export class StationEssence {

    private prixEssence : number;
    private prixDiesel : number;

    constructor(prixEssence: number, prixDiesel: number) {
        this.prixDiesel = prixDiesel;
        this.prixEssence = prixEssence;
    }

    getPrixEssence = () => {
        return this.prixEssence;
    }

    getPrixDiesel = () => {
        return this.prixDiesel;
    }

}