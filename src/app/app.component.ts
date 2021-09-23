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
import { selectedOptionsInterface } from './side-bar/side-bar.component';

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

  private selectedOptions: string[] = [];

  constructor(
    private placesService: PlacesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.places = this.placesService.getPlaces();

    this.route.queryParams.subscribe((params) => {
      if (params.order === 'alf-asc') {
        this.asc();
      } else if (params.order === 'alf-dsc') {
        this.desc();
      } else if (params.order === 'rate-high') {
        this.ratingFromHigh();
      } else if (params.order === 'rate-low') {
        this.ratingFromLow();
      }
    });
  }

  handleSelectedOptionsEvent(
    selectedOptionsEvent: selectedOptionsInterface
  ): void {
    console.log('selectedOptionsEvent', selectedOptionsEvent);

    this.places = this.placesService.filterPlaces(selectedOptionsEvent);
  }

  handlePaginationChange(pageNumber: number) {
    this.currentPaginationPage = pageNumber;
  }

  //rating
  filterPlacesByRating(event: RangeInterface) {
    this.selectedOptions;
    // this.places = this.placesService.getFilteredPlacesByRating(event);
  }

  searchPlaces(event: SearchInterface) {
    // this.places = this.placesService.getFilteredPlacesByName(event);
  }

  sortPlaces(event: userChangeEventInterface) {
    const { selectedOption } = event;
    // this.placesService.getPlaces(selectedOption);
    this.resetPagination();
  }

  // TODO: below sorting methods should be extracted to separate service
  ratingFromHigh() {
    this.router.navigate(['/'], { queryParams: { order: 'rate-high' } });
  }

  ratingFromLow() {
    this.router.navigate(['/'], { queryParams: { order: 'rate-low' } });
  }

  reset() {
    this.router.navigate(['/'], { queryParams: {} });
  }

  asc() {
    this.router.navigate(['/'], { queryParams: { order: 'alf-asc' } });
  }

  desc() {
    this.router.navigate(['/'], { queryParams: { order: 'alf-dsc' } });
  }

  private resetPagination(): void {
    this.currentPaginationPage = DEFAULT_PAGINATION_PAGE;
  }
}
