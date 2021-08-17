import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../../models/place';
 
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  p: number = 1;
  PlacesFromService: Place[] = [];
  constructor(private PlacesService: PlacesService) {}
 
  ngOnInit(): void {
    this.fetchPlaces();
  }
 
  private fetchPlaces(): any {
    this.PlacesFromService = this.PlacesService.getPlaces();
  }
}