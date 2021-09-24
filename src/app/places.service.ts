import { Injectable } from '@angular/core';
import data from './data/places-katowice.json';
import { Place } from '../models/place';
import { RangeInterface } from './slider/slider.component';
import { SearchInterface } from './search/search.component';
import { selectedOptionsInterface } from './side-bar/side-bar.component';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = data;

  constructor() {}
  getPlaces(): Place[] {
    return data;
  }

  filterPlaces(selectedOptions: selectedOptionsInterface): Place[] {
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

  ratingFromHigh() {
    this.places = this.places.sort((a, b) =>
      a.Rating < b.Rating ? 1 : b.Rating < a.Rating ? -1 : 0
    );
  }

  ratingFromLow() {
    this.places = this.places.sort((a, b) =>
      a.Rating > b.Rating ? 1 : b.Rating > a.Rating ? -1 : 0
    );
  }

  reset() {
    this.places = data;
  }

  asc() {
    this.places = this.places.sort((a, b) =>
      a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
    );
  }

  desc() {
    this.places = this.places.sort((a, b) =>
      a.Name < b.Name ? 1 : b.Name < a.Name ? -1 : 0
    );
  }
}
