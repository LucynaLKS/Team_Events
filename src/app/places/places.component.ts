import { Component, Input, OnInit, Output } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../../models/place';
import { ActivatedRoute, Router } from '@angular/router';

interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  @Output() rating = 0;

  @Input()
  currentPage: number = 1;

  @Input()
  places: Place[] = [];

  adIndex: number[] = [2, 4];

  sort: Sort[] = [
    { value: 'No-sort', viewValue: 'Brak' },
    { value: 'A-Z', viewValue: 'A-Z' },
    { value: 'Z-A', viewValue: 'Z-A' },
    { value: 'Rating-H', viewValue: 'Ocena od najwyższej' },
    { value: 'Rating-L', viewValue: 'Ocena od najniższej' },
  ];

  selectedSort = this.sort[0].value;

  constructor(
    private PlacesService: PlacesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  showAd(index: number): boolean {
    return this.adIndex.includes(index);
  }
}
