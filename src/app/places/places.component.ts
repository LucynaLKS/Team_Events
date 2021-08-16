import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

interface Place {
  Id: number;
  Name: String;
  Address: String;
  Phone: String;
  Link: String;
  Max_persons: String;
  Tag: String;
  Description: String;
}

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  PlacesFromService: any = null;
  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
    this.fetchPlaces();
  }

  private fetchPlaces(): any {
    this.PlacesFromService = this.pagesService.getPlaces();
  }
}
