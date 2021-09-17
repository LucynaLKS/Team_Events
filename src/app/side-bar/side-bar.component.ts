import { Component, EventEmitter, Output } from '@angular/core';
import { Place } from 'src/models/place';
import { SearchInterface } from '../search/search.component';
import { sortInterface } from '../sorting/sorting.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Output() searchPlacesEvent: EventEmitter<SearchInterface> =
    new EventEmitter<SearchInterface>();
  @Output() sortPlacesEvent: EventEmitter<sortInterface> =
    new EventEmitter<sortInterface>();

  Places: Place[] = [];

  searchPlaces(event: SearchInterface) {
    this.searchPlacesEvent.emit(event);
  }

  sortPlaces(event: sortInterface) {
    this.sortPlacesEvent.emit(event);
  }
}
