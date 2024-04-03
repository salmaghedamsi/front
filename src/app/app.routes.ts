import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImsauditComponent } from './imsaudit/imsaudit.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ImsstatusComponent } from './imsstatus/imsstatus.component';
import { ActionsComponent } from './actions/actions.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'imsstatus',component:ImsstatusComponent},
  {path:'imsaudit',component:ImsauditComponent},
  {path:'reporting',component:ReportingComponent},
  {path:'actions',component:ActionsComponent},


];
