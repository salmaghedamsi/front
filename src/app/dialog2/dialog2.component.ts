import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Action } from 'rxjs/internal/scheduler/Action';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-dialog2',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule,MatFormFieldModule,
    MatInputModule,MatIconModule,MatSelectModule,
    MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,FormsModule,MatButtonModule],
  templateUrl: './dialog2.component.html',
  styleUrl: './dialog2.component.css'
})
export class Dialog2Component {
  minDate: Date;
  maxDate: Date;
  ActionForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
  }

  ngOnInit():void{
    this.ActionForm=this.formBuilder.group({
      Action:['',Validators.required],
      détail:['',Validators.required],
      Responsable : ['',Validators.required],
      Date : ['',Validators.required],

    })
  }
  AddAction(){
    console.log(this.ActionForm.value);
  }
}


