import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchInterface } from '../search/search.component';
import { RangeInterface } from '../slider/slider.component';
import { userChangeEventInterface } from '../sorting/sorting.component';

export interface SelectedOptionsInterface {
  // checkedTags: string;
  searchPlaces: string;
  sortPlaces: string;
  filterPlacesByRating: RangeInterface;
  checkedTags: string[];
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Output() selectedOptionsEvent: EventEmitter<SelectedOptionsInterface> =
    new EventEmitter<SelectedOptionsInterface>();

  private selectedOptions: SelectedOptionsInterface = {
    searchPlaces: '',
    sortPlaces: 'No-sort',
    filterPlacesByRating: {
      from: 0,
      to: 5,
    },
    checkedTags: [],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.sortPlaces({
        selectedOption: params.order,
      });
    });
  }

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

  filterPlacesByTags(event: string[]) {
    this.selectedOptions.checkedTags = event;
    this.selectedOptionsEvent.emit(this.selectedOptions);
  }
}
