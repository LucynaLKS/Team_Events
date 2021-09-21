import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

export interface RangeInterface {
  from: number;
  to: number;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() rating: number = 0;
  @Output() userChangeEvent: EventEmitter<RangeInterface> =
    new EventEmitter<RangeInterface>();

  lowValue: number = 0;
  highValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 5,
    step: 0.5,
  };

  filteringRating() {
    this.userChangeEvent.emit({
      from: this.lowValue,
      to: this.highValue,
    });
  }
}
