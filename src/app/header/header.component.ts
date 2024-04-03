import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule, 
    MatListModule,
    MatMenuModule,
    MatToolbarModule,

    
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent   {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
