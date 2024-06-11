import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { DialogComponent } from '../dialog/dialog.component';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImsService } from '../service/ims.service';
import { Ims } from '../model/ims';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule 
    ,ReactiveFormsModule ,HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  ims: Ims[] = [];

  date1:any;
  date2:any;
  days:any;
  selectClasscheck: string = '';
  selectaudit: string = '';


  dateRangeForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  searchText: string = '';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private imsService: ImsService
  ) {}

  ngOnInit(): void {
    this.getAllIms();
  }

  private getAllIms(): void {
    this.imsService.getAllIms().subscribe((data) => {
      this.ims = data;
    });
  }
  confirmAndDelete(id: number): void {
    if (confirm('Are you sure you want to delete this IMS?')) {
      this.deleteIms(id);
    }
  }

  private deleteIms(id: number): void {
    this.imsService.deleteIms(id).subscribe(data => {
      console.log(data);
      this.getAllIms();
    });
  }
  
  goToDetails(id: number): void {
    this.router.navigate(['/imsstatus', id]);
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, { width: '30%' });
  }
  updateStatus(id: number, event: Event, field: 'sucesscheck' | 'audit'): void {   
     const value = (event.target as HTMLSelectElement).value;
    this.imsService.getImsById(id).subscribe(ims => {
      ims[field] = value;
      this.imsService.updateIms(id, ims).subscribe(data => {
        console.log('Status updated successfully', data);
        this.getAllIms();
      });
    });
  }

}