import { user } from "./user";

export class Instruction {
    id: string;
    titre: string;
    main_changes: string;
    process: string;
    StatutEI: number;
    TauxdeRetard: number;
    responsable: String;
    ims_id: number; 
    
    constructor(
      id: string,
      titre: string,
      main_changes: string,
      process: string,
      StatutEI: number,
      TauxdeRetard: number,
      responsable: String,
      ims_id: number
    ) {
      this.id = id;
      this.titre = titre;
      this.main_changes = main_changes;
      this.process = process;
      this.StatutEI = StatutEI;
      this.TauxdeRetard = TauxdeRetard;
      this.responsable = responsable;
      this.ims_id = ims_id;
    }
  }
  