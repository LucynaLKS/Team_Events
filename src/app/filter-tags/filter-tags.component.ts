import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TagsService } from '../tags.service';
import { Tag } from 'src/models/tag';

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss'],
})
export class FilterTagsComponent implements OnInit {
  @Output() userChangeEvent: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  selectedTags: string[] = [];
  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {}

  onChange(code: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedTags.push(code);
    } else {
      const index = this.selectedTags.indexOf(code);
      this.selectedTags.splice(index, 1);
    }
    this.userChangeEvent.emit(this.selectedTags);
  }

  getTags(): Tag[] {
    return this.tagsService.getTags();
  }
}
