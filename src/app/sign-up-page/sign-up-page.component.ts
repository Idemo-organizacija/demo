import { Component } from '@angular/core';
import { NavBarItem } from '../classes/nav-bar-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
  signInRoute: NavBarItem = new NavBarItem('/signIn', 'Sign In');
  interestPicker: NavBarItem = new NavBarItem('/interestPicker', 'Interest Picker');
}
