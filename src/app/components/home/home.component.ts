import { Component, OnInit } from '@angular/core';
import { EventsAll } from '@app/shared/mocks';
import { EventsAllDefinition } from '@app/shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  EventsAll : EventsAllDefinition[] = EventsAll;
  filteredEvents = new BehaviorSubject(this.EventsAll);
  constructor(
    private apiService: ApiService
  ) {
    
   }
 

  ngOnInit(): void {

    this.apiService.getAllEvents()
      .subscribe(res => console.log(res)); 
      console.log(EventsAll);
  }

  OnFilterClick(event) {
    console.log(event);
    const filteredEvents = this.EventsAll.filter(item => item.type === event.srcElement.innerText); 
    
    this.filteredEvents.next(filteredEvents);
  }
}
