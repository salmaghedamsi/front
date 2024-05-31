import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatDialogTitle, MatDialogContent, MatDialog } from '@angular/material/dialog';
import { Dialog2Component } from '../dialog2/dialog2.component';
@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule,MatSelectModule,
    MatOptionModule,MatSelectModule,Dialog2Component, MatDialogTitle,
    MatDialogContent,],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  constructor(private route: Router, private  dialog:MatDialog){}

  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  }
  
  data=['ali','salah','mohamed'];

  openDialog() {
    this.dialog.open(Dialog2Component, {
      width : "30%"
    });
}
}