import { Component, Input, OnInit, Output } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../../models/place';
import { PaginatePipe } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeInterface } from '../slider/slider.component';
import { SearchInterface } from '../search/search.component';

interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  @Output() rating = 0;
  page: number = 1;

  @Input()
  places: Place[] = [];

  sort: Sort[] = [
    { value: 'No-sort', viewValue: 'Brak' },
    { value: 'A-Z', viewValue: 'A-Z' },
    { value: 'Z-A', viewValue: 'Z-A' },
    { value: 'Rating-H', viewValue: 'Ocena od najwyższej' },
    { value: 'Rating-L', viewValue: 'Ocena od najniższej' },
  ];

  selectedSort = this.sort[0].value;

  constructor(
    private PlacesService: PlacesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
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

  changeSort(value: string) {
    if (value === 'No-sort') {
      this.reset();
    } else if (value === 'A-Z') {
      this.asc();
    } else if (value === 'Z-A') {
      this.desc();
    } else if (value === 'Rating-H') {
      this.ratingFromHigh();
    } else if (value === 'Rating-L') {
      this.ratingFromLow();
    }
  }

  ratingFromHigh() {
    this.places.sort((a, b) =>
      a.Rating < b.Rating ? 1 : b.Rating < a.Rating ? -1 : 0
    );
    this.page = 1;
    this.router.navigate(['/'], { queryParams: { order: 'rate-high' } });
  }

  ratingFromLow() {
    this.places.sort((a, b) =>
      a.Rating > b.Rating ? 1 : b.Rating > a.Rating ? -1 : 0
    );
    this.page = 1;
    this.router.navigate(['/'], { queryParams: { order: 'rate-low' } });
  }

  reset() {
    this.places.sort((a, b) => (a.Id > b.Id ? 1 : b.Id > a.Id ? -1 : 0));
    this.page = 1;
    this.router.navigate(['/'], { queryParams: {} });
  }

  asc() {
    this.places.sort((a, b) =>
      a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
    );
    this.page = 1;
    this.router.navigate(['/'], { queryParams: { order: 'alf-asc' } });
  }

  desc() {
    this.places.sort((a, b) =>
      a.Name < b.Name ? 1 : b.Name < a.Name ? -1 : 0
    );
    this.page = 1;
    this.router.navigate(['/'], { queryParams: { order: 'alf-dsc' } });
  }

  filterPlaces(event: RangeInterface) {
    this.places = this.PlacesService.getFilteredPlacesByRating(event);
  }
}
