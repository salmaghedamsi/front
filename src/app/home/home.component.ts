import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,
    MatSelectModule ,
    MatOptionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: Router){}
  searchText: any;
Data=[
  {IMS :1, date: 8,Responsable:"salah",traitement_etude_impact:"oui",StatutPDCA:"ok",Taux_de_retard:
  14,audit:"in progress",sucess_check:""},
  {IMS :4, date: 74 ,Responsable:"ali",traitement_etude_impact:"oui",StatutPDCA:"ok",Taux_de_retard:
14,audit:"",sucess_check:""},
{IMS :789, date: 14 ,Responsable:"sarra",traitement_etude_impact:"oui",StatutPDCA:"ok",Taux_de_retard:
14,audit:"",sucess_check:""},
]
goToDetails(){
this.route.navigate(["/imsstatus"]);
}
}
