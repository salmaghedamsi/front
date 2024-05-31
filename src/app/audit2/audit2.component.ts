import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-audit2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit2.component.html',
  styleUrl: './audit2.component.css'
})
export class Audit2Component {
  Data=[
    {nchangement:11471, type_document:"tn",nrinscrution:"14A",titre_doc:"doc1",raison:"suppression",etat:"en cour"},
    {nchangement:771, type_document:"tn",nrinscrution:"17A",titre_doc:"doc1",raison:"suppression",etat:"en cour"},
    ]
  }

