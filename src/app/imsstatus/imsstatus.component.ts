import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import * as XLSX from 'xlsx';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { ImsService } from '../service/ims.service';
import { FormsModule } from '@angular/forms';
import { Ims } from '../model/ims';
import { InstructionService } from '../service/instruction.service';
import { Instruction} from '../model/instruction';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-imsstatus',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatIconModule, MatOptionModule, RouterModule, FormsModule,MatSnackBarModule],
  templateUrl: './imsstatus.component.html',
  styleUrls: ['./imsstatus.component.css']
})
export class ImsstatusComponent implements OnInit {
  excelData: any[] = [];
  ims: Ims;
  instructions: Instruction[] = [];  
  constructor(
    private route: Router,
    private instructionService: InstructionService,
    private imsService: ImsService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.ims = new Ims(0, new Date(), '', 0, 0, '', '');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.fetchImsData(id);
      }
    });
  }

  fetchImsData(id: number) {
    this.imsService.getImsById(id).subscribe(
      data => {
        this.ims = data;
      },
      error => {
        console.error('Error fetching IMS data', error);
      }
    );
  }

  onFileChange(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      this.excelData = XLSX.utils.sheet_to_json(worksheet);

      console.log(this.excelData);
    };
  }

  downloadcsvfile() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      noDownload: true,
      headers: ['id', 'titre', 'main_changes', 'process']
    };

    new ngxCsv(this.excelData, 'impact study', options);
  }

  addInstructions() {
    const newInstruction = new Instruction(
      this.ims.id.toString(), 
      'New Title',
      'Main Changes',
      'Process',
      1,
      1,
      1,
      this.ims.id
    );

    this.instructionService.createInstruction(newInstruction).subscribe(
      data => {
        console.log('Instruction added successfully');
        this.snackBar.open('Instruction added successfully', 'Close', {
          duration: 3000, 
        });
        this.fetchInstructions(); 
      },
      error => {
        console.error('Error adding instruction', error);
      }
    );
  }


  fetchInstructions() {
    this.instructionService.getInstructionsByImsId(this.ims.id).subscribe(
      data => {
        this.instructions = data;
      },
      error => {
        console.error('Error fetching instructions', error);
      }
    );
  }
}