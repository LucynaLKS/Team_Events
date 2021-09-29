import { Component, OnInit, Output } from '@angular/core';
import { TagsService } from '../tags.service';
import { Tag } from 'src/models/tag';

@Component({
  selector: 'app-filter-tags',
  templateUrl: './filter-tags.component.html',
  styleUrls: ['./filter-tags.component.scss'],
})
export class FilterTagsComponent implements OnInit {
  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {}

  getTags(): Tag[] {
    return this.tagsService.getTags()
  }
}
