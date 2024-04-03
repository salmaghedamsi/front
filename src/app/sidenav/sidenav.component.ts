import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterOutlet } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatDividerModule, 
    MatListModule,RouterModule,

    
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  constructor(private route: Router){}

}


