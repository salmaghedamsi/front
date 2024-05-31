import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ims } from '../model/ims';
import { ImsService } from '../service/ims.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule,MatFormFieldModule,
    MatInputModule,MatIconModule,MatSelectModule,HttpClientModule,
    MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,FormsModule,MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  IMSForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private imsService: ImsService,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
  }

  ngOnInit(): void {
    this.IMSForm = this.formBuilder.group({
      id: ['', Validators.required],
      responsable: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  addIMS(): void {
    if (this.IMSForm.valid) {
      const newIms: Ims = {
        id: this.IMSForm.get('id')?.value,
        date: this.IMSForm.get('date')?.value,
        responsable: this.IMSForm.get('responsable')?.value,
        traitementei: 0, 
        tauxretard: 0, 
        audit: '', 
        sucesscheck: '' 
      };

      this.imsService.createIms(newIms).subscribe(
        (res) => {
          alert("IMS added successfully");
          this.IMSForm.reset();
          this.dialogRef.close('save');
        },
        (error) => {
          console.error('Error adding IMS', error);
          alert("Error while adding the IMS");
        }
      );
    } else {
      alert("Form is not valid");
    }
  }
}