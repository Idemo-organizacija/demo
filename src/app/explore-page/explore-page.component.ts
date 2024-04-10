import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventRowComponent } from '../components/event-row/event-row.component';
import { EventItem } from '../classes/event-item';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [CommonModule, EventRowComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css',
})
export class ExplorePageComponent implements OnInit {
  locations: string[];
  types: string[];
  events!: Map<string, EventItem[]>;
  service: DataServiceService = new DataServiceService();

  filterType: string = "";
  filterLocation: string = "";
  filterName: string = "";

  constructor(private cdr: ChangeDetectorRef) {
    this.events = this.service.getEventPerType();

    this.locations = this.service.getAllLocations();
    this.types = this.service.getAllTypes();
  }

  ngOnInit(): void {}

  get getEvents(): { key: string; value: EventItem[] }[] {
    const array: { key: string; value: EventItem[] }[] = [];
    this.events.forEach((value, key) => {
      array.push({ key, value });
    });

    return array;
  }

  onTypeSelected(value: any) {
    this.filterType = value.target.value;
    this.doFilter();
  }

  onLocationSelected(value: any) {
    this.filterLocation = value.target.value;
    this.doFilter();
  }

  onSearchTypes(value: any) {
    this.filterName = value.target.value;
    this.doFilter();
  }

  doFilter(): void {
    const filtered = new Map<string, EventItem[]>();
    const values = this.service.getEventPerType();
    for (const val of values) {
      if (this.filterType === "" || val[0] === this.filterType) {
        filtered.set(val[0], val[1].filter((ev) => this.doFilterForItem(ev)));
      }
    }

    this.events = filtered;
  }

  doFilterForItem(item: EventItem): boolean {
    return (this.filterName === "" || item.name.toUpperCase().includes(this.filterName.toUpperCase())) && (this.filterLocation === "" || item.location === this.filterLocation);
  }

  updateView(): void {
    this.cdr.detectChanges();
  }
}