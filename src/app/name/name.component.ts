import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  communicate: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  hello(value: string) {
    this.communicate = 'Hi, ' + value;
  }

}
