import { Component, OnInit } from '@angular/core';

interface AdInterface {
  url: string;
  img: string;
}

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  ad: AdInterface;

  private readonly ads: AdInterface[] = [
    {
      img: 'https://via.placeholder.com/728x90.png?text=Team+App+AD',
      url: 'https://hyland.com',
    },
    {
      img: 'https://via.placeholder.com/728x140.png?text=Hyland+AD',
      url: 'https://hyland.com',
    },
  ];

  constructor() {
    this.ad = this.getRandomAd();
  }

  ngOnInit(): void {}

  getRandomAd(): AdInterface {
    return this.ads[Math.floor(Math.random() * this.ads.length)];
  }
}
