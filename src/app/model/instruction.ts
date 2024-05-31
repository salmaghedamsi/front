export class Instruction {
    id: string;
    titre: string;
    main_Changes: string;
    process: string;
    statutEtudeImpact: number;
    tauxDeRetard: number;
    responsableei: number;
    imsId: number; 
    
    constructor(
      id: string,
      titre: string,
      main_Changes: string,
      process: string,
      statutEtudeImpact: number,
      tauxDeRetard: number,
      responsableei: number,
      imsId: number
    ) {
      this.id = id;
      this.titre = titre;
      this.main_Changes = main_Changes;
      this.process = process;
      this.statutEtudeImpact = statutEtudeImpact;
      this.tauxDeRetard = tauxDeRetard;
      this.responsableei = responsableei;
      this.imsId = imsId;
    }
  }
  