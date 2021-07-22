import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent {
  communicate: string | undefined;
  hello(value: string) {
    this.communicate = 'Hi, ' + value;
  }
}
