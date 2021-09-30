import { Injectable } from '@angular/core';
import dataTags from './data/tags.json';
import { Tag } from 'src/models/tag';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private tags: Tag[] = dataTags;
  constructor() {}
  getTags() {
    return this.tags;
  }

  getLabelFromCode(code: string) {
    const el = this.tags.find((tag: Tag) => {
      return tag.code === code;
    });

    return el?.label;
  }
}
