import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/models/place';
import { PlacesService } from './places.service';
import { SearchInterface } from './search/search.component';
import {
  SortInterface,
  userChangeEventInterface,
} from './sorting/sorting.component';
import { RangeInterface } from './slider/slider.component';
import { SelectedOptionsInterface } from './side-bar/side-bar.component';

const DEFAULT_PAGINATION_PAGE = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'team-events';

  places: Place[] = [];
  currentPaginationPage = DEFAULT_PAGINATION_PAGE;

  @Input() userChangeEvent: EventEmitter<RangeInterface> =
    new EventEmitter<RangeInterface>();

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.places = this.placesService.getPlaces();
  }

  handleSelectedOptionsEvent(
    selectedOptionsEvent: SelectedOptionsInterface
  ): void {
    this.resetPagination();

    this.places = this.placesService.filterPlaces(selectedOptionsEvent);
  }

  handlePaginationChange(pageNumber: number) {
    this.currentPaginationPage = pageNumber;
  }

  private resetPagination(): void {
    this.currentPaginationPage = DEFAULT_PAGINATION_PAGE;
  }
}
