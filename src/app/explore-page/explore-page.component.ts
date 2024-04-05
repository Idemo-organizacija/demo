import { Component, OnInit } from '@angular/core';
import { EventRowComponent } from '../components/event-row/event-row.component';
import { EventItem } from '../classes/event-item';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [CommonModule, EventRowComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css',
})
export class ExplorePageComponent implements OnInit {
  events!: Map<string, EventItem[]>;

  constructor() {
    this.events = new DataServiceService().getEventPerType();
  }

  ngOnInit(): void {}

  get getEvents(): { key: string; value: EventItem[] }[] {
    const array: { key: string; value: EventItem[] }[] = [];
    this.events.forEach((value, key) => {
      array.push({ key, value });
    });

    return array;
  }
}
