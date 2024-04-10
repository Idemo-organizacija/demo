import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventItem } from '../classes/event-item';
import { DataServiceService } from '../data-service.service';
import { EventRowComponent } from '../components/event-row/event-row.component';

@Component({
  selector: 'app-recommendations-page',
  standalone: true,
  imports: [CommonModule, EventRowComponent],
  templateUrl: './recommendations-page.component.html',
  styleUrl: './recommendations-page.component.css'
})
export class RecommendationsPageComponent {
  events: Map<string, EventItem[]> = new Map<string, EventItem[]>();
  service: DataServiceService = new DataServiceService();

  filterTypes: string[] = ["Movie", "Sport Event", "Board Games", "Rock Concert", "Metal"]
  constructor() {
    var filtered = this.service.getEventPerType();
    for (const val of filtered) {
      if (this.containsType(val[0])) {
        this.events.set(val[0], val[1]);
      }
    }
  }

  containsType(type: string): boolean {
    for (const filtertype of this.filterTypes) {
      console.log(type, filtertype, type === filtertype)
      if (type === filtertype) {
        return true;
      }
    }

    return false;
  }

  get getEvents(): { key: string; value: EventItem[] }[] {
    const array: { key: string; value: EventItem[] }[] = [];
    this.events.forEach((value, key) => {
      array.push({ key, value });
    });

    return array;
  }
}
