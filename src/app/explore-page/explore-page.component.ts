import { Component, OnInit } from '@angular/core';
import { EventRowComponent } from '../components/event-row/event-row.component';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [EventRowComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css'
})
export class ExplorePageComponent  implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  
  }
}
