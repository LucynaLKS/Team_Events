import { Component, EventEmitter, Output } from '@angular/core';

import { Place } from 'src/models/place';

import { SearchInterface } from '../search/search.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Output() searchPlacesEvent: EventEmitter<SearchInterface> =
    new EventEmitter<SearchInterface>();

  Places: Place[] = [];

  searchPlaces(event: SearchInterface) {
    this.searchPlacesEvent.emit(event);
  }
}
