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
import { UserService } from '../service/user.service';
import { user } from '../model/user';
import { EmailService } from '../service/email.service';
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
  ResponsableEI: user[] = [];
  constructor(
    private route: Router,
    private instructionService: InstructionService,
    private imsService: ImsService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private userService:UserService,
    private emailService:EmailService
  ) {
    this.ims = new Ims(0, new Date(), '', 0, 0, '', '');
  }

  ngOnInit(): void {
    this.getResponsableEI();
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.fetchImsData(id);
      }
    });
  }
  getResponsableEI(): void {
    this.userService.getUsers().subscribe(users => {
      this.ResponsableEI = users.filter(user => user.role === 'ResponsableEI');
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
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ['id', 'titre', 'main_changes', 'process' , 'statut_etude_empact', 'TauxdeRetard','ims_id']
    };

    new ngxCsv(this.excelData, 'impact study', options);
  }


  addInstructions(row: any, index: number) {
    const imsId = this.activatedRoute.snapshot.params['id'];
    const newInstruction = new Instruction(
      row.id,
      row.titre,
      row.main_changes,
      row.process,
      row.statut_etude_empact,
      row.TauxdeRetard,
      row.responsable,
      imsId
    );
  
    this.instructionService.createInstruction(newInstruction, imsId).subscribe(
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
  sendEmail(responsableName: string): void {
    const responsable = this.ResponsableEI.find(user => user.name === responsableName);
    const email = responsable ? responsable.email : null;
  
    if (email) {
      const emailData = {
        to: email
      };
  
      this.emailService.sendEmail(emailData).subscribe(
        response => {
          console.log('Email envoyé avec succès', response);
        },
        error => {
          console.error('Erreur lors de l\'envoi de l\'email', error);
        }
      );
    } else {
      console.error('Destinataire non trouvé');
    }
  }
  

}