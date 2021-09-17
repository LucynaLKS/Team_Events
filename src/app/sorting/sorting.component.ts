import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from 'src/models/place';

export interface SortInterface {
  value: string;
  label: string;
}
export interface userChangeEventInterface {
  selectedOption: string;
}
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  @Output() userChangeEvent: EventEmitter<userChangeEventInterface> =
    new EventEmitter<userChangeEventInterface>();

  @Input()
  places: Place[] = [];

  readonly sortOptions: SortInterface[] = [
    { value: 'No-sort', label: 'Brak' },
    { value: 'A-Z', label: 'A-Z' },
    { value: 'Z-A', label: 'Z-A' },
    { value: 'Rating-H', label: 'Ocena od najwyższej' },
    { value: 'Rating-L', label: 'Ocena od najniższej' },
  ];

  selectedSort = this.sortOptions[0].value;

  changeSort(selectedOption: string) {
    this.userChangeEvent.emit({
      selectedOption: selectedOption,
    });
  }
}
