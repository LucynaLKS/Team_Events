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

  private selectedOptions: string[] = [];

  constructor(
    private placesService: PlacesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.places = this.placesService.getPlaces();

    this.route.queryParams.subscribe((params) => {
      if (params.order === 'A-Z') {
        this.asc();
      } else if (params.order === 'Z-A') {
        this.desc();
      } else if (params.order === 'Rating-H') {
        this.ratingFromHigh();
      } else if (params.order === 'Rating-L') {
        this.ratingFromLow();
      }

      const sortParams: SelectedOptionsInterface = {
        searchPlaces: '',
        sortPlaces: params.order,
        filterPlacesByRating: {
          from: 0,
          to: 5,
        },
      };
      this.places = this.placesService.filterPlaces(sortParams);
    });
  }

  handleSelectedOptionsEvent(
    selectedOptionsEvent: SelectedOptionsInterface
  ): void {
    this.places = this.placesService.filterPlaces(selectedOptionsEvent);
  }

  handlePaginationChange(pageNumber: number) {
    this.currentPaginationPage = pageNumber;
  }

  //rating
  filterPlacesByRating(event: RangeInterface) {
    this.selectedOptions;
  }

  sortPlaces(event: userChangeEventInterface) {
    const { selectedOption } = event;
    this.resetPagination();
  }

  // TODO: below sorting methods should be extracted to separate service
  ratingFromHigh() {
    this.router.navigate(['/'], { queryParams: { order: 'Rating-H' } });
    //this.router.navigate(['/'], { queryParams: { order: 'rate-high' } });
  }

  ratingFromLow() {
    this.router.navigate(['/'], { queryParams: { order: 'Rating-L' } });
    // this.router.navigate(['/'], { queryParams: { order: 'rate-low' } });
  }

  reset() {
    this.router.navigate(['/'], { queryParams: {} });
  }

  asc() {
    this.router.navigate(['/'], { queryParams: { order: 'A-Z' } });
    // this.router.navigate(['/'], { queryParams: { order: 'alf-asc' } });
  }

  desc() {
    this.router.navigate(['/'], { queryParams: { order: 'Z-A' } });
    // this.router.navigate(['/'], { queryParams: { order: 'alf-dsc' } });
  }

  private resetPagination(): void {
    this.currentPaginationPage = DEFAULT_PAGINATION_PAGE;
  }
}
