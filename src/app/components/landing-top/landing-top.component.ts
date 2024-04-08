import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-top',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-top.component.html',
  styleUrl: './landing-top.component.css'
})
export class LandingTopComponent {
  signInPath: string = "/signIn"
}
