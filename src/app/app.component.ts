import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ImsauditComponent } from './imsaudit/imsaudit.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ImsstatusComponent } from './imsstatus/imsstatus.component';
import { ActionsComponent } from './actions/actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ActionsComponent,
    MatSidenavModule,
    MatDividerModule, 
    SidenavComponent,
    ImsauditComponent,
    HomeComponent,
    ImsstatusComponent,
    HeaderComponent,
    ReportingComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
