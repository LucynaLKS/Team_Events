import { Component, OnInit, Output } from '@angular/core';
import { TagsService } from '../tags.service';
import { Tag } from 'src/models/tag';

export interface TagInterface {
  selectedTags: Tag[];
}

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss'],
})
export class FilterTagsComponent implements OnInit {
  selectedTags: Tag[] = [];
  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {}

  onChange(code: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedTags.push(code);
    } else {
      const index = this.selectedTags.findIndex((x) => x.code === code);
      this.selectedTags.splice(index, 1);
    }
  }

  getTags(): Tag[] {
    return this.tagsService.getTags();
  }
}
