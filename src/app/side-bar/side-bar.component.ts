import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from 'src/models/place';
import { SearchInterface } from '../search/search.component';
import {
  SortInterface,
  userChangeEventInterface,
} from '../sorting/sorting.component';
import { RangeInterface } from '../slider/slider.component';

export interface SelectedOptionsInterface {
  searchPlaces: string;
  sortPlaces: string;
  filterPlacesByRating: RangeInterface;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Output() selectedOptionsEvent: EventEmitter<SelectedOptionsInterface> =
    new EventEmitter<SelectedOptionsInterface>();

  private selectedOptions: SelectedOptionsInterface = {
    searchPlaces: '',
    sortPlaces: 'No-sort',
    filterPlacesByRating: {
      from: 0,
      to: 5,
    },
  };

  searchPlaces(event: SearchInterface) {
    this.selectedOptions.searchPlaces = event.searchText;
    this.selectedOptionsEvent.emit(this.selectedOptions);
  }

  sortPlaces(event: userChangeEventInterface) {
    this.selectedOptions.sortPlaces = event.selectedOption;
    this.selectedOptionsEvent.emit(this.selectedOptions);
  }

  filterPlacesByRating(event: RangeInterface) {
    this.selectedOptions.filterPlacesByRating = event;
    this.selectedOptionsEvent.emit(this.selectedOptions);
  }
}
