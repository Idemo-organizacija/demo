import { Component, Input, OnInit } from '@angular/core';
import { EventItem } from '../../classes/event-item';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
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

  modalVisible: boolean = false;
  
  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    // customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = true;
    config.centered = true;
  }

  ngOnInit(): void {
  }

  openModal(content: any) {
    this.modalService.open(content);
  }
}
