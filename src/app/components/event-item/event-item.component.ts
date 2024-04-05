import { Component, Input, OnInit } from '@angular/core';
import { EventItem } from '../../classes/event-item';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.css'
})
export class EventItemComponent implements OnInit  {
  @Input({ required: true }) 
  event!: EventItem;

  constructor() { }

  ngOnInit(): void {
  }
}
