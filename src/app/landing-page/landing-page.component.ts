import { Component } from '@angular/core';
import { LandingTopComponent } from '../components/landing-top/landing-top.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LandingTopComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
