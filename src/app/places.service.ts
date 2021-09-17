import { Injectable} from '@angular/core';
import data from './data/places-katowice.json';
import { Place } from '../models/place';
import { RangeInterface } from './slider/slider.component';
import { SearchInterface } from './search/search.component';


@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = data;

  constructor() {}
  getPlaces(): Place[] {
    return this.places;
  }

  getFilteredPlacesByRating(options: RangeInterface): Place[] {
    return this.places.filter((place: Place) => {
      return place.Rating >= options.from && place.Rating <= options.to;
    });
  }

  getFilteredPlacesByName(options: SearchInterface): Place[] {
    return this.places.filter((place: Place) => {
      return place.Name.toLowerCase()
        .split(' ')
        .includes(options.searchText.trim().toLowerCase());
    });
  }
}
