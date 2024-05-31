export class Ims {
    id: number;
    date: Date;
    responsable:String;
    traitementei: number;
    tauxretard: number;
    audit: string;
    sucesscheck: string;
  
    constructor(
      id: number, 
      date: Date, 
      responsable:String, 
      traitementei: number, 
      tauxretard: number, 
      audit: string,
      sucesscheck: string
    ) {
      this.id = id;
      this.date = date;
      this.traitementei = traitementei;
      this.tauxretard = tauxretard;
      this.audit = audit;
      this.sucesscheck = sucesscheck;
      this.responsable= responsable;
    }
  }