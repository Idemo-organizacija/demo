import { Component, OnInit } from '@angular/core';
import { NavBarItem } from '../../classes/nav-bar-item';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  navBarItems: NavBarItem[] = [
    new NavBarItem('/home', 'Home'),
    new NavBarItem('/recommendations', 'Recommendations'),
    new NavBarItem('/explore', 'Explore'),
    new NavBarItem('/connect', 'Connect'),
    new NavBarItem('/signIn', 'SignIn'),
  ];


  constructor(private router: Router) { }
  
  ngOnInit(): void {
      
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
