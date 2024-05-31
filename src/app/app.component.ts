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
import { Audit2Component } from './audit2/audit2.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, 
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
    MatListModule,Audit2Component,HttpClientModule,
    RegisterComponent,
    LoginComponent,
    
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet';
  sideBarOpen = true;
  showLayout = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.url);
      }
    });
  }

  ngOnInit(): void {
    this.checkRoute(this.router.url);
  }

  checkRoute(url: string): void {
    const authRoutes = ['/login', '/register'];
    this.showLayout = !authRoutes.includes(url);
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}