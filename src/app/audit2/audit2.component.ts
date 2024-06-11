import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-audit2',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,MatDatepickerModule,MatInputModule,MatFormFieldModule],
  templateUrl: './audit2.component.html',
  styleUrl: './audit2.component.css'
})
export class Audit2Component {
  Data=[
    {nchangement:11471, type_document:"tn",nrinscrution:"14A",titre_doc:"doc1",raison:"suppression",etat:"en cour"},
    {nchangement:771, type_document:"tn",nrinscrution:"17A",titre_doc:"doc1",raison:"suppression",etat:"en cour"},
    ]
    minDate: Date;
    maxDate: Date;
    constructor() {
      this.minDate = new Date();
      this.maxDate = new Date();
      this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
    }
  }

