import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule,MatSelectModule,
    MatOptionModule,MatSelectModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  }
  
  data=['ali','salah','mohamed'];

}

