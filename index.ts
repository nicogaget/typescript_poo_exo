import {Moteur} from "./models/moteurs/moteur";
import {Voiture} from "./models/vehicules/voitures/voiture";
import {StationEssence} from "./models/station-service/StationService";

let moteur1 = new Moteur(130, 19999 );
let voiture = new Voiture("4L", "Blanche", 1000, moteur1,10);
let station1 = new StationEssence(1.2,1.8)

voiture.avance();
voiture.ajouterEssence(station1,10)





