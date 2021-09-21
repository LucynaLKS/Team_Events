import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from 'src/models/place';
import { SearchInterface } from '../search/search.component';
import {
  SortInterface,
  userChangeEventInterface,
} from '../sorting/sorting.component';
import { RangeInterface } from '../slider/slider.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Output() searchPlacesEvent: EventEmitter<SearchInterface> =
    new EventEmitter<SearchInterface>();
  @Output() sortPlacesEvent: EventEmitter<userChangeEventInterface> =
    new EventEmitter<userChangeEventInterface>();
  @Output() fliterPlacesEvent: EventEmitter<RangeInterface> =
  new EventEmitter<RangeInterface>();
  
  searchPlaces(event: SearchInterface) {
    this.searchPlacesEvent.emit(event);
  }

  sortPlaces(event: userChangeEventInterface) {
    this.sortPlacesEvent.emit(event);
  }

  filterPlacesByRating(event: RangeInterface) {
    this.fliterPlacesEvent.emit(event);
  }
}
