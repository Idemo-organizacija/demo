import { Injectable } from '@angular/core';
import * as jsonData from '../assets/data.json';
import { EventItem } from './classes/event-item';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  events: EventItem[] = jsonData.events;

  getAllEvents(): EventItem[] {
    return this.events;
  }

  getEventForType(type: string): EventItem[] {
    return this.events.filter((event: EventItem) => event.type === type);
  }

  getEventForLocation(location: string): EventItem[] {
    return this.events.filter(
      (event: EventItem) => event.location === location
    );
  }

  getEventPerType(): Map<string, EventItem[]> {
    const map = new Map<string, EventItem[]>();

    for (const event of this.events) {
      if (!map.has(event.type)) {
        map.set(event.type, []);
      }

      map.get(event.type)?.push(event);
    }

    return map;
  }

  getAllTypes(): string[] {
    const types = new Set<string>();
    this.events.forEach((event: EventItem) => types.add(event.type));

    return Array.from(types.values());
  }
}
