import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
@Component({
  selector: 'app-imsstatus',
  standalone: true,
  imports: [CommonModule,MatSelectModule,
    MatOptionModule],
  templateUrl: './imsstatus.component.html',
  styleUrl: './imsstatus.component.css'
})
export class ImsstatusComponent {
data=[
  {instruction:"AA3117",title:"crimping",mainChanges:"annexe 4",process:"cp3,1",responsableei:"ali",OPM:"...."}
]
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    console.log('Selected file:', file);
  }
}
}
