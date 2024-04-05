import { Component, OnInit } from '@angular/core';
import { EventItemComponent } from '../event-item/event-item.component';
import { EventItem } from '../../classes/event-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-row',
  standalone: true,
  imports: [CommonModule, EventItemComponent],
  templateUrl: './event-row.component.html',
  styleUrl: './event-row.component.css',
})
export class EventRowComponent implements OnInit {
  link: string =
    'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/34994/square_thumb%402x.jpg';
  events: EventItem[] = [
    new EventItem(this.link, 'Event1'),
    new EventItem(this.link, 'Event2'),
    new EventItem(this.link, 'Event3'),
    new EventItem(this.link, 'Event4'),
    new EventItem(this.link, 'Event5'),
    new EventItem(this.link, 'Event6'),
    new EventItem(this.link, 'Event1'),
    new EventItem(this.link, 'Event2'),
    new EventItem(this.link, 'Event3'),
    new EventItem(this.link, 'Event4'),
    new EventItem(this.link, 'Event5'),
    new EventItem(this.link, 'Event6'),
  ];
  title: string = 'Concerts';

  constructor() {}

  ngOnInit(): void {}
}
