import { Injectable } from '@angular/core';
import data from './data/places-katowice.json';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  places: Place[] = data;

  constructor() {}
  getPlaces(): Place[] {
    return this.places;
  }
}
