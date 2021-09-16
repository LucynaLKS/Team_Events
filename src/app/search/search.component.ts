import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export interface SearchInterface {
  searchText: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() userChangeEvent: EventEmitter<SearchInterface> =
    new EventEmitter<SearchInterface>();

  readonly value = 'Wpisz nazwę miejsca...';

  search(searchText: string) {
    this.userChangeEvent.emit({
      searchText,
    });
  }
}
