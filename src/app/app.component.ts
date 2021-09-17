import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/models/place';
import { PlacesService } from './places.service';
import { SearchInterface } from './search/search.component';
import {
  SortInterface,
  userChangeEventInterface,
} from './sorting/sorting.component';

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

  handlePaginationChange(pageNumber: number) {
    this.currentPaginationPage = pageNumber;
  }

  searchPlaces(event: SearchInterface) {
    this.places = this.placesService.getFilteredPlacesByName(event);
  }

  sortPlaces(event: userChangeEventInterface) {
    const { selectedOption } = event;
    this.resetPagination();

    if (selectedOption === 'No-sort') {
      this.reset();
    } else if (selectedOption === 'A-Z') {
      this.asc();
    } else if (selectedOption === 'Z-A') {
      this.desc();
    } else if (selectedOption === 'Rating-H') {
      this.ratingFromHigh();
    } else if (selectedOption === 'Rating-L') {
      this.ratingFromLow();
    }
  }

  // TODO: below sorting methods should be extracted to separate service
  ratingFromHigh() {
    this.places.sort((a, b) =>
      a.Rating < b.Rating ? 1 : b.Rating < a.Rating ? -1 : 0
    );

    this.router.navigate(['/'], { queryParams: { order: 'rate-high' } });
  }

  ratingFromLow() {
    this.places.sort((a, b) =>
      a.Rating > b.Rating ? 1 : b.Rating > a.Rating ? -1 : 0
    );

    this.router.navigate(['/'], { queryParams: { order: 'rate-low' } });
  }

  reset() {
    this.places.sort((a, b) => (a.Id > b.Id ? 1 : b.Id > a.Id ? -1 : 0));

    this.router.navigate(['/'], { queryParams: {} });
  }

  asc() {
    this.places.sort((a, b) =>
      a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
    );

    this.router.navigate(['/'], { queryParams: { order: 'alf-asc' } });
  }

  desc() {
    this.places.sort((a, b) =>
      a.Name < b.Name ? 1 : b.Name < a.Name ? -1 : 0
    );

    this.router.navigate(['/'], { queryParams: { order: 'alf-dsc' } });
  }

  private resetPagination(): void {
    this.currentPaginationPage = DEFAULT_PAGINATION_PAGE;
  }
}
