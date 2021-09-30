import { Injectable } from '@angular/core';
import data from './data/places-katowice.json';
import { Place } from '../models/place';
import { RangeInterface } from './slider/slider.component';
import { SearchInterface } from './search/search.component';
import { SelectedOptionsInterface } from './side-bar/side-bar.component';
import { Router } from '@angular/router';
// import { TagsService } from './tags.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = data;

  constructor(private router: Router) {}

  getPlaces(): Place[] {
    return data;
  }

  filterPlaces(selectedOptions: SelectedOptionsInterface): Place[] {
    this.places = data;

    if (selectedOptions.searchPlaces) {
      this.getFilteredPlacesByName({
        searchText: selectedOptions.searchPlaces,
      });
    }

    if (selectedOptions.filterPlacesByRating) {
      this.getFilteredPlacesByRating({
        from: selectedOptions.filterPlacesByRating.from,
        to: selectedOptions.filterPlacesByRating.to,
      });
    }

    if (selectedOptions.sortPlaces) {
      this.sortPlaces(selectedOptions.sortPlaces);
    }

    if (selectedOptions.checkedTags.length > 0) {
      this.getFilteredPlacesByTags(selectedOptions.checkedTags);
    }

    return this.places;
  }

  sortPlaces(selectedOption: string) {
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

  getFilteredPlacesByRating(options: RangeInterface) {
    this.places = this.places.filter((place: Place) => {
      return place.Rating >= options.from && place.Rating <= options.to;
    });
  }

  getFilteredPlacesByName(options: SearchInterface) {
    this.places = this.places.filter((place: Place) => {
      return place.Name.toLowerCase()
        .split(' ')
        .includes(options.searchText.trim().toLowerCase());
    });
  }

  getFilteredPlacesByTags(selectedTags: string[]) {
    this.places = this.places.filter((place: Place) => {
      const containsTag = selectedTags.some((tag) => place.Tag.includes(tag));
      if (containsTag) {
        return place;
      } else {
        return false;
      }
    });
  }

  ratingFromHigh() {
    this.places = this.places.sort((a, b) =>
      a.Rating < b.Rating ? 1 : b.Rating < a.Rating ? -1 : 0
    );
    this.router.navigate(['/'], { queryParams: { order: 'Rating-H' } });
  }

  ratingFromLow() {
    this.places = this.places.sort((a, b) =>
      a.Rating > b.Rating ? 1 : b.Rating > a.Rating ? -1 : 0
    );
    this.router.navigate(['/'], { queryParams: { order: 'Rating-L' } });
  }

  reset() {
    this.places = data;
  }

  asc() {
    this.places = this.places.sort((a, b) =>
      a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
    );
    this.router.navigate(['/'], { queryParams: { order: 'A-Z' } });
  }

  desc() {
    this.places = this.places.sort((a, b) =>
      a.Name < b.Name ? 1 : b.Name < a.Name ? -1 : 0
    );
    this.router.navigate(['/'], { queryParams: { order: 'Z-A' } });
  }
}
