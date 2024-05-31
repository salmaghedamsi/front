import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule, 
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    DatePipe ,
    
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent   {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
public myDate=new Date();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
