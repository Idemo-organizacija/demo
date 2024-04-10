import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Bubble {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  bubbles: Bubble[] = [
    {name: "Movies", selected: false},
    {name: "Running", selected: false},
    {name: "Metal", selected: false},
    {name: "Board Games", selected: false},
    {name: "Rock", selected: false},
  ]
}