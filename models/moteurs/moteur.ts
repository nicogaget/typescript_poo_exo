
export class Moteur {

  private vitesse: number;
  private km: number;

  constructor(vitesse: number, km: number,) {
    this.vitesse = vitesse;
    this.km = km;
  }

//GETTERS
  getVitesse = () => {
    return this.vitesse;
  }

  getKm = () => {
    return this.km;
  }

  //SETTERS
  setVitesse = (vitesse: number) => {
    this.vitesse = vitesse;
  }

  setKm = (km: number) => {
    this.km = km;
  }
}
