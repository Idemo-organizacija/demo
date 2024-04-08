import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarItem } from '../classes/nav-bar-item';

@Component({
  selector: 'app-sign-inpage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sign-inpage.component.html',
  styleUrl: './sign-inpage.component.css'
})
export class SignInpageComponent {
  signUpRoute: NavBarItem = new NavBarItem('/signUp', 'Sign Up');
}
