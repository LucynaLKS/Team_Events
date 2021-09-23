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
    let output = data;

    if (selectedOptions.searchPlaces) {
      output = this.getFilteredPlacesByName(output, {
        searchText: selectedOptions.searchPlaces,
      });
    }

    if (selectedOptions.filterPlacesByRating) {
      output = this.getFilteredPlacesByRating(output, {
        from: selectedOptions.filterPlacesByRating.from,
        to: selectedOptions.filterPlacesByRating.to,
      });
    }

    return output;
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

  getFilteredPlacesByRating(places: Place[], options: RangeInterface): Place[] {
    return places.filter((place: Place) => {
      return place.Rating >= options.from && place.Rating <= options.to;
    });
  }

  getFilteredPlacesByName(places: Place[], options: SearchInterface): Place[] {
    return places.filter((place: Place) => {
      return place.Name.toLowerCase()
        .split(' ')
        .includes(options.searchText.trim().toLowerCase());
    });
  }

  ratingFromHigh() {
    this.places.sort((a, b) =>
      a.Rating < b.Rating ? 1 : b.Rating < a.Rating ? -1 : 0
    );
  }

  ratingFromLow() {
    this.places.sort((a, b) =>
      a.Rating > b.Rating ? 1 : b.Rating > a.Rating ? -1 : 0
    );
  }

  reset() {
    this.places.sort((a, b) => (a.Id > b.Id ? 1 : b.Id > a.Id ? -1 : 0));
  }

  asc() {
    this.places.sort((a, b) =>
      a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
    );
  }

  desc() {
    this.places.sort((a, b) =>
      a.Name < b.Name ? 1 : b.Name < a.Name ? -1 : 0
    );
  }
}
