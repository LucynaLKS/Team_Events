import { Component, OnInit } from '@angular/core';
import { Place } from 'src/models/place';
import { PlacesService } from './places.service';
import { SearchInterface } from './search/search.component';
import { sortInterface } from './sorting/sorting.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'team-events';

  places: Place[] = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.places = this.placesService.getPlaces();
  }

  searchPlaces(event: SearchInterface) {
    this.places = this.placesService.getFilteredPlacesByName(event);
  }
}
