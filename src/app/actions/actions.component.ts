import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatDialogTitle, MatDialogContent, MatDialog } from '@angular/material/dialog';
import { FormArray, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionsService } from '../service/actions.service';
import { Action } from '../model/action';
import { user } from '../model/user';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule
  ],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  actionsForm: FormGroup;
  actions = [
    { name: 'Formation des responsabilités citées dans l\'instruction et concernés par le changement ou la création' },
    { name: 'Traduction de l\'instruction en français' },
    { name: 'Création ou màj d\'une instruction interne' },
    { name: 'Mise à jour des instruction liées' },
    { name: 'Mise à jour de fichier CSR' },
    { name: 'Mise à jour du modèle tortue' },
    { name: 'Mise à jour de l\'AMDEC(FMEA) ou/et Plan de surveillance' },
    { name: 'Mise à jour de support de formation qui porte sur le sujet de l\'instruction (si ça existe)' },
    { name: 'Affichage /mise à jour de l\'affichage de l\'instruction sur poste de travail' },
    { name: 'pas d\'impact' }
  ];
  responsableA: user[] = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private actionsService: ActionsService,
    private userService: UserService
  ) {
    this.actionsForm = this.formBuilder.group({
      actions: this.formBuilder.array(this.actions.map(action => this.createActionFormGroup(action)))
    });
  }

  ngOnInit(): void {
    this.getResponsableA();
  }

  getResponsableA(): void {
    this.userService.getUsers().subscribe(users => {
      this.responsableA = users.filter(user => user.role === 'ResponsableA');
    });
  }

  createActionFormGroup(action: any): FormGroup {
    return this.formBuilder.group({
      name: [action.name, Validators.required],
      oui: ['oui', Validators.required],
      detail: [''],
      responsable: [''],
      delai: [''],
      attachement: [''],
      statut: ['en attente'],
      commentaire: ['']
    });
  }

  get actionsControls() {
    return (this.actionsForm.get('actions') as FormArray).controls;
  }

  onFileSelected(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const actionsArray = this.actionsForm.get('actions') as FormArray;
      actionsArray.at(index).patchValue({ attachement: file });
    }
  }

  saveAllActions() {
    if (this.actionsForm.valid) {
      const actionsData = this.actionsForm.value.actions;
      this.actionsService.saveAllActions(actionsData).subscribe(
        response => {
          console.log('Actions saved successfully', response);
        },
        error => {
          console.error('Error saving actions', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  updateStatus(index: number, statut: string) {
    const actionsArray = this.actionsForm.get('actions') as FormArray;
    const actionFormGroup = actionsArray.at(index) as FormGroup;
    actionFormGroup.get('statut')?.setValue(statut);
  }

  getAllActions() {
    this.actionsService.getAllActions().subscribe((data) => {
      this.actions = data;
    });
  }
}