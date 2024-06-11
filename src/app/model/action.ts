import { Instruction } from "./instruction";
import { user } from "./user";
export class Action {
  id: number;
  name: string;
  oui: string;
  delai: Date;
  detail: string;
  attachement: string;
  statut: string;
  commentaire: string;
  responsable: String;
  instruction: Instruction;

  constructor(
    id: number,
    name: string,
    oui: string,
    delai: Date,
    detail: string,
    attachement: string,
    statut: string,
    commentaire: string,
    responsable: String,
    instruction: Instruction
  ) {
    this.id = id;
    this.name = name;
    this.delai=delai
    this.oui = oui;
    this.detail = detail;
    this.attachement = attachement;
    this.statut = statut;
    this.responsable=responsable,
    this.commentaire = commentaire;
    this.instruction = instruction;
  }
}
