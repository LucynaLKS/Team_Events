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

    if (selectedOptions.sortPlaces) {
      output = this.sortPlaces(output, selectedOptions.sortPlaces);
    }

    return output;
  }

  sortPlaces(places: Place[], selectedOption: string) {
    let output = data;

    if (selectedOption === 'No-sort') {
      output = this.reset(places);
    } else if (selectedOption === 'A-Z') {
      output = this.asc(places);
    } else if (selectedOption === 'Z-A') {
      output = this.desc(places);
    } else if (selectedOption === 'Rating-H') {
      output = this.ratingFromHigh(places);
    } else if (selectedOption === 'Rating-L') {
      output = this.ratingFromLow(places);
    }

    return output;
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

  ratingFromHigh(places: Place[]) {
    return places.sort((a, b) =>
      a.Rating < b.Rating ? 1 : b.Rating < a.Rating ? -1 : 0
    );
  }

  ratingFromLow(places: Place[]) {
    return places.sort((a, b) =>
      a.Rating > b.Rating ? 1 : b.Rating > a.Rating ? -1 : 0
    );
  }

  reset(places: Place[]) {
    return places.sort((a, b) => (a.Id > b.Id ? 1 : b.Id > a.Id ? -1 : 0));
  }

  asc(places: Place[]) {
    return places.sort((a, b) =>
      a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
    );
  }

  desc(places: Place[]) {
    return places.sort((a, b) =>
      a.Name < b.Name ? 1 : b.Name < a.Name ? -1 : 0
    );
  }
}
