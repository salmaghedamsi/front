export class rapport {
    id:number;
    nchangement:string;
    typeDocument:string;
    nrInstruction:string;
    titreDocument:string;
    raison:string;
    etat:string;
    application:string;
    mj:string;
    déviation:string;
    action:string;
    responsable:string;
    delai:string;
    cs:string;

    constructor(
        id:number,
        nchangement:string,
        typeDocument:string,
        nrInstruction:string,
        titreDocument:string,
        raison:string,
        etat:string,
        application:string,
        mj:string,
        déviation:string,
        action:string,
        responsable:string,
        delai:string,
        cs:string,
    )
  {  this.id = id;
        this.nchangement = nchangement;
        this.typeDocument = typeDocument;
        this.nrInstruction = nrInstruction;
        this.titreDocument = titreDocument;
        this.raison = raison;
        this.etat = etat;
        this.application = application;
        this.mj = mj;
        this.déviation = déviation;
        this.action = action;
        this.responsable = responsable;
        this.delai = delai;
        this.cs = cs;}

}