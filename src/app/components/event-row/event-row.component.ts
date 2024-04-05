import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  events: EventItem[] = [];

  @Input()
  title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
