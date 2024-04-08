import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../../data-service.service';

interface Bubble {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-interest-picker',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interest-picker.component.html',
  styleUrl: './interest-picker.component.css'
})
export class InterestPickerComponent  implements OnInit {
  exploreLink: string = "/explore";
  bubbles: Bubble[] = []
  
  ngOnInit(): void {
    const interests = new DataServiceService().getAllInterests();
    console.log(interests);
    for (const interest of interests){
      this.bubbles.push({name: interest, selected: false});
    }
  }

  toggleSelection(bubble: Bubble): void {
    bubble.selected = !bubble.selected;
  }
}
