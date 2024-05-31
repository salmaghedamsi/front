import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Audit2Component } from '../audit2/audit2.component';
@Component({
  selector: 'app-imsaudit',
  standalone: true,
  imports: [CommonModule,RouterModule,Audit2Component],
  templateUrl: './imsaudit.component.html',
  styleUrl: './imsaudit.component.css'
})
export class ImsauditComponent {
  constructor(private route: Router){}
  Data=[
    {nchangement:11471, type_document:"tn",nrinscrution:"14A",titre_doc:"doc1",raison:"suppression",etat:"en cour"},
    {nchangement:771, type_document:"tn",nrinscrution:"17A",titre_doc:"doc1",raison:"suppression",etat:"en cour"},
    ]}
