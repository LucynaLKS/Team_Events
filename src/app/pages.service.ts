import { Injectable } from '@angular/core';
import data from '../app/data/places-katowice.json';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  places: any = data;

  constructor() {}
  getPlaces(): any {
    return this.places;
  }
}
