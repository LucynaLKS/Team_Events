import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/models/place';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;

  readonly maxRating: number[] = [0,1,2,3,4];
 
  constructor() {}

  isFull(i: number, rating: number): boolean {
    return i + 1 <= rating;
  }

  isHalf(i: number, rating: number): boolean{
    return rating > i;
  }

  ngOnInit(): void {}
}
