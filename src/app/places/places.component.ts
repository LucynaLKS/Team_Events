import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../../models/place';
import { PaginatePipe } from 'ngx-pagination';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  page: number = 1;
  PlacesFromService: Place[] = [];

  constructor(private PlacesService: PlacesService) {}

  ngOnInit(): void {
    this.fetchPlaces();
  }

  reset() {
    this.PlacesFromService.sort((a, b) =>
      a.Id > b.Id ? 1 : b.Id > a.Id ? -1 : 0
    );
    this.page = 1;
  }

  asc() {
    this.PlacesFromService.sort((a, b) =>
      a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
    );
    this.page = 1;
  }

  desc() {
    this.PlacesFromService.sort((a, b) =>
      a.Name < b.Name ? 1 : b.Name < a.Name ? -1 : 0
    );
    this.page = 1;
  }

  private fetchPlaces(): any {
    this.PlacesFromService = this.PlacesService.getPlaces();
  }
}
