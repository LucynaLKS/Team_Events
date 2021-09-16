import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { SearchInterface } from '../search/search.component';
import { PlacesService } from '../places.service';
import { Place } from 'src/models/place';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  // @Output() userChangeEvent: EventEmitter<SearchInterface> =
  // new EventEmitter<SearchInterface>();

  Places: Place[] = [];

  searchPlaces(event: SearchInterface) {
    this.Places = this.PlacesService.getFilteredPlacesByName(event);
  }

  constructor(
    private PlacesService: PlacesService,
  ) {}

  ngOnInit(): void {
  }

  fetchPlaces(): any {
    this.Places = this.PlacesService.getPlaces();
  }

}
